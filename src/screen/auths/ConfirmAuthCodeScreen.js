import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { confirmConfirmationCode, resendConfirmationCode } from '../../api/auth';
import LayoutCenterFullscreen from '../../layouts/LayoutCenterFullscreen';

const ConfirmAuthCodeScreen = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [resend, setResend] = useState(false);
  const { username } = history.location.state;
  console.log(username);
  if (!username) {
    history.replace('/login');
  }

  const handleConfirmCode = (evt) => {
    evt.preventDefault();
    const data = {
      username: username,
      code: evt.target[0].value,
    };

    confirmConfirmationCode(data)
      .then((res) => {
        console.log(res);
        // go login
        history.push('/login');
      })
      .catch((err) => {
        const { status, data, config } = err.response;
        setError(data.message);
      });
  };

  const handleResendCode = (evt) => {
    evt.preventDefault();
    if (!resend) {
      console.log('resend');
      setResend(true);

      resendConfirmationCode({ username });
    }
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
        <h3>We send confirmation code to your email</h3>
        <h5>Please enter the code</h5>
        <Form onSubmit={handleConfirmCode} className="my-3">
          <Form.Group>
            <Form.Control
              type="text"
              id="code"
              name="code"
              placeholder="code"
              className="text-center"
              required
            />
          </Form.Group>

          <Button variant={error ? 'danger' : 'primary'} type="submit">
            Submit Code
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
          <small style={{ fontSize: 18, display: 'block' }}>You don't received code?</small>
          <Button onClick={handleResendCode} size="sm" variant={resend ? 'secondary' : 'light'}>
            Resend code
          </Button>
        </div>
      </div>
    </LayoutCenterFullscreen>
  );
};

export default ConfirmAuthCodeScreen;
