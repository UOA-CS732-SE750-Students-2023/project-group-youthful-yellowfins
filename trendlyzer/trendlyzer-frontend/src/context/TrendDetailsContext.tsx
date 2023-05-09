import React, { createContext, useState } from 'react';

const defaultState: any = {
  trendDetails: {},
  handleTrendDetails: (value: any) => {},
  showNavigation: false,
  setShowNavigation: () => {},
};

export const TrendDetailsContext = createContext<any>(defaultState);

const TrendDetailsProvider = ({ children }: any) => {
  const [trendDetails, setTrendDetails] = useState();
  const [showNavigation, setShowNavigation] = useState();

  const handleTrendDetails = (value: any) => {
    setTrendDetails(value);
  };

  return (
    <TrendDetailsContext.Provider
      value={{
        trendDetails,
        handleTrendDetails,
        showNavigation,
        setShowNavigation,
      }}
    >
      {children}
    </TrendDetailsContext.Provider>
  );
};

export default TrendDetailsProvider;
