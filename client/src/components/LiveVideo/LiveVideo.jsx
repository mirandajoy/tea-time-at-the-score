import './LiveVideo.scss';
import videoPreview from '../../assets/images/DeMar_DeRozan.jpeg'


function LiveVideo() {
    return (
    <main className="liveVideo--section">
        <div className="liveVideo--container">
            <video className="liveVideo--display"controls poster={videoPreview}>
            </video>
            <div className="liveVideo--widget">
                <p className="liveVideo-widegetText">Live</p>
            </div>
        </div>
    </main>
    )
}

export default LiveVideo;
