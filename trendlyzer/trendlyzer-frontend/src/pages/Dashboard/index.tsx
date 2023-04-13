import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { headingsValue, tabsList } from '../../config/labels';
import TabPanel from '../../components/UIComponents/TabPanel';

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(headingsValue.DAILY_TRENDS);

  const handleChange = (event: React.SyntheticEvent, value: string) => setTabValue(value);

  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
      >
        {tabsList.map((tab) => (
          <Tab value={tab.value} label={tab.label} key={tab.value} />
        ))}
      </Tabs>

      {tabsList.map((tab) => (
        <TabPanel key={tab.value} value={tabValue} index={tab.value}>
          {tab.element}
        </TabPanel>
      ))}
    </>
  );
};

export default Dashboard;
