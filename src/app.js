import React from 'react';
import { render } from 'react-dom';
import Calculator from './components/Calculator';
import { config } from './config';
import './assets/rangeslider.styl';
import './assets/label.styl';

render(<Calculator config = {config} />, document.getElementById('container'));