import React from 'react'
import { Navbar,Nav, Row , Col , Container, Form, FormControl } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Carousel from 'react-grid-carousel'
import Login from './login'
import AppList from './applicationList';
import {LinkContainer} from 'react-router-bootstrap'

const texth1 = {
  fontSize : '80px',
  color: 'white',
}
const texth2 = {
  fontSize : '80px',
}
const span = {
  fontSize : '80px',
  textAlign : 'center',
  padding: 20,
  margin: 'auto'
}

class HomeAfterLogin extends React.Component {

    render() {
      return (
        <div>
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
        {/* <div><button style={buttonlogin}> login </button> */}
          <div style={{
            position:'relative',
            backgroundImage: "url(/w3.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '250px',
            }}>
            <div style={span}><span style={texth1}>Seeka</span><span style={texth2}>job</span></div>
            <div style={{ width: 400, margin: 'auto'}}>
            <ReactSearchAutocomplete
              styling={{width:'40%'}}
              placeholder="Search"
              autoFocus
            />
            </div>
            <div style={{position:'relative',width:'95%',height:'auto',margin: '50px auto 0'}}>
            <h3 style={{marginLeft:'3%'}}>Job</h3>
              <Carousel cols={5} rows={1} gap={50} loop>
              <Carousel.Item>
                  <img width="100%" src="/si1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si4.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/w3.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si2.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si3.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si4.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/w3.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si2.jpg" />
                </Carousel.Item>
              </Carousel>
              
            </div>
            <div style={{position:'relative',width:'95%',height:'auto',margin: 'auto'}}>
            <h3 style={{marginLeft:'3%'}}>Application</h3>
              
              <Carousel cols={5} rows={1} gap={50} loop>
                <Carousel.Item>
                  <img width="100%" src="/si1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si4.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/w3.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si2.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si3.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si4.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/w3.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src="/si2.jpg" />
                </Carousel.Item>
              </Carousel>
              
            </div>
          </div>
        </div>
      );
    }
  }
  export default HomeAfterLogin