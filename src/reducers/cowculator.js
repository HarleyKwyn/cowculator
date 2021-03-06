import { createReducer } from 'utils';

// normally this would be imported from /actions, but in trying to keep
// this starter kit as small as possible we'll just define it here.
import * as types from '../constants/ActionTypes';

const initialState = {
  costToKeep: 0,
  costToKeepIsEditable: true,
  saleWeight: 0,
  buyWeight: 0,
  saleUnitValue: 0,
  buyUnitValue: 0,
  profit: 0
};

function calculateProfit (state) {
  const netWeight = state.buyWeight ? (state.saleWeight / state.buyWeight) : 0;
  const netUnitValue = state.buyUnitValue ? (state.saleUnitValue /  state.buyUnitValue) : 0;
  const grossProfit = netUnitValue ? netWeight / netUnitValue : 0;
  const netProfit = grossProfit - state.costToKeep;
  return Object.assign({}, state, { profit: netProfit });
}

export default createReducer(initialState, {
  [types.LOCK_COST_TO_KEEP](state) {
    return Object.assign({}, state, { costToKeepIsEditable: false })
  },
  [types.UNLOCK_COST_TO_KEEP](state) {
    return Object.assign({}, state, { costToKeepIsEditable: false })
  },
  [types.EDIT_COST_TO_KEEP](state, action) {
    return Object.assign({}, state, { costToKeep: action.costToKeep });
  },
  [types.UPDATE_SALE_WEIGHT](state, action) {
    console.log(state, action)

    return calculateProfit(Object.assign({}, state, { saleWeight: action.weight }));
  },
  [types.UPDATE_BUY_WEIGHT](state, action) {
    return calculateProfit(Object.assign({}, state, { buyWeight: action.weight }));
  },
  [types.UPDATE_BUY_UNIT_VALUE](state, action) {
    return calculateProfit(Object.assign({}, state, { buyUnitValue: action.unitValue }));
  },
  [types.UPDATE_SALE_UNIT_VALUE](state, action) {
    return calculateProfit(Object.assign({}, state, { saleUnitValue: action.unitValue }));
  }
  // [UPDATE_PROFIT]: (state, action) => {
  //   const netWeight = state.buyWeight ? (state.saleWeight / state.buyWeight) : 0;
  //   const netUnitValue = state.buyUnitValue ? (state.saleUnitValue /  state.buyUnitValue) : 0;
  //   const grossProfit = newUnitValue ? netWeight / netUnitValue : 0;
  //   state.profit = grossProfit - state.costToKeep;
  //   return state;
  // }
});
