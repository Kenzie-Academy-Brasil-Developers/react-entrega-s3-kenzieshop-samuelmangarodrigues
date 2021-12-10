import { ADD_CART, REMOVE_CART } from "./actionTypes";
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      if (product.qnt === 0) {
        product.qnt += 1;
        return [...state, product];
      }
      return state;
    case REMOVE_CART:
      const { prods } = action;
      const { id } = action;
      prods.qnt = 0;
      const newList = state.filter((filt) => filt.id !== id);
      return newList;
    default:
      return state;
  }
};
export default cartReducer;
