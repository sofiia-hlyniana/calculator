import React, {PropTypes} from 'react';
import Slider from 'react-rangeslider';

function SliderWithButtons(props) {

  const {title, min, max, step, value, onChange, onDecreaseButtonClick, onIncreaseButtonClick, leftLabelText, rightLabelText} = props;

  return (
      <div className="calculator__item">
        <h3 className="rangeslider__title">{title}</h3>
        <div className="rangeslider__container">
          <button className="rangeslider__button rangeslider__button_decrease" onClick={onDecreaseButtonClick}></button>
          <Slider
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={onChange}
          />
          <button className="rangeslider__button rangeslider__button_increase"onClick={onIncreaseButtonClick}></button>
        </div>
        <div className="label__container">
          <span className="label__item label__item_left">{leftLabelText}</span>
          <span className="label__item label__item_right">{rightLabelText}</span>
        </div>
      </div>
  );
}


export default SliderWithButtons;