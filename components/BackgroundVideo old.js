import './BackgroundVideo.css';
import React from 'react';

class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

revealVideo = () => {
    this.setState({
      loading: false
    });
  };

render() {
    return (
      <>
        {/* <div className="video-curtain"></div> */}
        <div className="video-background">
          <div className="video-foreground">
            <iframe
            title="Background Video"
            width="2560" height="1440"
            onLoad={this.revealVideo}
            src="https://www.youtube.com/embed/ezehIRCbTNc?start=915&vq=hd1440&controls=0&disablekb=1&fs=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=ezehIRCbTNc"
            frameBorder="0"
            allowFullScreen>
            </iframe>
          </div>
      </div>
      </>
    );
  }
}

export default BackgroundVideo;