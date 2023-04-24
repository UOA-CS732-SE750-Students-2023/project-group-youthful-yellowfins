import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@mui/material';
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
      category: 'All',
    })
      .then((response) => {
        if (response.data.status) {
          setTrendsList(response.data.result);
          setLoading(false);
        }
      })
      .catch(() => {});
  }, [country]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
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
