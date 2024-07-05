import './LiveVideo.scss';
import videoPreview from '../../assets/images/DeMar_DeRozan.jpeg'


function LiveVideo() {
    return (
    <main className="liveVideo--section">
        <video className="liveVideo--display"controls poster={videoPreview}>
        </video>
    </main>
    )
}

export default LiveVideo;
