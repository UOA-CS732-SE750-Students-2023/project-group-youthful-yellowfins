/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { Alert, Box, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CardWrapperComponent from '../../UIComponents/Card/CardWrapper';
import { getDailyTrends } from '../../../services/dashboardService';
import { TrendsListResponse, WrapperProps } from '../../../models/common';
import { TrendDetailsContext } from '../../../context/TrendDetailsContext';
import Loader from '../../UIComponents/Loader/LoaderComponent';
import NoResultFoundComponent from '../../NoResultFound/NoResultFoundComponent';

const DailyTrendsDetailsComponent = ({ country, date }: any) => {
  const [trendsList, setTrendsList] = useState<TrendsListResponse[]>([
    {
      date: '',
      formattedDate: '',
      trendingStories: [],
    },
  ]);
  const { handleTrendDetails, setShowNavigation } = useContext(TrendDetailsContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const handleMoreDetails = (value: any) => {
    handleTrendDetails(value);
    setShowNavigation(true);
    navigate({
      pathname: `/trendsDetails/${value.id}`,
    });
  };

  useEffect(() => {
    setLoading(true);
    getDailyTrends({
      geocode: country,
      category: 'all',
      date: dayjs(date).format('YYYY-MM-DD'),
    })
      .then((response) => {
        if (response.data.status) {
          setTrendsList(response.data.result);
          setLoading(false);
          setError('');
          setShowError(false);
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
  }, [country, date]);

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
          {trendsList.length > 0 &&
            trendsList[0].trendingStories.map((story: WrapperProps, index) => {
              return (
                <CardWrapperComponent
                  key={index}
                  {...story}
                  id={index + 1}
                  handleMoreDetails={() => handleMoreDetails({ ...story, id: index + 1 })}
                />
              );
            })}
          {!trendsList.length && <NoResultFoundComponent />}
        </Box>
      )}
    </>
  );
};

export default DailyTrendsDetailsComponent;
