import React from "react"

export function Applaud() {
  return <div>👏👏👏💐💐💐🎉🎉🎉</div>
}

export function FunctionWelcome(props) {
  return <div>Welcome to React Training!</div>
}

export function Welcome(props) {
  return (
    <div>
      Welcome to React Training!
      {/* use the props.children to show the sub component */}
      {props.children}
    </div>
  )
}

class ClassWelcome extends React.Component {
  render() {
    return (
      <div>
        Welcome to React Training!
      </div>
    )
  }
}

class ComponentDemo extends React.Component {
  render() {
    return (
      <>
        <ClassWelcome />
        <FunctionWelcome />
        <Welcome>
           {/* Nesting of components */}
          <Applaud />
        </Welcome>
      </>
    )
  }
}

export default ComponentDemo