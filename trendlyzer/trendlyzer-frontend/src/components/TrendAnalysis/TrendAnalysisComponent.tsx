import React, { useContext } from 'react';
import { Alert, Box, Snackbar } from '@mui/material';
import { useParams } from 'react-router-dom';
import RelatedArticlesComponent from '../RelatedArticles/RelatedArticlesComponent';
import RelatedTweetsComponent from '../RelatedTweets/RelatedTweetsComponent';
import TrendReasonComponent from '../TrendReason/TrendReasonComponent';
import Loader from '../UIComponents/Loader/LoaderComponent';
import RegionDetailsComponent from '../RegionDetails/RegionDetailsComponent';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';

const TrendAnalysisComponent = ({ trendData, setTrendData }: any) => {
  const { id } = useParams();
  const { trendDetails } = useContext(TrendDetailsContext);
  const { loading, error, showError, trendBackground, trendReason } = trendData;

  return (
    <>
      {loading && <Loader />}
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={showError}
          key='topright'
          onClose={() => setTrendData((prevState: any) => ({ ...prevState, showError: false }))}
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
