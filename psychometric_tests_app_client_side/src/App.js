import './App.css';
import PsychometricTestContainer from './containers/PsychometricTestsContainer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ResultsContainer from './containers/ResultsContainer';

function App() {
  return (
    <Router>
      <div id='whole-app'>
        <Switch>
          <Route path = '/' exact component={PsychometricTestContainer}></Route>
          <Route path='/test_results' exact component={ResultsContainer}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
