import React from "react";
import styles from './index.module.css'

export default class ReactForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
    }
  }

  handleInputName = (e) => {
    console.log(e)
    this.setState({
      name: e.target.value
    })
  }

  handleInputAge = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit:', this.state);
    if (this.state.name && this.state.age) {
      const data = {
        ...this.state
      }
      this.props.onChange && this.props.onChange(data)
      this.setState({
        name: '',
        age:  '',
      })
    }

  }

  renderHTMLForm = () => {
    return( 
    <form>
     <label> 
      Name:
      <input name="name" />
     </label>
     <input type='submit' />
    </form>
    )
  }

  renderReactForm = () => {
    return (
      <form>
      <label>
        Name:
        <input
         name="name" 
         value={this.state.name} 
         onChange={this.handleInputName}
        />
      </label>
      <button onClick={this.handleSubmit}>Submit</button>
     </form>
    )
  }

  render() {

    // return this.renderHTMLForm()
    // return this.renderReactForm()
    return (
      <div className={styles.form} >
       <form onSubmit={this.handleSubmit}>
        <label>
          Name:<br />
          <input 
            name="name"
            value={this.state.name}
            onChange={this.handleInputName}
          />
        </label>
        <label>
          Age:<br />
          <input 
            name="age"
            value={this.state.age}
            onChange={this.handleInputAge}
          />
        </label>
        <button>Submit</button>
       </form>
      </div>
    )
  }
}