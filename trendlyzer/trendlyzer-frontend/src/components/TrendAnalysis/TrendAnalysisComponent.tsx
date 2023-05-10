import React, { useContext, useEffect, useState } from 'react';
import { Alert, Box, Snackbar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import RelatedArticlesComponent from '../RelatedArticles/RelatedArticlesComponent';
import RelatedTweetsComponent from '../RelatedTweets/RelatedTweetsComponent';
import TrendReasonComponent from '../TrendReason/TrendReasonComponent';
import Loader from '../UIComponents/Loader/LoaderComponent';
import { getChatgptData } from '../../services/trendDetailsService';
import RegionDetailsComponent from '../RegionDetails/RegionDetailsComponent';

const TrendAnalysisComponent = () => {
  const { id } = useParams();
  const { trendDetails, setShowNavigation } = useContext(TrendDetailsContext);
  const [loading, setLoading] = useState(false);
  const [trendReason, setTrendReason] = useState('');
  const [trendBackground, setTrendBackground] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setShowNavigation(true);
    getChatgptData({ message: trendDetails.title })
      .then((response) => {
        if (response.data.status) {
          setTrendReason(response.data.result.promptTrendingReason);
          setTrendBackground(response.data.result.promptBackground);
          setLoading(false);
        } else {
          setLoading(false);
          setError('');
          setShowError(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setShowError(true);
      });
    return () => {
      setShowNavigation(false);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={showError}
          key='topright'
          onClose={() => setShowError(false)}
          autoHideDuration={5000}
        >
          <Alert severity='error' sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
      {!loading && !error && (
        <Box sx={{ ml: 3, mr: 3 }}>
          {Number(id) && trendDetails && (
            <>
              <TrendReasonComponent trendReason={trendReason} trendBackground={trendBackground} />
              <RelatedArticlesComponent articles={trendDetails.articles} />
              <br />
              <RelatedTweetsComponent keyword={trendDetails.title} />
              <RegionDetailsComponent
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
