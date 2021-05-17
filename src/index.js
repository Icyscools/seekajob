import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ConfirmAuthen from './screen/confirmAuthCode'
// import CompanyForm from '/screen/companyform'
// import CreateUser from '/screen/createUser'
// import Home from '/screen/home'
// import HomeAfter from '/screen/homeAfterLogin'
// import Interview from '/screen/interview'
import AddApp from './screen/addApplication'
import AddJob from './screen/addJob'
import AppDetail from './screen/applicationDetail'
import AppList from './screen/applicationList'
// import JobDetail from '/screen/jobDetail'
import JobList from './screen/jobList'
import Login from './screen/login'
import TimePick from './screen/timepicker'
import WorkerForm from './screen/workerform'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/AddApp" component={AddApp} />
        <Route path="/AppList" component={AppList} />
        <Route path="/AppDetail" component={AppDetail} />
        {/* <Route path="/JobDetail" component={JobDetail} /> */}
        {/* <Route path="/ConfirmAuthen" component={ConfirmAuthen} /> */}
        {/* <Route path="/CompanyForm" component={CompanyForm} /> */}
        {/* <Route path="/CreateUser" component={CreateUser} /> */}
        {/* <Route path="/Interview" component={Interview} /> */}
        
        <Route path="/Login" component={Login} />
        <Route path="/TimePick" component={TimePick} />
        <Route path="/WorkerForm" component={WorkerForm} />
        <Route path="/AppList" component={AppList} />
        <Route path="/JobList" component={JobList} />
        <Route path="/AddJob" component={AddJob} />
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
