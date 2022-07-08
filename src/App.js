
import { ManulifePage } from './ManulifePage';
import { Welcome  } from './course-2/demo1';
import ReactList from './course-2/react-list';
import ReactStyle from './course-2/react-style';
import ReactForm from './course-2/react-form';


import './App.css';
import Routes from './route';

function App() {
  console.log('App in')
  return (
    < ManulifePage>
      <Routes/>
    </ManulifePage>
  );
}

export default App;
