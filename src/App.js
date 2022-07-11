
import { ManulifePage } from './ManulifePage';
import './App.css';
// import Routes from './route';
import { JSXAttribute } from './course-1/JSXAttribute'
import { JSXCloseEmptyElement } from './course-1/JSXCloseEmptyElement'
import { JSXExpression } from './course-1/JSXExpression'
import { JSXLargeBlockHtml } from './course-1/JSXLargeBlockHtml'
import { JSXListAndKeys } from './course-1/JSXListAndKeys'
import { JSXWithConditions } from './course-1/JSXWithConditions'



function App() {
  return (
    < ManulifePage>
      {/* <Routes/> */}
      <JSXAttribute />
      <JSXCloseEmptyElement />
      <JSXExpression />
      <JSXLargeBlockHtml />
      <JSXListAndKeys />
      <JSXWithConditions />
    </ManulifePage>
  );
}

export default App;
