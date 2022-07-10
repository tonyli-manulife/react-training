import logo from './logo.svg';
import { Link } from 'react-router-dom';

function ManulifePage(props) {
  return (
    <div className='app'>
      <div className='navigation'>
        <div className='logo'>
          <img alt='logo' src={logo} />
        </div>
        <ul>
          <li><Link to='/'>List page</Link></li>
          <li><Link to='/todo-list'>Redux demo</Link></li>
        </ul>
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
export default ManulifePage