export function JSXExpression(props) {
  const name = 'World'
  const add = (a, b) => {
    return a + b
  }
  
  return (
    <div className='wrapper'>
      <h1 className="welcome">Hello {name}</h1>
      <h1>we can do this, { 1+2 }</h1>
      <h1>we can also do this, {add(1, 2)}</h1>
    </div>
  )
}