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
        <a href="####" style={addCartStyle} onClick={this.handleOpenModal}>Add to cart</a>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Add to Cart"
           style={cartStyles}
           onRequestClose={this.handleCloseModal}
        >
           <button className="KL-x-modal" onClick={this.handleCloseModal}>x</button>
        </ReactModal>
      </div>
    );
  }
}


export default AddToCart;