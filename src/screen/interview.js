import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Button from 'react-bootstrap/Button';
import TimePicker from 'react-time-picker';
import TimePickerAddonDemo from './timepicker';

export default class Interview extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div style={{ backgroundColor: 'gray', height: '720px' }}>
        <div
          style={{
            backgroundColor: 'white',
            width: '300px',
            paddingTop: '70px',
            marginLeft: '550px',
            height: '400px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <h2>Interview</h2>
            {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
            {!selectedDay && <p>Choose a day</p>}
            <DayPickerInput onDayChange={this.handleDayChange} />
            <br />
            <label style={{ marginTop: '15px' }}>
              <TimePickerAddonDemo />
            </label>
            <br />
            <Button variant="primary" style={{ marginTop: '15px' }}>
              send
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// class Interview extends React.Component {
//     render() {
//       return (
//         <div style={{backgroundColor : 'pink',
//         height : '720px'
//         }}>
//             <div>
//                 <div style={{
//                     backgroundColor : 'white',
//                     width : '200px'
//                 }}>
//                     <h2>Interview</h2><br />
//                     <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />
//                 </div>
//             </div>
//         </div>
//       );
//     }
//   }
//   export default Interview
