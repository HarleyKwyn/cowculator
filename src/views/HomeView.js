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
        <h3>Cowculator</h3>
        <h4
          className={(()=>{
            let basename = 'alert alert-';
            if (this.props.profit > 0) {
              return basename + 'success';
            } else if (this.props.profit < 0) {
              return basename + 'danger';
            } else {
              return basename + 'default';
            }
          })()}>
          Profit: ${renderDecimal(this.props.profit)} / lb</h4>
        <CurrencyInput
                id="costToKeep"
                labelText="Cost to Keep ($/lb)"
                className="form-control"
                value={this.props.costToKeep}
                onChangeAction={this.props.actions.editCostToKeep}/>
        <CurrencyInput
                id="updateSaleWeight"
                labelText="Sale Weight (lb/head)"
                className="form-control"
                value={this.props.saleWeight}
                onChangeAction={this.props.actions.updateSaleWeight}/>
        <CurrencyInput
                id="updateSaleWeight"
                labelText="Buy Weight (lb/head)"
                className="form-control"
                value={this.props.buyWeight}
                onChangeAction={this.props.actions.updateBuyWeight}/>
        <CurrencyInput
                id="updateSaleUnitValue"
                labelText="Sale Unit Value (cwt)"
                className="form-control"
                value={this.props.saleUnitValue}
                onChangeAction={this.props.actions.updateSaleUnitValue}/>
        <CurrencyInput
                id="updateBuyUnitValue"
                labelText="Buy Unit Value (cwt)"
                className="form-control"
                value={this.props.buyUnitValue}
                onChangeAction={this.props.actions.updateBuyUnitValue}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
