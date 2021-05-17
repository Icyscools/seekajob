import React from 'react';
import reactDom from 'react-dom';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const textinputemail = {
  fontSize: '20px',
  marginTop: '270px',
  marginRight: '650px',
};

const textinputpassword = {
  fontSize: '20px',
  marginTop: '50px',
  marginRight: '650px',
};

class Login extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url(/si2.jpg)',
          backgroundSize: 'cover',
          height: '720px',
          textAlign: 'center',
        }}
      >
        <form id="email" name="email">
          <input
            style={textinputemail}
            type="text"
            id="email"
            name="email"
            placeholder="e-mail"
          ></input>
        </form>
        <br />
        <form id="password" name="password">
          <input
            style={textinputpassword}
            type="password"
            id="password"
            name="password"
            placeholder="password"
          ></input>
        </form>
        <Button variant="light" size="lg" style={{ marginTop: '50px', marginRight: '650px' }}>
          {/* <Link to='/'>Log in</Link> */}
        </Button>
        <br />
        <text style={{ fontSize: '20px' }}>You don't have an account ?</text>{' '}
        <text style={{ fontSize: '20px', marginRight: '620px' }}>Sign up</text>
      </div>
    );
  }
}
export default Login;
