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
    console.log('constructor')
    super(props)
    this.state = {
      color: props.color
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state)
    return {

    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    // to change the color
    this.setState({
      color: 'red'
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('getSnapshotBeforeUpdate', preProps, preState)
    return {
      preProps,
      preState,
    }
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log('componentDidUpdate', preProps, preState, snapshot)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <>
      <div>
        This is a {this.props.brand} Car,
        the model is {this.props.model},
        and the color is {this.state.color}
      </div>
      {this.props.children}
      </>
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

class LifeCycleDemo extends React.Component {

  render() {
    return (
      <div>
        <Car
          brand={'BYD'}
          model={'Han'}
        >
          <Time />
        </Car>
      </div>
    )
  }
}

export default LifeCycleDemo