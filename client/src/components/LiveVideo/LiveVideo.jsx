import React, { useState } from 'react';
import './LiveVideo.scss';
import PopUpVideo from '../PopUpVideo/PopUpVideo';
import videoPreview from '../../assets/images/DeMar_DeRozan.jpeg';
import viewsIcon from '../../assets/icons/views.svg';

function LiveVideo() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <main className="liveVideo--section">
            <div className="liveVideo--container">

                <video className="liveVideo--display" controls poster={videoPreview} onClick={togglePopup}>
                </video>

            
                <div className="liveVideo--widget">
                    <p className="liveVideo-widegetText">Live</p>
                </div>

        
                <div className="liveVideo--widgetViews">
                    <img className="liveVideo--viewsIcon" src={viewsIcon} alt="Views Icon" />
                    <p className="liveVideo--viewsNum">500</p>
                </div>
            </div>


            {showPopup && <PopUpVideo videoSource={videoPreview} togglePopup={togglePopup} />}
        </main>
    );
}

export default LiveVideo;

