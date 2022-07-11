import logo from './logo192.png';

export function JSXAttribute(props) {
  return (
    <div className='wrapper'>
      <a href="https://www.reactjs.org">learning React</a>
      <br />
      <img src={logo} alt=''></img>;
      <h1 className="welcome">Hello World</h1>;
    </div>
  )
}