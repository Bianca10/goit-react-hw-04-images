import React from 'react';
import Loader from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <div className="loader-container">
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default CustomLoader;
