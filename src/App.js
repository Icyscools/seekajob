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
import AuthCode from './screen/comfirmAuthCode'
import Interview from './screen/interview'


function App() {
  return (
    
    <div style={{fontFamily: 'Oxygen, sans-serif'}} className="App">
      <Interview />
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a */}
    {/* //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    </div>
  );
}

export default App;
