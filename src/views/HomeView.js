import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actionCreators from '../actions/actions';
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
        <h2>Profit: ${this.props.profit} / lb</h2>
        <h2>Cost to Keep ($/lb)</h2>
        <input  type="test"
                value={this.props.costToKeep}
                onChange={this.props.actions.editCostToKeep}/>
        <h2>Sale Weight (lb/head)</h2>
        <input  type="text"
                value={this.props.saleWeight}
                onChange={this.props.actions.updateSaleWeight}/>
        <h2>Buy Weight (lb/head)</h2>
        <input  type="text"
                value={this.props.buyWeight}
                onChange={this.props.actions.updateBuyWeight}/>
        <h2>Sale Unit Value ($/lb)</h2>
        <input  type="text"
                value={this.props.saleUnitValue}
                onChange={this.props.actions.updateSaleUnitValue}/>
        <h2>Buy Unit Value ($/lb)</h2>
        <input  type="text"
                value={this.props.buyUnitValue}
                onChange={this.props.actions.updateBuyUnitValue}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
