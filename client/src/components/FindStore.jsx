import React from 'react';
import ReactModal from 'react-modal';

const findStyles = {
  content : {
    top                   : '10%',
    left                  : '30%',
    right                 : '30%',
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
      textDecoration: "none",
      color: "#3278AE"
    }
    return (
      <div>
        <a href="###" style={findStoreStyle} onClick={this.handleOpenModal}>Find a store near you</a>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Find a Store"
           style={findStyles}
           onRequestClose={this.handleCloseModal}
        >
          <button className="KL-x-modal" onClick={this.handleCloseModal}>x</button>
        </ReactModal>
      </div>
    );
  }
}


export default FindStore;