import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import { login } from '../../api/auth';
import { useDispatch } from 'react-redux';
import { loginWithTokenAction } from '../../store/actions/AuthAction';
import LayoutCenterFullscreen from '../../layouts/LayoutCenterFullscreen';

const LoginScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const updateLoginState = (token) => {
    dispatch(loginWithTokenAction(token));
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    const data = {
      username: evt.target[0].value,
      password: evt.target[1].value,
    };

    login(data)
      .then((res) => {
        // keep jwt
        updateLoginState(res.data.idToken.jwtToken);
        history.push('/');
      })
      .catch((err) => {
        console.error(err);
        const { status, data, config } = err.response;
        if (status === 400 && data.message === 'User is not confirmed.') {
          const username = JSON.parse(config.data).username;
          history.push('/confirm', { username });
        } else {
          setError(data.message);
        }
      });
  };
  return (
    <LayoutCenterFullscreen>
      <div
        style={{
          textAlign: 'center',
          padding: 45,
          fontSize: 20,
          background: '#fefefe',
        }}
      >
        <h1 className="mb-3">Login</h1>
        <Form onSubmit={handleLogin} className="my-4">
          <Form.Group>
            <Form.Control type="text" placeholder="Username" name="username" required />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password" name="password" required />
          </Form.Group>
          {/* <input type="text" id="email" name="email" placeholder="e-mail"></input>
          <input type="password" id="password" name="password" placeholder="password"></input> */}
          <Button variant={error ? 'danger' : 'primary'} size="lg" type="submit">
            Login
            {/* <Link to="/">Log in</Link> */}
          </Button>

          {error ? (
            <p>
              <small className="text-danger">{error}</small>
            </p>
          ) : (
            ''
          )}
        </Form>
        <div className="mt-2">
          <small style={{ fontSize: 18 }}>You don't have an account ?</small>
          <LinkContainer to="/register" style={{ cursor: 'pointer' }}>
            <div>Sign up</div>
          </LinkContainer>
        </div>
      </div>
    </LayoutCenterFullscreen>
  );
};

export default LoginScreen;
