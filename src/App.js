import logo from './logo.svg';
import './App.css';
import Home from './screen/home';
import JobList from './screen/jobList';
import AppDetail from './screen/applicationDetail';
import AddJob from './screen/addJob';
import CreateUser from './screen/createUser';
import AddApplication from './screen/addApplication';
import AppList from './screen/applicationList';
import JobDetail from './screen/jobDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './screen/login'
// import CreateUser from './screen/createUser'
import AuthCode from './screen/comfirmAuthCode';
import Interview from './screen/interview';
import TimePickerAddonDemo from './screen/timepicker';
import HomeAfterLogin from './screen/homeAfterLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div style={{ fontFamily: 'Oxygen, sans-serif' }} className="App">
      <Router>
        {/* <App /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/AddApp" component={AddApp} /> */}
          <Route path="/applications" component={AppList} />
          <Route path="/application/:id" component={AppDetail} />
          {/* <Route path="/ConfirmAuthen" component={ConfirmAuthen} /> */}
          {/* <Route path="/CompanyForm" component={CompanyForm} /> */}
          {/* <Route path="/CreateUser" component={CreateUser} /> */}
          {/* <Route path="/Interview" component={Interview} /> */}

          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/timepick" component={TimePick} /> */}
          {/* <Route path="/worker/create" component={WorkerForm} /> */}
          <Route path="/jobs" component={JobList} />
          <Route path="/job/create" component={AddJob} />
          <Route path="/jobs/:id" component={JobDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
