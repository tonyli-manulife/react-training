import logo from './logo.svg';

export function ManulifePage(props) {
  console.log('ManulifePage in')
  return (
    <div className='app'>
      <div className='navigation'>
        <div className='logo'>
          <img alt='logo' src={logo} />
        </div>
      </div>
      <div className='main'>
        <div className='header'>
          Welcome to React Training
        </div>
        <div className='content'>
          {props.children}
        </div>
      </div>
    </div>
  )
}