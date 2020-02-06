import React from 'react';
import ImageMagnify from './ImageMagnify.jsx';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.element.images[0],
      description: '',
      description2: '',
    }
  
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      picture: e.target.value,
      description: e.target.alt,
      description2: e.target.extrainfo
    })
    console.log(this.state.description2)
  }

  render() {
    return(
      <div className = "KL-photos">
        <div className = "KL-photos-container">
          <ImageMagnify picture = {this.state.picture}/>
          <div className="KL-carousel">
            <label className="KL-carousel-radio" htmlFor="image-0">
              <input type="radio" name="images" id="image-0" alt="Image 1 of 6:" extrainfo="Black/Clear/Smoke" value={this.props.element.images[0]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #e5e5e5", margin: "5px 5px 5px 0px"}}
                  src={this.props.element.images[0]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor="image-1">
              <input type="radio" name="images" id="image-1" alt="Image 2 of 6:" extra="Friendly Dog" value={this.props.element.images[1]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #e5e5e5", margin: 5}}
                  src={this.props.element.images[1]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor="image-2">
              <input type="radio" name="images" id="image-2"alt="Image 3 of 6:" extra="Angry Dog" value={this.props.element.images[2]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #e5e5e5", margin: 5}}
                  src={this.props.element.images[2]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor="image-3">
              <input type="radio" name="images" id="image-3"alt="Image 4 of 6:" extra="Friendlier Dog" value={this.props.element.images[3]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #e5e5e5", margin: 5}}
                  src={this.props.element.images[3]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor="image-4">
              <input type="radio" name="images" id="image-4"alt="Image 5 of 6:" extra="Angrier Dog" value={this.props.element.images[4]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #e5e5e5", margin: 5}}
                  src={this.props.element.images[4]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor="image-5">
                <input type="radio" name="images" id="image-5"alt="Image 6 of 6:" extra="Friendliest Dog" value={this.props.element.images[5]} onClick={this.handleChange}/>
                  <img
                    className="KL-carousel-radio-img"
                    style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #e5e5e5", margin: "5px 0px 5px 5px"}}
                    src={this.props.element.images[5]}/>
            </label>
          </div>
          {this.state.description}
          {this.state.description2}
        </div>
      </div>
    )
  }
}

export default ImageCarousel;