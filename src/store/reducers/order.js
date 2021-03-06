import * as Actions from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PURCHASE_INIT: {
      return {
        ...state,
        purchased: false
      };
    }
    case Actions.PURCHASE_BURGER_START: {
      return { ...state, loading: true };
    }
    case Actions.PURCHASE_BURGER_SUCCESS: {
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };
    }
    case Actions.PURCHASE_BURGER_FAILED: {
      return {
        ...state,
        loading: false
      };
    }
    case Actions.FETCH_ORDER_START: {
      return { ...state, loading: true };
    }
    case Actions.FETCH_ORDER_SUCCESS: {
      return {
        ...state,
        orders: action.orders,
        loading: false
      };
    }
    case Actions.FETCH_ORDER_FAIL: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
