import React from 'react';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Button from '@material-ui/core/Button';
import { LinkContainer } from 'react-router-bootstrap';

const txt1 = {
  fontSize: '2em',
  marginLeft: '5%',
  marginTop: '2%',
};

const buttonlogin = {
  fontSize: '20px',
  marginLeft: '1450px',
  borderRadius: 15,
  borderWidth: 1,
  backgroundColor: 'lightBlue',
  width: '75px',
};

const col = {
  fontSize: '18px',
  marginTop: '20px',
};

class AppDetail extends React.Component {
  render() {
    return (
      <div>
        {/* <div style={{position: 'absolute', height: '10px'}}><button style={buttonlogin}> login </button></div> */}
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer to="/JobList">
              <Nav.Link>Jobs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AppList">
              <Nav.Link>Application</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <h2 style={txt1}>Front-end Developer</h2>
        <div
          style={{
            position: 'absolute',
            width: '20%',
            height: '400px',
            marginLeft: '5%',
            marginTop: '4%',
            color: 'black',
          }}
        >
          {/* ที่ใส่รูปโปรไฟล์ */}
        </div>
        <div
          style={{
            position: 'absolute',
            width: '60%',
            height: '400px',
            right: '2%',
            marginTop: '4%',
            color: 'black',
          }}
        >
          <Container>
            <Row>
              <Col style={col}>Fullname</Col>
              <Col style={col}>Qualification</Col>
            </Row>
            <Row>
              <Col style={col}>User1</Col>
              <Col style={col}>User Qualification</Col>
            </Row>

            <Row>
              <Col style={col}>Email</Col>
              <Col style={col}>Experience</Col>
            </Row>
            <Row>
              <Col style={col}>user1@gmail.com</Col>
              <Col style={col}>User Experience</Col>
            </Row>
            <Row>
              <Col style={col}>Phone</Col>
              <Col style={col}>Resume</Col>
            </Row>
            <Row>
              <Col style={col}>0991234567</Col>
              <Col style={col}>Download</Col>
            </Row>
            <Row>
              <Col style={col}>Bio</Col>
              <Col style={col}></Col>
            </Row>
            <Row>
              <Col style={col}>user bio...</Col>
              <Col style={col}></Col>
            </Row>
          </Container>

          <Button variant="outlined" style={{ position: 'absolute', right: '10%', top: '100%' }}>
            Make Appointment
          </Button>
          <Button variant="outlined" style={{ position: 'absolute', right: '50%', top: '100%' }}>
            Rejected
          </Button>
          <Button variant="outlined" style={{ position: 'absolute', right: '85%', top: '100%' }}>
            Approved
          </Button>
        </div>
      </div>
    );
  }
}
export default AppDetail;
