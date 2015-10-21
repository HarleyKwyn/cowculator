import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actionCreators from '../actions/actions';
import CurrencyInput from '../components/currencyInput';
import renderDecimal from '../utils/renderDecimal'
// Normally you'd import your action creators, but I don't want to create
// a file that you're just going to delete anyways!
// const actionCreators = {
//   calculateProfit : () => ({ type : 'CALCULATE_PROFIT' })
// };
// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  profit : state.cowculator.profit,
  costToKeep : state.cowculator.costToKeep,
  saleWeight: state.cowculator.saleWeight,
  buyWeight: state.cowculator.buyWeight,
  saleUnitValue: state.cowculator.saleUnitValue,
  buyUnitValue: state.cowculator.buyUnitValue
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});
export class HomeView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    profit  : React.PropTypes.number,
    costToKeep : React.PropTypes.number,
    saleWeight: React.PropTypes.number,
    buyWeight: React.PropTypes.number,
    saleUnitValue: React.PropTypes.number,
    buyUnitValue: React.PropTypes.number
  }
  constructor () {
    super();
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Cattle-Counter</h1>
        <h2>Profit: ${renderDecimal(this.props.profit)} / lb</h2>
        <h2>Cost to Keep ($/lb)</h2>
        <CurrencyInput
                value={this.props.costToKeep}
                onChangeAction={this.props.actions.editCostToKeep}/>
        <h2>Sale Weight (lb/head)</h2>
        <CurrencyInput
                value={this.props.saleWeight}
                onChangeAction={this.props.actions.updateSaleWeight}/>
        <h2>Buy Weight (lb/head)</h2>
        <CurrencyInput
                value={this.props.buyWeight}
                onChangeAction={this.props.actions.updateBuyWeight}/>
        <h2>Sale Unit Value ($/lb)</h2>
        <CurrencyInput
                value={this.props.saleUnitValue}
                onChangeAction={this.props.actions.updateSaleUnitValue}/>
        <h2>Buy Unit Value ($/lb)</h2>
        <CurrencyInput
                value={this.props.buyUnitValue}
                onChangeAction={this.props.actions.updateBuyUnitValue}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
