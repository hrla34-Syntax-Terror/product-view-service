import React from 'react';
import ReactModal from 'react-modal';

const cartStyles = {
  content : {
    top                   : '10%',
    left                  : '30%',
    right                 : '30%',
    bottom                : 'auto',
  }
};

class AddToCart extends React.Component {
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
    var addCartStyle = {
      textDecoration: "none",
      color: "#fff"
    }
    return (
      <div>
        <span style={addCartStyle} onClick={this.handleOpenModal}>Add to cart</span>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Add to Cart"
           style={cartStyles}
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
                <img className="KL-search-image"/>
                <input className="KL-search-bar" defaultValue="Zip code or city, state"/>
                  <div className="KL-add-search-button">
                  </div>
                <img  className="KL-location-image" src="https://rei.github.io/cedar-icons/icons/find-location.svg"/>
                    
              <div className="KL-add-location">
              </div>
              </div>
            </div>
            {/* <div bottom half>
              {settimeout function}
              {take picture and upload it}
              {scroll bar functionality?}

            </div> */}

          </div>
        </ReactModal>
      </div>
    );
  }
}


export default AddToCart;