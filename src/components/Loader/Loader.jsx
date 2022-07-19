import React from 'react';
import { Bars } from 'react-loader-spinner';

function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Bars
        heigth="100"
        width="100"
        color="#3F51B5"
        ariaLabel="loading-indicator"
      />
    </div>
  );
}

export default Loader;