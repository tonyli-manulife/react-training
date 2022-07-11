export function JSXWithConditions(props) {
  const domContainer = document.getElementById('root')
  let text = 'Hello'
  const a = 10
  if (a < 2) {
    text = 'World'
  }

  return (
    <div>
      <h1>{text}</h1>
      <h2>{a < 2 ? "World" : "Hello"}</h2>
    </div>
  )
}