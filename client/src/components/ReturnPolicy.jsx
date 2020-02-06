import React from 'react';
import ReactModal from 'react-modal';

var customReturnStyles = {
  content : {
    top                   : '70%',
    left                  : '58%',
    right                 : '22%',
    bottom                : 'auto',
  },

  overlay: {
    backgroundColor: 'transparent'
  }
};

class ReturnPolicy extends React.Component {
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
    var returnStyle = {
      textDecoration: "none",
      color: "#3278AE",
      "margin": "10px 0px 10px 0px"
    }
    return (
      <div>
        <a href="##" style={returnStyle} onClick={this.handleOpenModal}>REI return Policy</a>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Return Policy"
           onRequestClose={this.handleCloseModal}
           style={customReturnStyles}
           
        >
          <p className="KL-free-shipping-header">100% satisfaction guaranteed</p>
          <p>We stand behind everything we sell. If you’re not satisfied with your REI purchase, you can return it for a replacement or refund within one year of purchase, except for outdoor electronics, which must be returned within 90 days of purchase. Outdoor electronics include activity monitors, GPS-enabled devices, bike trainers, emergency-communication devices, and cameras.</p>
          <p>REI's guarantee doesn't cover ordinary wear and tear or damage caused by improper use or accidents.</p>
          <p>See our complete <a href="" style={returnStyle}>return policy</a></p>
        </ReactModal>
      </div>
    );
  }
}


export default ReturnPolicy;