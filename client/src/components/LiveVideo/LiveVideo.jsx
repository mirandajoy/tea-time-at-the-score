import './LiveVideo.scss';
import videoPreview from '../../assets/images/DeMar_DeRozan.jpeg';
import viewsIcon from '../../assets/icons/views.svg';


function LiveVideo() {
    return (
    <main className="liveVideo--section">
        <div className="liveVideo--container">
            <video className="liveVideo--display"controls poster={videoPreview}>
            </video>
            <div className="liveVideo--widget">
                <p className="liveVideo-widegetText">Live</p>
            </div>
            <div className="liveVideo--widgetViews">
                <img className="liveVideo--viewsIcon" src= {viewsIcon} />
                <p className="liveVideo--viewsNum">500</p>
            </div>

        </div>
    </main>
    )
}

export default LiveVideo;
