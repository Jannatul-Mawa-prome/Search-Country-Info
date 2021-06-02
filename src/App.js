import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Country />
          </Route>

          <Route path="/country">
              <Country />
          </Route>

          <Route path="/details/:name">
              <CountryDetails />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
