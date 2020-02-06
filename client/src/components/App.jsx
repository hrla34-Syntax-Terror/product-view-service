import React from 'react';
import axios from 'axios';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };

    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios
      .get('/api/products')
      .then((res) => {
        this.setState({
          elements: res.data
        }, () => console.log(this.state.products))
      })
      .catch(err => console.error(err))
  }

  render() {
    return(
      <div className=".KL-body">
        <Display elements={this.state.elements}/>
      </div>
    )
  }
}

export default App;