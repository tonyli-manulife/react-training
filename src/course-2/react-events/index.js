import React from "react";

export default class ReactEvents extends React.Component {

  constructor(props) {
    super(props)

    this.clickDiv = this.clickDiv.bind(this)
  }

  clickDiv(e) {
    console.log('click div', e)
  }

  clickButton = (e) => {
    console.log('click button', e)
  }

  onInputChange(e) {
    console.log('change input', e)
  }

  render() {
    return (
      <div>
        <div onClick={this.clickDiv}>This is a div</div>
        <br />
        <button onClick={this.clickButton}>This is button</button>
        <br /> <br />
        <label>
          This is input:
          <input onChange={(e) => { this.onInputChange(e) }} />
        </label>
        <br />
      </div>
    )
  }
}