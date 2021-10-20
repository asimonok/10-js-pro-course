import React from 'react';
import './Preloader.css';

interface Props {
    isActive: boolean;
}

const Preloader: React.FC<Props> = ({isActive}) => {

    return (
        <div>
            <div className="loadingio-spinner-spinner-qam2xp4ihh"><div className="ldio-jfm88hnlvbr">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </div>
    )
}

export default Preloader;