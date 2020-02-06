import React from 'react';
import FreeShipping from './FreeShipping.jsx';
import ReturnPolicy from './ReturnPolicy.jsx';
import FindStore from './FindStore.jsx';
import AddToCart from './AddToCart.jsx';
import ImageCarousel from './ImageCarousel.jsx';

class DisplayEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  handleChange(e) {
    var numberBaby = parseInt(e.target.value);
    this.setState({
      [e.target.name]: numberBaby
    })
    console.log(this.state.quantity);
  }

  handleSubmit(e) {
    // var numberBaby = parseInt(e.target.value);
    e.preventDefault(e);
    this.handleChange(e);
    e.target.reset();
  }

  decrementQuantity() {
    this.setState({
      quantity: this.state.quantity - 1
    })
  }

  incrementQuantity() {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  render() {
    return( 
    <div className = "KL-main">
      <ImageCarousel element = {this.props.element}/>
      <div className = "KL-description">
        <div className = "KL-brand">
          {this.props.element.brand}
        </div>
        <div className = "KL-title">
          {this.props.element.name}  
        </div>
        <div className = "KL-review-item-wrapper">
          ({this.props.element.rating})
          <div className = "KL-item-number">
            Item# {this.props.element.item}
          </div>
        </div>
        <div className = "KL-price">
          ${this.props.element.price} 
        </div>
        <div className = "KL-free-shipping">
          <FreeShipping/>
        </div>
        <div className = "KL-details-wrapper">
          <div className = "KL-specific-details-wrapper">
            <div className = "KL-color-text">
              Color: {this.props.element.color}
            </div>
            <div>
              <img 
              style={{width:50, height:40, border: "1px solid #6495ED", borderRadius: "5px"}}
              src={this.props.element.images[0]}
              />
            </div>
            <div className="KL-size-quantity-wrapper">
              <div className="KL-size">
                Size
              </div>
              <div className="KL-quantity">
                Quantity
              </div>
            </div>
            <div className="KL-size-quantity-wrapper2">
              <div className="KL-size-select">
                <select className="KL-size-edit">
                  <option className="KL-size-edit-option2" value="select size">Select Size</option>
                  <option className="KL-size-edit-option1" value="available">Available</option>
                  <option selected value="small">S</option>
                </select>
              </div>
              <div className="KL-quantity-change">
                <div className="KL-button-div">
                <button className="KL-button-decrement" onClick={this.decrementQuantity}>-</button>
                </div>
                  <form onSubmit={this.handleSubmit}>
                    <input className="KL-quantity-input" name="quantity" defaultValue={this.state.quantity} onChange={this.handleChange}></input>
                  </form>
                <div className="KL-button-div">
                <button className="KL-button-increment" onClick={this.incrementQuantity}>+</button>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <hr className="KL-hr"></hr>
        <div className = "KL-shipping-wrapper">
          <div className = "KL-shipping">
            <input type="radio" className="KL-shipping-radio" id="KL-shipping-radio-id"/>
            <label for="KL-shipping-radio-id">Ship to address</label>
          </div>  
          <div className = "KL-pickup">
            <input type="radio" className="KL-pickup-radio" id="KL-pickup-radio-id"/>
            <label for="KL-pickup-radio-id">Pick up in store - Free</label>
          </div>
          <div className = "KL-store-near">
            <FindStore/>
          </div>
        </div>
        <div className = "KL-add">
          <AddToCart />
        </div>
        <div className = "KL-add-wrapper">
          <div className = "KL-wish-list">
            Add to wish list
          </div>
          <div className = "KL-registry">
            Add to registry
          </div>
        </div>
        <div className = "KL-return-wrapper">
          <div className = "KL-return">
            <ReturnPolicy/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default DisplayEntry