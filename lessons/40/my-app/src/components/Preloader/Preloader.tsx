import React, { useState } from 'react';
import './Preloader.css';

const Preloader: React.FC<{}> = (props) => {
  const [preloader, setPreloader] = useState('loading');

  document.body.onload = () => {
    setTimeout(() => {
      setPreloader('loaded');
    }, 2000);
  };

  return (
    <div className={`preloader ${preloader === 'loading' ? `` : `done`}`}></div>
  );
};

export default Preloader;
