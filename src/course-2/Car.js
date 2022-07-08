import React from "react";
import PropTypes from "prop-types";

export default class Car extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      color: props.color
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: 'blue'
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        This is a Car component!
        <div>Name: {this.props.name}</div>
        <div>Color: {this.state.color}</div>
      </div>
    )
  }
}

Car.defaultProps = {
  name: 'BYD',
  color: 'white',
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}