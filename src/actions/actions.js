import * as types from '../constants/ActionTypes';

export function editCostToKeep(e) {
  const costToKeep = Number(e.target.value);
  console.log(costToKeep, e.target.value);
  return { type: types.EDIT_COST_TO_KEEP, costToKeep };
}

// export function lockCostToKeep() {
//   return { type: types.LOCK_COST_TO_KEEP };
// }
// export function unlockCostToKeep() {
//   return { type: types.UNLOCK_COST_TO_KEEP };
// }

export function updateSaleWeight(e) {
  const weight = Number(e.target.value);
  return { type: types.UPDATE_SALE_WEIGHT, weight };
}

export function updateBuyWeight(e) {
  const weight = Number(e.target.value);
  return { type: types.UPDATE_BUY_WEIGHT, weight };
}

export function updateSaleUnitValue(e) {
  const unitValue = Number(e.target.value);
  return { type: types.UPDATE_SALE_UNIT_VALUE, unitValue };
}

export function updateBuyUnitValue(e) {
  const unitValue = Number(e.target.value);
  return { type: types.UPDATE_BUY_UNIT_VALUE, unitValue };
}

// export function updateProfit(unitValue){
//   return { type: UPDATE_PROFIT, unitValue };
// }
