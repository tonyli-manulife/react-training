import React from "react";

// 

export default class ReactList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
      ]
    }
  }

  revertData = () => {
    this.setState({
      data: this.state.data.reverse()
    })
  }

  addData = () => {
    // ASCII A => 65
    this.setState({
      data: this.state.data.concat({
       id: this.state.data.length + 1,
       name: String.fromCharCode(this.state.data.length + 65)
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.data.map(el => {
              return <li key={el.id}>{el.name}</li>
            })
          }
        </ul>
        <div>
          <button onClick={this.revertData}>Reverse</button>
          <br />
          <button onClick={this.addData}>Add</button>
        </div>
      </div>
    )
  }
}