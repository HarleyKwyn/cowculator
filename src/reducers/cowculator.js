import { createReducer } from 'utils';

// normally this would be imported from /actions, but in trying to keep
// this starter kit as small as possible we'll just define it here.
import * as types from '../constants/ActionTypes';

const initialState = {
  costToKeep: null,
  costToKeepIsEditable: true,
  saleWeight: null,
  buyWeight: null,
  saleUnitValue: null,
  buyUnitValue: null,
  profit: null
};

function calculateProfit (state) {
  const netWeight = state.buyWeight ? (state.saleWeight * 100) / (state.buyWeight * 100) : 0;
  const netUnitValue = state.buyUnitValue ? (state.saleUnitValue /  state.buyUnitValue) : 0;
  const grossProfit = netUnitValue ? netWeight / netUnitValue : 0;
  // TODO: Manage rounding here
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
});
