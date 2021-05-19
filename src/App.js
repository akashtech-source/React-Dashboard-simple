import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
