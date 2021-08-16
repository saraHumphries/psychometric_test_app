import './App.css';
import PsychometricTestContainer from './containers/PsychometricTestsContainer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ResultsContainer from './containers/ResultsContainer';
import NavBar from './components/NavBar';
import Summary from './containers/Summary';

function App() {
  return (
    <Router>
      <div id='whole-app'>
        <NavBar></NavBar>
        <Switch>
          <Route path = '/' exact component={PsychometricTestContainer}></Route>
          <Route path='/test_results' exact component={ResultsContainer}></Route>
          <Route path='/summary/:test_title' exact component={Summary}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
