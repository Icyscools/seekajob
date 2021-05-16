import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

ReactDOM.render(<TimePicker defaultValue={moment('12:08', format)} format={format} />, document.getElementById('container'));