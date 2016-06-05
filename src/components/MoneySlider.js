import React, {Component} from 'react';
import SliderWithButtons from './SliderWithButtons.js';

class MoneySlider extends Component {
	//state = {};
	render() {
		const { min, max, step, value, onChange, onReduceButtonClick, onIncreaseButtonClick } = this.props;
		return <SliderWithButtons
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={onChange}
			onReduceButtonClick={onReduceButtonClick}
			onIncreaseButtonClick={onIncreaseButtonClick}
			/>;
	}
}

export default MoneySlider;