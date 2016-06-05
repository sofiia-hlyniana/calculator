import React, {Component} from 'react';
import MoneySlider from './MoneySlider.js';
import TimeSlider from './TimeSlider.js';

class Calculator extends Component {
	state = {
		moneyValue: 2250,
		timeValue: 3
	};

	setMoneyValue = (value) => {
		this.setState({
			moneyValue: value
		})
	};
	setTimeValue = (value) => {
		this.setState({
			timeValue: value
		})
	};

	getTotalSum() {
		const { creditRate, creditRateDiscount } = this.props.config;
		const { moneyValue, timeValue } = this.state;
		const totalSum = parseInt(moneyValue * creditRate);
		const discountedSum = parseInt(moneyValue * creditRateDiscount);
		return <span><strike>{totalSum}</strike> <strong>{discountedSum}</strong></span>;
	}

	getReturnDate() {
		const currentDate = new Date();
		const dateCopy = new Date(currentDate);
		const {timeValue} = this.state;
		const returnDay = new Date(dateCopy.setDate(currentDate.getDate() + timeValue));

		let dd = returnDay.getDate();
		if (dd < 10) dd = `0${dd}`;

		let mm = returnDay.getMonth() + 1;
		if (mm < 10) mm = `0${mm}`;

		let yy = returnDay.getFullYear() % 100;
		if (yy < 10) yy = `0${yy}`;

		const returnDate =  `${dd}.${mm}.${yy}`;

		return <strong>{returnDate}</strong>;
	}

	render() {
		const { config } = this.props;
		const { moneyValue, timeValue } = this.state;
		const moneyData = config.money;
		const timeData = config.time;
		return <section>
			<h3>Необхідна сумма:</h3>
			<MoneySlider min={moneyData.min} max={moneyData.max} step={moneyData.step} value={moneyValue}
						 onChange={this.setMoneyValue}/>
			<TimeSlider min={timeData.min} max={timeData.max} step={timeData.step} value={timeValue}
						onChange={this.setTimeValue}/>

			<h3>Ви берете {moneyValue} та повертаєте {this.getTotalSum()} до {this.getReturnDate()} </h3>
		</section>;
	}
}

export default Calculator;