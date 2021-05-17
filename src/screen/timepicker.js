import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { TimePicker, Button } from 'antd';

export default class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        renderExtraFooter={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}

// ReactDOM.render(<TimePickerAddonDemo />, document.getElementById('container'));
