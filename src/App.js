import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import HomeScreen from './screen/HomeScreen';
import JobListScreen from './screen/jobs/JobListScreen';
import JobDetailScreen from './screen/jobs/JobDetailScreen';
import JobCreateScreen from './screen/jobs/JobCreateScreen';
import LoginScreen from './screen/auths/LoginScreen';
import RegisterScreen from './screen/auths/RegisterScreen';
import ConfirmAuthCodeScreen from './screen/auths/ConfirmAuthCodeScreen';
import AppDetail from './screen/applicationDetail';
import AppList from './screen/applicationList';
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
          {/* <Route path="/AddApp" component={AddApp} /> */}
          <Route exact path="/applications" component={AppList} />
          <Route path="/application/:id" component={AppDetail} />
          {/* <Route path="/Interview" component={Interview} /> */}
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/confirm" component={ConfirmAuthCodeScreen} />
          {/* <Route path="/timepick" component={TimePick} /> */}
          <Route exact path="/jobs" component={JobListScreen} />
          <Route exact path="/jobs/create" component={JobCreateScreen} />
          <Route path="/job/:id" component={JobDetailScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
