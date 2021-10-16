import React, { useState } from 'react';
import './Preloader.css';

const Preloader: React.FC<{}> = (props) => {
  const [preloader, setPreloader] = useState('loading');

  document.body.onload = () => {
    setPreloader('loaded');
  };

  return (
    <div className={`preloader ${preloader === 'loading' ? `` : `done`}`}></div>
  );
};

export default Preloader;
