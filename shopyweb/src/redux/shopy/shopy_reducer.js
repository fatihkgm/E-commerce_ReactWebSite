import SHOP_DATA from './shopy_data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopyReducer;
