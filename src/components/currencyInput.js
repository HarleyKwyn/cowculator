import React, { Component, PropTypes } from 'react';
import renderDecimal from '../utils/renderDecimal'
// CurrencyInput that displays currency format
export default class CurrencyInput extends Component {

  handleChange (e) {
    let newValue = e.target.value;
    if( e.target.valueAsNumber === NaN ){
      this.props.onChangeAction(null);
      return;
    }
    newValue = newValue.replace(/[^0-9]/g, '');
    newValue = Number(newValue);
    this.props.onChangeAction(newValue);
  }

  render() {
    let label = null;
    if(this.props.labelText){
      label = <label
                    htmlFor={this.props.id}>
                    {this.props.labelText}
                    </label>
    }
    return (
      <div class="form-group">
        {label}
        <input
          id={this.props.id}
          type="tel"
          className={this.props.className}
          onChange={this.handleChange.bind(this)}
          value={renderDecimal(this.props.value)}
          />
      </div>
    );
  }
}

CurrencyInput.propTypes = {
  onChangeAction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number,
  decimalPlace: PropTypes.number,
  className: PropTypes.string,
  labelText: PropTypes.string,
};
