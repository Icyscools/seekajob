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
import RegisterScreen from './screen/auths/RegisterScreen';
import ConfirmAuthCodeScreen from './screen/auths/ConfirmAuthCodeScreen';
import AppDetail from './screen/applicationDetail';
import ApplicationListScreen from './screen/applications/ApplicationListScreen';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loginWithTokenAction } from './store/actions/AuthAction';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state);
  useEffect(async () => {
    const updateLoginState = (token) => {
      dispatch(loginWithTokenAction(token));
    };

    await updateLoginState(localStorage.getItem('token'));

    console.log(auth);
  }, [dispatch]);

  return (
    <div style={{ fontFamily: 'Oxygen, sans-serif' }}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/applications" component={ApplicationListScreen} />
          <Route path="/application/:id" component={AppDetail} />
          {/* <Route path="/Interview" component={Interview} /> */}
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/confirm" component={ConfirmAuthCodeScreen} />
          {/* <Route path="/timepick" component={TimePick} /> */}
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
