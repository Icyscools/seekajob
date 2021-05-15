import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const styleinput = {
  fontSize : '18px',
}

const stylebuttonuser = {
  fontSize : '22px',
  backgroundColor: "white",
  padding: "5px",
  paddingTop : 14,
  paddingBottom : 14,
  borderRadius : 15,
  borderWidth : 1,
  borderColor: 'black',
  width : '140px'
}

const stylebuttoncreate = {
  fontSize : '25px',
  backgroundColor: "white",
  padding: "5px",
  marginTop : '100px',
  paddingTop : 14,
  paddingBottom : 14,
  borderRadius : 15,
  borderWidth : 1,
  borderColor: 'black',
  width : '250px'
}

class CreateUser extends React.Component {
    render() {
      return (
        <div>
          {/* <Container>
            <Row xs={2} md={6}>
              <Col>
                <form id='name' name='name'>
                <input style={styleinput} type='text' id='name' name='name' placeholder='name'></input>
                </form><br />
                <form id='username' name='username'>
                <input style={styleinput} type='text' id='username' name='username' placeholder='username'></input>
                </form><br />
                <form id='email' name='email'>
                <input style={styleinput} type='email' id='email' name='email' placeholder='e-mail'></input>
                </form><br />
                <form id='password' name='password'>
                <input style={styleinput} type='password' id='password' name='password' placeholder='password'></input>
                </form><br />
                <form id='confirm_password' name='confirm_password'>
                <input style={styleinput} type='password' id='confirm_password' name='confirm_password' placeholder='confirm password'></input>
                </form><br />
                <form id='bio' name='bio'>
                <textarea style={styleinput} id='bio' name='bio' placeholder='bio'></textarea>
                </form><br />
              </Col>

              <Col>
                <h2>Who are you?</h2><br />
                <button style={stylebuttonuser}>Worker</button>{' '}
                <button style={stylebuttonuser}>Company</button>
              </Col>
              <Col>
                
              </Col>
            </Row>
          </Container> */}
          <br /><button style={stylebuttoncreate} type='submit' name='create_account'>Create Account</button>
        </div>
      );
    }
  }
  export default CreateUser