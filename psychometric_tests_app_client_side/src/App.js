import './App.css';
import PsychometricTestContainer from './containers/PsychometricTestsContainer';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ResultsContainer from './containers/ResultsContainer';

function App() {
  return (
    <Router>
      <div>
        <PsychometricTestContainer></PsychometricTestContainer>
        <Switch>
          <Route path='/results' exact component={ResultsContainer}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
