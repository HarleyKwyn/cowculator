import React, { Component, PropTypes } from 'react';
import renderDecimal from '../utils/renderDecimal'
// CurrencyInput that displays currency format
export default class CurrencyInput extends Component {

  handleChange (e) {
    let newValue = e.target.value;
    if(newValue === ''){
      this.props.onChangeAction('');
      return;
    }
    newValue = newValue.replace('.', '');
    newValue = Number(newValue);
    console.log('number value', newValue);
    this.props.onChangeAction(newValue);
  }



  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        onChange={this.handleChange.bind(this)}
        value={renderDecimal(this.props.value)}
        />
    );
  }

}

CurrencyInput.propTypes = {
  onChangeAction: PropTypes.func.isRequired,
  value: PropTypes.number,
  decimalPlace: PropTypes.number,
  className: PropTypes.string
};
