import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LayoutCenterFullscreen from '../../layouts/LayoutCenterFullscreen';
import { useHistory } from 'react-router-dom';
import WorkerForm from '../../components/auths/WorkerForm';
import CompanyForm from '../../components/auths/CompanyForm';
import { register } from '../../api/auth';

const styleinput = {
  fontSize: 16,
};

const stylebuttoncreate = {
  fontSize: 18,
  backgroundColor: 'white',
  padding: 12,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: 'black',
};

const RegisterScreen = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirm_password: '',
    email: '',
    bio: '',
    profile_img: '',
    role: '',
    company_name: '',
    company_description: '',
    qualification: '',
    phone_number: '',
    experience: '',
  });

  const handleChangeValue = useCallback((key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  });

  const changeRole = (role) => {
    if (role === 'worker') {
      //do worker thing
      handleChangeValue('role', 'worker');
    } else if (role === 'company') {
      //do company thing
      handleChangeValue('role', 'company');
    }
  };

  const handleRegister = (evt) => {
    evt.preventDefault();
    if (!user.role) setError('Please select role');
    else if (user.password != user.confirm_password) setError('Password not matched');
    else {
      register(user)
        .then((result) => {
          const { data, status } = result;
          if (status === 201 && data.username) {
            history.push('/confirm', { username: data.username });
          }
        })
        .catch((err) => {
          console.error(err);
          const { data } = err.response;
          setError(data.message ?? 'Something went wrong');
        });
    }
  };

  const renderOccupationForm = () => {
    if (user.role === 'worker') {
      return <WorkerForm handleChange={handleChangeValue} />;
    } else if (user.role === 'company') {
      return <CompanyForm handleChange={handleChangeValue} />;
    }

    return <></>;
  };

  return (
    <LayoutCenterFullscreen>
      <Container
        style={{
          textAlign: 'center',
          fontSize: 20,
          background: '#fefefe',
        }}
      >
        <Container>
          <Form onSubmit={handleRegister} className="my-4">
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(evt) => handleChangeValue('username', evt.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(evt) => handleChangeValue('email', evt.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(evt) => handleChangeValue('password', evt.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    onChange={(evt) => handleChangeValue('confirm_password', evt.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Bio"
                    name="bio"
                    onChange={(evt) => handleChangeValue('bio', evt.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Container fluid className="text-center">
                  <h3>Who are you?</h3>
                  <Row className="my-2">
                    <Col cols={6}>
                      <Button
                        variant={user.role === 'worker' ? 'primary' : 'secondary'}
                        onClick={(evt) => {
                          evt.preventDefault();
                          changeRole('worker');
                        }}
                      >
                        Worker
                      </Button>
                    </Col>
                    <Col cols={6}>
                      <Button
                        variant={user.role === 'company' ? 'primary' : 'secondary'}
                        onClick={(evt) => {
                          evt.preventDefault();
                          changeRole('company');
                        }}
                      >
                        Company
                      </Button>
                    </Col>
                  </Row>
                  {renderOccupationForm()}
                </Container>
              </Col>
            </Row>
            <button style={stylebuttoncreate} type="submit" name="create_account">
              Create Account
            </button>
            {error ? (
              <p>
                <small className="text-danger">{error}</small>
              </p>
            ) : (
              ''
            )}
          </Form>
        </Container>
      </Container>
    </LayoutCenterFullscreen>
  );
};
export default RegisterScreen;
