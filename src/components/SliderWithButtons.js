import React, {Component} from 'react';
import Slider from 'react-rangeslider';

class SliderWithButtons extends Component {
	//state = {};
	render() {
		const { min, max, step, value, onChange, onReduceButtonClick, onIncreaseButtonClick } = this.props;
		return (
		<div>
			<button onClick={onReduceButtonClick}>-</button>
			<Slider
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={onChange}
				/>
			<button onClick={onIncreaseButtonClick}>+</button>
		</div>
		);
	}
}

export default SliderWithButtons;