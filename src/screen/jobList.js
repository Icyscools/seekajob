import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Button from '@material-ui/core/Button'
import {LinkContainer} from 'react-router-bootstrap'

const txt1 = {
  fontSize : '2em',
  marginLeft : '5%',
  marginTop : '2%'
}

const buttonlogin = {
  fontSize : '20px',
  marginLeft : '1450px',
  borderRadius : 15,
  borderWidth : 1,
  backgroundColor : 'lightBlue',
  width : '75px'
}
const container = {
  position: 'relative', 
  top:'20px', 
  marginLeft:'5%', 
  width:'90%',
  border: '4px solid #F7F7F7',
  borderRadius: '20px',
  backgroundColor: '#FCFCFC',
  padding:'30px'
}
class JobList extends React.Component {
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
            <div style={{position:'relative', width:'100%', height:'150px'}}>
              <h2 style={txt1}>Jobs</h2>
              <div style={{position: 'absolute' , width: '400px' , marginLeft:'5%' , marginTop: '2%'}}>
                  <ReactSearchAutocomplete
                      style={{display: 'inline'}}
                      placeholder="Find your jobs"
                      // items={items}
                      // onSearch={handleOnSearch}
                      // onHover={handleOnHover}
                      // onSelect={handleOnSelect}
                      // onFocus={handleOnFocus}
                      autoFocus
                  />
              </div>
              <LinkContainer to="/AddJob" style={{position: 'absolute' , right:'5%' , marginTop: '2%'}}>
                <Button variant="outlined"style={{display: 'inline'}}>Create a new job</Button>
              </LinkContainer>
            </div>
            <div style={container}>
              <h4>Front-end Developer</h4>
              <h5>Salary: 15000 THB</h5>
              <p style={{textAlign:'right',position: 'absolute',top: '30px', right: '30px'}}>Approved Status: Waiting</p>
              <p style={{textAlign:'right',position: 'absolute',bottom: '30px', right: '30px'}}>Company Name</p>
            </div>
        </div>
      )
    }
  }
  export default JobList