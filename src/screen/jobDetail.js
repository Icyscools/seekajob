import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Button from '@material-ui/core/Button';
import { LinkContainer } from 'react-router-bootstrap';

const txt1 = {
  marginLeft: '5%',
  marginTop: '2%',
  marginRight: '5%',
};

const container = {
  position: 'absolute',
  height: '40%',
  width: '100%',
  padding: '30px',
};

class JobDetail extends React.Component {
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
        <div style={container}>
          <Button
            variant="outlined"
            style={{ position: 'absolute', right: '100px', marginTop: '2%' }}
          >
            Edit this job
          </Button>
          <h1 style={txt1}>Front-end Developer</h1>

          <p style={txt1}>
            At night, when the stars light up my room I sit by myself Talking to the moon Trying to
            get to you In hopes you're on the other side talking to me, too Or am I a fool who sits
            alone talking to the moon? Oh-oh
          </p>

          <h1 style={txt1}>Location</h1>

          <p style={txt1}>
            At night, when the stars light up my room I sit by myself Talking to the moon Trying to
            get to you In hopes you're on the other side talking to me, too Or am I a fool who sits
            alone talking to the moon? Oh-oh
          </p>

          <h1 style={txt1}>Salary</h1>

          <p style={txt1}>
            At night, when the stars light up my room I sit by myself Talking to the moon Trying to
            get to you In hopes you're on the other side talking to me, too Or am I a fool who sits
            alone talking to the moon? Oh-oh
          </p>

          <h1 style={txt1}>Welfares</h1>

          <p style={txt1}>-ggwp</p>

          <Button variant="outlined" style={{ position: 'absolute', marginLeft: '5%' }}>
            Apply Now
          </Button>
        </div>
      </div>
    );
  }
}
export default JobDetail;
