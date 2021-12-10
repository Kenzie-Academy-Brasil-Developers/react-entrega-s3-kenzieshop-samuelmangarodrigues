import { ADD_CART, REMOVE_CART } from "./actionTypes";
export const addCart = (product, qnt) => {
  return {
    type: ADD_CART,
    product,
    qnt,
  };
};
export const rmCart = (id, qnt, prods) => {
  return {
    type: REMOVE_CART,
    prods,
    id,
    qnt,
  };
};
