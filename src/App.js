import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import HomeScreen from './screen/HomeScreen';
import JobListScreen from './screen/jobs/JobListScreen';
import JobApplyScreen from './screen/jobs/JobApplyScreen';
import JobDetailScreen from './screen/jobs/JobDetailScreen';
import JobCreateScreen from './screen/jobs/JobCreateScreen';
import JobUpdateScreen from './screen/jobs/JobUpdateScreen';
import LoginScreen from './screen/auths/LoginScreen';
import LogoutScreen from './screen/auths/LogoutScreen';
import RegisterScreen from './screen/auths/RegisterScreen';
import ConfirmAuthCodeScreen from './screen/auths/ConfirmAuthCodeScreen';
import ApplicationDetailScreen from './screen/applications/ApplicationDetailScreen';
import ApplicationListScreen from './screen/applications/ApplicationListScreen';
import ApplicationAppointmentScreen from './screen/applications/ApplicationAppointmentScreen';
import ViewProfileScreen from './screen/profiles/ViewProfileScreen';
import EditProfileScreen from './screen/profiles/EditProfileScreen';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loginWithTokenAction } from './store/actions/AuthAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const updateLoginState = (token) => {
      dispatch(loginWithTokenAction(token));
    };
    updateLoginState(localStorage.getItem('token'));
  }, [dispatch]);

  return (
    <div style={{ fontFamily: 'Oxygen, sans-serif' }}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/applications" component={ApplicationListScreen} />
          <Route path="/application/:id/appointment" component={ApplicationAppointmentScreen} />
          <Route path="/application/:id" component={ApplicationDetailScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/logout" component={LogoutScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/confirm" component={ConfirmAuthCodeScreen} />
          <Route exact path="/profile" component={ViewProfileScreen} />
          <Route exact path="/profile/edit" component={EditProfileScreen} />
          <Route exact path="/jobs" component={JobListScreen} />
          <Route exact path="/jobs/create" component={JobCreateScreen} />
          <Route path="/job/:id/apply" component={JobApplyScreen} />
          <Route path="/job/:id/edit" component={JobUpdateScreen} />
          <Route path="/job/:id" component={JobDetailScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
