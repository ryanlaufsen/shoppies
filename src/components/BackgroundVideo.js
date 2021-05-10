import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <>
      <div className="video-background">
        <div className="video-foreground">
        <iframe
        title="Background Video"
        width="2560" height="1440"
        src="https://www.youtube.com/embed/ezehIRCbTNc?start=915&vq=hd1440&controls=0&disablekb=1&fs=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=ezehIRCbTNc"
        frameBorder="0"
        allowFullScreen>
        </iframe>
        </div>
      </div>
    </>
  );
}

export default BackgroundVideo;