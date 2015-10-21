import * as types from '../constants/ActionTypes';

export function editCostToKeep(costToKeep) {
  return { type: types.EDIT_COST_TO_KEEP, costToKeep };
}

// export function lockCostToKeep() {
//   return { type: types.LOCK_COST_TO_KEEP };
// }
// export function unlockCostToKeep() {
//   return { type: types.UNLOCK_COST_TO_KEEP };
// }

export function updateSaleWeight(weight) {
  return { type: types.UPDATE_SALE_WEIGHT, weight };
}

export function updateBuyWeight(weight) {
  return { type: types.UPDATE_BUY_WEIGHT, weight };
}

export function updateSaleUnitValue(unitValue) {
  return { type: types.UPDATE_SALE_UNIT_VALUE, unitValue };
}

export function updateBuyUnitValue(unitValue) {
  return { type: types.UPDATE_BUY_UNIT_VALUE, unitValue };
}

// export function updateProfit(unitValue){
//   return { type: UPDATE_PROFIT, unitValue };
// }
