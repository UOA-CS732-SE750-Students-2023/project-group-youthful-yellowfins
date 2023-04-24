import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { headingsValue, tabsDetailsList } from '../../config/labels';
import TabPanel from '../../components/UIComponents/TabPanel';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import TrendDetailsHeaderComponent from '../../components/TrendDetailsHeader/TrendDetailsHeaderComponent';

const TrendsDetails = () => {
  const { setShowNavigation } = useContext(TrendDetailsContext);
  const [tabValue, setTabValue] = useState(headingsValue.TREND_ANALYSIS);

  const handleChange = (event: React.SyntheticEvent, value: string) => setTabValue(value);

  useEffect(() => {
    return () => {
      setShowNavigation(false);
    };
  });

  return (
    <>
      <TrendDetailsHeaderComponent />
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
        sx={{ padding: '20px' }}
      >
        {tabsDetailsList.map((tab) => (
          <Tab value={tab.value} label={tab.label} key={tab.value} />
        ))}
      </Tabs>

      {tabsDetailsList.map((tab) => (
        <TabPanel key={tab.value} value={tabValue} index={tab.value}>
          {tab.element}
        </TabPanel>
      ))}
    </>
  );
};

export default TrendsDetails;
