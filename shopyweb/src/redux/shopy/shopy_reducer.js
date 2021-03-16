import SHOP_DATA from '../../pages/shopy/shopydata';

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
