import React from 'react';
import { render } from 'react-dom';
import Calculator from './components/Calculator';
import { config } from './config';
import './style/style.css';

render(<Calculator config = {config} />, document.getElementById('container'));