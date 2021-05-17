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
            <h2 style={txt1}>Jobs</h2>
            <div style={{position: 'absolute' , width: '400px' , marginLeft:'2%' , marginTop: '2%'}}>
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
            <div style={{position: 'absolute' , right:'20px' , marginTop: '2%'}}>
                <Button variant="outlined"style={{display: 'inline'}}>Create a new job</Button>
            </div>
            {/*  */}
            {/* ไว้ใส่ job */}
            {/*  */}
        </div>
      )
    }
  }
  export default JobList