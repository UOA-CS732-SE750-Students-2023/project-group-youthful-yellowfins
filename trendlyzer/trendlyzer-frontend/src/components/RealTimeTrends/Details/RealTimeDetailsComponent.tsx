import React, { useState, useEffect, useContext } from 'react';
import { Alert, Box, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CardWrapperComponent from '../../UIComponents/Card/CardWrapper';
import { getDailyTrends } from '../../../services/dashboardService';
import { IArticle, RealTimeListResponse, WrapperProps } from '../../../models/common';
import { TrendDetailsContext } from '../../../context/TrendDetailsContext';
import Loader from '../../UIComponents/Loader/LoaderComponent';

const RealTimeDetailsComponent = ({ country, category }: any) => {
  const [trendsList, setTrendsList] = useState<RealTimeListResponse[]>([]);
  const { handleTrendDetails, setShowNavigation } = useContext(TrendDetailsContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const handleMoreDetails = (value: any) => {
    const article = {
      ...value,
      articles: value.articles.map((article: IArticle) => ({
        ...article,
        image: value.image,
      })),
    };
    handleTrendDetails(article);
    setShowNavigation(true);
    navigate({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      pathname: `/trendsDetails/${value.id}`,
    });
  };

  useEffect(() => {
    setLoading(true);
    getDailyTrends({
      geocode: country,
      category,
    })
      .then((response) => {
        if (response.data.status) {
          setTrendsList(response.data.result);
          setLoading(false);
          setShowError(false);
          setError('');
        } else {
          setLoading(false);
          setError(response.data.message);
          setShowError(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setShowError(true);
      });
  }, [country, category]);

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
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {trendsList.map((story: WrapperProps, index) => {
            return (
              <CardWrapperComponent
                key={index}
                {...story}
                id={index + 1}
                handleMoreDetails={() => handleMoreDetails({ ...story, id: index + 1 })}
              />
            );
          })}
        </Box>
      )}
    </>
  );
};

export default RealTimeDetailsComponent;
