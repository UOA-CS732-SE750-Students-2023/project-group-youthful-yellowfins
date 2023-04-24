import React, { createContext, useState } from 'react';

const defaultState: any = {
  trendDetails: {},
  handleTrendDetails: (value: any) => {},
};

export const TrendDetailsContext = createContext<any>(defaultState);

const TrendDetailsProvider = ({ children }: any) => {
  const [trendDetails, setTrendDetails] = useState();

  const handleTrendDetails = (value: any) => {
    setTrendDetails(value);
  };

  return (
    <TrendDetailsContext.Provider
      value={{
        trendDetails,
        handleTrendDetails,
      }}
    >
      {children}
    </TrendDetailsContext.Provider>
  );
};

export default TrendDetailsProvider;
