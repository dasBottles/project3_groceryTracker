import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const item = props => (
  <tr>
    <td>{props.item}</td>
    <td>
      <Link to={"/edit/"+ props.item._id}>edit</Link> | <a href="#" onClick={() => { props.deleteItem(props.item._id) }}>delete</a>
    </td>
  </tr>
)

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this)

    this.state = {Items: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/item/')
      .then(response => {
        this.setState({ item: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteItem(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.item.filter(el => el._id !== id)
    })
  }

  itemList() {
    return this.state.item.map(currentexercise => {
      return <ItemList item={currentitem} deleteItem={this.deleteItem} key={currentitem._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Items</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { this.itemList() }
          </tbody>
        </table>
      </div>
    )
  }
}