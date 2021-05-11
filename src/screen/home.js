import React from 'react'

const texth1 = {
  fontSize : '80px',
  marginTop : '1px',
  marginLeft : '45px'
}

const inputsearch = {
  fontSize : '20px',
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
        <div><button style={buttonlogin}> login </button>
          <div style={{
            backgroundImage: "url(/w3.jpg)",
            backgroundSize : 'cover'
            }}>
            <h1 style={texth1}>Seekajob</h1>
            <form id='search' name='search'>
            <input style={inputsearch} type='text' id='search' name='search' placeholder='search'></input>
            </form>
          </div>
        </div>
      );
    }
  }
  export default Home