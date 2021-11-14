import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Registration from './Pages/Login/Registration/Registration';
import AuthProvider from './contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route exact path="/home">
                  <Home></Home>
              </Route>
              <Route exact path="/login">
                  <Login></Login>
              </Route>
              <Route exact path="/registration">
                  <Registration></Registration>
              </Route>
          </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
