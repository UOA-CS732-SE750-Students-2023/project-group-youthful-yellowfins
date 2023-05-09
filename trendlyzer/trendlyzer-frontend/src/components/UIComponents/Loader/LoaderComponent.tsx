import React from 'react';
import { AtomLoader } from 'react-loaders-kit';
import classes from './LoaderComponent.module.css';

const Loader = () => {
  const loaderProps = {
    loading: true,
    size: 80,
    duration: 2,
    colors: ['#f72585ff', '#560badff'],
  };

  return (
    <div className={classes.loader}>
      <AtomLoader {...loaderProps} />
    </div>
  );
};

export default Loader;
