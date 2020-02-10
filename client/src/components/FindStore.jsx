import React from 'react';
import ReactModal from 'react-modal';

const findStyles = {
  content : {
    top                   : '10%',
    left                  : '34%',
    right                 : '34%',
    bottom                : 'auto',
  }
};

class FindStore extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    var findStoreStyle = {
      color: "#3278AE"
    }
    return (
      <div>
        <span className="KL-store-cursor" style={findStoreStyle} onClick={this.handleOpenModal}>Find a store near you</span>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Find a Store"
           style={findStyles}
           onRequestClose={this.handleCloseModal}
        >
          <div>
            <div className="KL-add-header">
                <span>Find a store near you</span>
              <div className="KL-x-modal" onClick={this.handleCloseModal}>
                <img className="KL-x-symbol" src="https://rei.github.io/cedar-icons/icons/x-lg.svg"/>
              </div>
            </div>
            <div className="KL-add-to-details">
              <img 
              className="KL-add-product-style"
              src={this.props.element.images[0]}
              />
              <div className="KL-add-product-details">
                <div>
                {this.props.element.brand}
                </div>
                {this.props.element.name}
                <div>
                {this.props.element.size}
                </div>
              </div>
            </div>
            <div className="KL-add-search-bar">
              <div className="KL-add-actual-search">
                <div className="KL-search-bar-border">
                  <input className="KL-search-bar" placeholder="ZIP code or city, state"/>
                  <span className="KL-add-search-button">Search</span>
                </div>
                <div className="KL-location-image">
                  <div className="KL-location-image-button-holder">
                    <img className="KL-location-image-button" src="https://rei.github.io/cedar-icons/icons/find-location.svg"/>
                  </div>
                </div>
              </div>
            </div>
            <img className="KL-add-to-cart-image" src ="https://fec-rei-product-img.s3-us-west-1.amazonaws.com/GhettoAddToCart.PNG"/>
          </div>
        </ReactModal>
      </div>
    );
  }
}


export default FindStore;