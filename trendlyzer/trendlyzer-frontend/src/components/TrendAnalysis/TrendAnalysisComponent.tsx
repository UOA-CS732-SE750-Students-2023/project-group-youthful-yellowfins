import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import RelatedArticlesComponent from '../RelatedArticles/RelatedArticlesComponent';
import RelatedTweetsComponent from '../RelatedTweets/RelatedTweetsComponent';
import TrendReasonComponent from '../TrendReason/TrendReasonComponent';
import Loader from '../UIComponents/Loader/LoaderComponent';
import { getChatgptData } from '../../services/trendDetailsService';
import RegionDetailsComponent from '../RegionDetails/RegionDetailsComponent';
import { CountriesContext } from '../../context/CountriesContext';

const TrendAnalysisComponent = () => {
  const { id } = useParams();
  const { trendDetails, setShowNavigation } = useContext(TrendDetailsContext);
  const { selectedCountry } = useContext(CountriesContext);
  const [loading, setLoading] = useState(false);
  const [trendReason, setTrendReason] = useState('');
  const [trendBackground, setTrendBackground] = useState('');

  useEffect(() => {
    setLoading(true);
    setShowNavigation(true);
    getChatgptData({ message: trendDetails.title })
      .then((response) => {
        setTrendReason(response.data.result.promptTrendingReason);
        setTrendBackground(response.data.result.promptBackground);
        setLoading(false);
      })
      .catch(() => {});
    return () => {
      setShowNavigation(false);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Box sx={{ ml: 3, mr: 3 }}>
          {Number(id) && trendDetails && (
            <>
              <TrendReasonComponent trendReason={trendReason} trendBackground={trendBackground} />
              <RelatedArticlesComponent articles={trendDetails.articles} />
              <br />
              <RelatedTweetsComponent keyword={trendDetails.title} />
              <RegionDetailsComponent
                country={selectedCountry}
                searchKeyword={trendDetails.title}
                showTable={false}
                title={'Region-wise Statistics'}
              />
            </>
          )}
          {!Number(id) && <></>}
        </Box>
      )}
    </>
  );
};

export default TrendAnalysisComponent;
