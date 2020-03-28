import React, { Component } from 'react';
import axios from 'axios';

export default class itemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }
  }

  componentDidMount() {
    axios.get(process.env.port)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            item: response.data.map(item => item),
            item: response.data[0].name
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })     
    }
    
    onSubmit(e) {
      e.preventDefault();
      
      const item = {
        name: this.state.name,
      }
      
      
      
      axios.post('http://localhost:3000/list', item)
      .then(res => console.log(res.data));
    }
    
    render() {
      return (
        <div>
     <div>{this.props}</div>
    </div>
    )
  }
}


