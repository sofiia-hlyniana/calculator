import React, {Component} from 'react';
import SliderWithButtons from './SliderWithButtons';

class Calculator extends Component {
	state = {
		moneyValue: 2250,
		timeAmount: 3
	};

	setMoneyValue = (value) => {
		this.setState({
			moneyValue: value
		})
	};
	
	setTimeAmount = (value) => {
		this.setState({
			timeAmount: value
		})
	};

	decreaseMoneyValue = () => {
		const step = this.props.config.money.step;
		const newMoneyValue = this.state.moneyValue - step;
		this.setState({
			moneyValue: newMoneyValue
		});
	};

	increaseMoneyValue = () => {
		const step = this.props.config.money.step;
		const newMoneyValue = this.state.moneyValue + step;
		this.setState({
			moneyValue: newMoneyValue
		});
	};

	decreaseTimeAmount = () => {
		const step = this.props.config.time.step;
		const newTimeAmount = this.state.timeAmount - step;
		this.setState({
			timeAmount: newTimeAmount
		});
	};

	increaseTimeAmount = () => {
		const step = this.props.config.time.step;
		const newTimeAmount = this.state.timeAmount + step;
		this.setState({
			timeAmount: newTimeAmount
		});
	};

	getTotalSum() {
		const { creditRate, creditRateDiscount } = this.props.config;
		const { moneyValue, timeAmount } = this.state;
		const totalSum = parseInt(moneyValue * creditRate);
		const discountedSum = parseInt(moneyValue * creditRateDiscount);
		return <span><strike>{totalSum}</strike> <strong>{discountedSum}</strong></span>;
	}

	getReturnDate() {
		const currentDate = new Date();
		const dateCopy = new Date(currentDate);
		const {timeAmount} = this.state;
		const returnDay = new Date(dateCopy.setDate(currentDate.getDate() + timeAmount));

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
		const { moneyValue, timeAmount } = this.state;
		const moneyData = config.money;
		const timeData = config.time;
		return (
				<section>
					<SliderWithButtons title="Необхідна сумма"
														 min={moneyData.min}
														 max={moneyData.max}
														 step={moneyData.step}
														 value={moneyValue}
														 leftLabelText={`${moneyData.min} грн`}
														 rightLabelText={`${moneyData.max} грн`}
														 onChange={this.setMoneyValue}
														 onDecreaseButtonClick={this.decreaseMoneyValue}
														 onIncreaseButtonClick={this.increaseMoneyValue}/>
					<SliderWithButtons title="Необхідний період"
														 min={timeData.min}
														 max={timeData.max}
														 step={timeData.step}
														 value={timeAmount}
														 leftLabelText={`${timeData.min} день`}
														 rightLabelText={`${timeData.max} днів`}
														 onChange={this.setTimeAmount}
														 onDecreaseButtonClick={this.decreaseTimeAmount}
														 onIncreaseButtonClick={this.increaseTimeAmount}/>
					<h3>Ви берете {moneyValue} та повертаєте {this.getTotalSum()} до {this.getReturnDate()} </h3>
				</section>
		);
	}
}

export default Calculator;