import React from 'react'
import Button from 'react-bootstrap/Button'

const styleformAuthcode = {
    backgroundColor : 'white',
    width : '500px',
    height : '230px',
    // marginLeft : '50px'
    textAlign : 'center',
    marginLeft : '550px',
    // marginTop : '20px'
}

class AuthCode extends React.Component {
    render() {
      return (
        <div style={{
            backgroundImage: "url(/si3.jpg)",
            backgroundSize : 'cover',
            height : '720px'
        }}><div style={{paddingTop : '200px'}}>
            <div style={styleformAuthcode}>
                <h2>we send code to you in e-mail</h2><br />
                <h4>Please enter the code</h4>
                <form id='authcode' name='authcode'>
                <input type='text' id='authcode' name='authcode' placeholder='code'></input>
                </form><br />
                <Button variant="secondary">Ok</Button>
            </div>
            </div>
        </div>
      );
    }
  }
  export default AuthCode