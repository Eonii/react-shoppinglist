import React, { Component } from 'react'

class AddItem extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addItem(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Lisää uusi tuote ostoslistaan :)</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddItem