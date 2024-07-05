import React from 'react';
import './PopUpVideo.scss';
import videoPreview from '../../assets/images/DeMar_DeRozan.jpeg';

const PopUpVideo = ({ showPopup, togglePopup }) => {
    return (
        <div className={`video-popup ${showPopup ? 'active' : ''}`}>

            <div className="overlay" onClick={togglePopup}></div>


            <div className="popup-content">
            
            <video className="liveVideo--popUp" controls poster={videoPreview} onClick={togglePopup}>
            </video>
                <button className="close-button" onClick={togglePopup}>
                    X
                </button>
            </div>
        </div>
    );
};

export default PopUpVideo;
