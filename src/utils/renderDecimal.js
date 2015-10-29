import padLeft from "lodash";
export default function renderDecimal (value, decimalPlaces) {
  if(value === null || value === undefined){
    return '';
  }
  // default to two decimal places
  decimalPlaces = decimalPlaces || 2;
  value = String(value);
  if(value.length < decimalPlaces){
    return '0.' + _.padLeft(value, decimalPlaces, '0')
  }

  value = value.replace('.', '');
  const beforeDecimal = value.substring(0, value.length-decimalPlaces);
  const afterDecimal = value.substring(value.length - decimalPlaces);
  return beforeDecimal + '.' + afterDecimal;
}
