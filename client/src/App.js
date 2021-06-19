import './App.css';
import {Switch, Route} from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './GlobalStyle';
import AuthRoute from './AuthRouter';

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/login" exact component={Auth}/>
          <AuthRoute path="/" exact component={Dashboard} />
        </Switch>
    </div>
  );
}

export default App;
