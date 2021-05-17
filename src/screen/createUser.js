import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const styleinput = {
  fontSize: '18px',
  marginLeft: '350px',
  marginTop: '5px',
};

const stylebuttonuser = {
  fontSize: '22px',
  backgroundColor: 'white',
  padding: '5px',
  paddingTop: 14,
  paddingBottom: 14,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: 'black',
  width: '140px',
  marginLeft: '30px',
};

const stylebuttoncreate = {
  fontSize: '25px',
  backgroundColor: 'white',
  padding: '5px',
  marginTop: '40px',
  paddingTop: 14,
  paddingBottom: 14,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: 'black',
  width: '250px',
  marginLeft: '700px',
};

class CreateUser extends React.Component {
  render() {
    return (
      <div
        style={{
          // marginTop : '100px',
          backgroundImage: 'url(/si3.jpg)',
          backgroundSize: 'cover',
          height: '720px',
        }}
      >
        <Container>
          <Row>
            <Col>
              <form id="name" name="name">
                <input
                  style={{ marginTop: '120px', fontSize: '18px', marginLeft: '350px' }}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                ></input>
              </form>
              <br />
              <form id="username" name="username">
                <input
                  style={styleinput}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                ></input>
              </form>
              <br />
              <form id="email" name="email">
                <input
                  style={styleinput}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e-mail"
                ></input>
              </form>
              <br />
            </Col>
            <Col>
              <h2 style={{ marginTop: '110px', marginLeft: '30px' }}>Who are you?</h2>
              <br />
              <button style={stylebuttonuser}>Worker</button>{' '}
              <button style={stylebuttonuser}>Company</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <form id="password" name="password">
                <input
                  style={styleinput}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                ></input>
              </form>
              <br />
              <form id="confirm_password" name="confirm_password">
                <input
                  style={styleinput}
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="confirm password"
                ></input>
              </form>
              <br />
              <form id="bio" name="bio">
                <textarea style={styleinput} id="bio" name="bio" placeholder="bio"></textarea>
              </form>
              <br />
            </Col>
            <Col>choose type</Col>
          </Row>
        </Container>
        <br />
        <button style={stylebuttoncreate} type="submit" name="create_account">
          Create Account
        </button>
      </div>
    );
  }
}
export default CreateUser;
