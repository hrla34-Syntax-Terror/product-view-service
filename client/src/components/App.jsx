import React from 'react';
import axios from 'axios';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element:''
    };

    // this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  // componentDidMount() {
  //   this.getAll();
  // }

  //pass in an id route
  componentDidMount() {
    this.getOne();
  }

  // getAll() {
  //   axios
  //     .get('/api/products')
  //     .then((res) => {
  //       this.setState({
    //         elements: res.data
    //       }, () => console.log(this.state.products))
    //     })
    //     .catch(err => console.error(err))
    // }
    
    //window.location.
    getOne() {
      axios
      .get('/api/products/60')
      .then((res) => {
        this.setState({
          element: res.data[0]
        }, () => console.log(this.state.element.images))
      })
      .catch(err => console.error(err))
  }

  render() {
    return(
      <div className=".KL-body">
        {this.state.element && <Display element={this.state.element}/>}
      </div>
    )
  }
}

export default App;