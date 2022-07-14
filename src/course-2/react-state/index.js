import React from "react"
import PropTypes from 'prop-types'

class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: (new Date()).toLocaleTimeString()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: (new Date()).toLocaleTimeString()
      })
    }, 1000)
  }

  render() {
    return <div>The current time is {this.state.time}</div>
  }
}

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.color
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
          color: 'red',
      }, () => {
        console.log('You have changed the color of car to red.')
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        This is a {this.props.brand} Car,
        the model is {this.props.model},
        and the color is {this.state.color}
      </div>
    )
  }
}

Car.defaultProps = {
  color: 'white',
}

Car.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  color: PropTypes.string,
}

class StateDemo extends React.Component {

  render() {
    return (
      <Car
        brand={'BYD'}
        model={'Han'}
      >
        {/* <Time /> */}
      </Car>
    )
  }
}

export default StateDemo