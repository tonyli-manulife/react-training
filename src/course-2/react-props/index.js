import React from "react"
import PropTypes from 'prop-types'

class Car extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        The name is {this.props.brand} and the color is {this.props.color}
        {/* {this.props.children} */}
      </div>
    )
  }
}

Car.defaultProps = {
  color: 'white',
}

Car.propTypes = {
  brand: PropTypes.string.isRequired,
  color: PropTypes.string,
}

class PropsDemo extends React.Component {

  render() {
    return (
      <Car
        brand={'BYD'}
        color={'red'}
      >
      </Car>
    )
  }
}

export default PropsDemo