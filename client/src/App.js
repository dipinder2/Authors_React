import './App.css';
import {Router} from '@reach/router';
import New from './components/New'
import Show from './components/Show'
import Edit from './components/Edit'
function App() {
  return (
    <div className="App">
      <Router>
        <Show path="/"/>
        <New path="/new"/>
        <Edit path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
