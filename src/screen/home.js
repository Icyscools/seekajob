import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Navbar,Nav, Row , Col , Container, Form, Button } from 'react-bootstrap';

const texth1 = {
  fontSize : '80px',
  marginTop : '2px',
  marginLeft : '100px'
}

const searchstyle = {
  position: 'absolute' , 
  width: '400px' , 
  marginLeft:'550px' , 
  marginTop: '2%'
}

const buttonlogin = {
  fontSize : '20px',
  marginLeft : '1450px',
  borderRadius : 15,
  borderWidth : 1,
  backgroundColor : 'lightBlue',
  width : '75px'
}

class Home extends React.Component {
    render() {
      return (
        <div>
          <Navbar>
            <Form inline>
              <Button style={{marginLeft : '1440px'}} type="submit">Login</Button>
            </Form>
          </Navbar>
          <div style={{
            backgroundImage: "url(/w3.jpg)",
            backgroundSize : 'cover',
            height:'240px',
            }}>
            <h1 style={texth1}>Seekajob</h1>
            <div style={searchstyle}>
                <ReactSearchAutocomplete
                    style={{display: 'inline'}}
                    placeholder="search"
                    // items={items}
                    // onSearch={handleOnSearch}
                    // onHover={handleOnHover}
                    // onSelect={handleOnSelect}
                    // onFocus={handleOnFocus}
                    autoFocus
                />
            </div>
          </div>
        </div>
      );
    }
  }
  export default Home