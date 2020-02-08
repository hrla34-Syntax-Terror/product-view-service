import React from 'react';

//Real breadcrumbs would be to add an array of breadcrumbs to database
//{this.props.element.breadcrumbs.map(breadcrumb   etc etc. No time.
class BreadCrumbs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    var arrowKayrub = "https://rei.github.io/cedar-icons/icons/caret-right.svg";
    return(
      <div className="KL-bread-wrapper">
        <span>Camping and Hiking</span>
        <img className="KL-bread-arrow" src={arrowKayrub}/>
        <span>Dog Gear</span>
        <img className="KL-bread-arrow" src={arrowKayrub}/>
        <span>Dog Clothes</span>
        <img className="KL-bread-arrow" src={arrowKayrub}/>
        <span>Dog Clothing Accessories</span>
      </div>
    )
  }
}

export default BreadCrumbs;