import React from 'react';
import './Video.css';

const images = ['mobileBanner0.jpg', 'mobileBanner1.jpg', 'mobileBanner2.jpg', 'mobileBanner3.jpg', 'mobileBanner4.jpg', 'mobileBanner5.jpg', 'mobileBanner6.jpg'];
const imagesArray = images.map(img => require(`../assets/${img}`));

const imagesDesk = ['deskBanner0.jpg', 'deskBanner1.jpg', 'deskBanner2.jpg', 'deskBanner3.jpg', 'deskBanner4.jpg', 'deskBanner5.jpg', 'deskBanner6.jpg'];
const imagesArrayDesk = imagesDesk.map(img => require(`../assets/${img}`));

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.nextImage, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  nextImage = () => {
    let current = this.state.currentImageIndex;
    let next = current + 1;
    this.setState({
      currentImageIndex: next === this.props.images.length ? 0 : next
    });
  }

  render() {
    return (
      <img src={this.props.images[this.state.currentImageIndex]} alt="" style={{width: '100%'}}/>
    );
  }
}

function Video() {
  return (
    <div>
      <div className="video-barMobile">
        <ImageSlider images={imagesArray} interval={3750}/>
      </div>
      <div className="video-bar">
        <ImageSlider images={imagesArrayDesk} interval={3750}/>
      </div>
    </div>
  );
}

export default Video;