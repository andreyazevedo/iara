import React from 'react';
import './gallery.css';

const images = [
  'https://images-americanas.b2w.io/produtos/01/00/img2/134270/7/134270778_1GG.jpg',
  'https://images-americanas.b2w.io/produtos/01/00/img2/134270/7/134270778_2GG.jpg',
  'https://images-americanas.b2w.io/produtos/01/00/img2/134270/7/134270778_5GG.jpg'
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: props.width,
      containerWidth: props.width * images.length,
      selectedImage: 0,
    };
  }

  changeIndex() {
    const { selectedImage } = this.state;

    this.setState({ selectedImage: selectedImage + 1});
  }

  renderImage(url) {
    return (
      <div className="iara-image" style={this.getImageStyle()}>
        <img alt="123" src={url} />
      </div>
    );
  }

  getContainerStyle() {
    const { containerWidth, selectedImage, width } = this.state;
    const indexPositionValue = width * selectedImage;

    return {
      width: containerWidth,
      transform: `translate3d(-${indexPositionValue}px, 0, 0)`,
    };
  }

  getImageStyle() {
    return {
      width: this.state.width,
    };
  }

  render() {
    return(
      <div className="iara-gallery" style={{width: this.state.width}}>
        <div className="iara-container" style={this.getContainerStyle()}>
        {images.map(image => this.renderImage(image))}
        </div>
        <button onClick={this.changeIndex.bind(this)}>próximo</button>
      </div>
    )
  }
}

export default Gallery;
