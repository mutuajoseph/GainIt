import './App.css';
import { Switch, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Instructors from './pages/Instructors';
import Membership from './pages/Membership';
import Members from './pages/Members';
import GlobalStyle from './GlobalStyle';
import AuthRoute from './AuthRouter';
import Payments from './pages/Payments';
import ManageMembership from './pages/ManageMembership';
import ManageMember from './pages/ManageMember';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Switch>
        <Route path='/login' exact component={Auth} />
        <AuthRoute path='/' exact component={Dashboard} />
        {/* <AuthRoute path='/instructors' exact component={Instructors} /> */}
        <AuthRoute path='/membership' exact component={Membership} />
        <AuthRoute path='/membership/:id' exact component={ManageMembership} />
        <AuthRoute path='/members' exact component={Members} />
        <AuthRoute path="/member/:id"exact component={ManageMember}/>
        <AuthRoute path='/payments' exact component={Payments} />
      </Switch>
    </div>
  );
}

export default App;
