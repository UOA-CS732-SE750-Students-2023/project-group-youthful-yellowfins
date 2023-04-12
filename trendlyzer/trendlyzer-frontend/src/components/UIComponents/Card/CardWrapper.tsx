import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const CardWrapperComponent = (props: WrapperProps) => {
  return <div>{props.children}</div>;
};

export default CardWrapperComponent;
