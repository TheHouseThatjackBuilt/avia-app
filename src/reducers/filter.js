/* eslint-disable */
import {
  FILTER_TRANSFER_ALL,
  FILTER_TRANSFER_NONE,
  FILTER_TRANSFER_1,
  FILTER_TRANSFER_2,
  FILTER_TRANSFER_3,
} from '../tools/constants';

const initialState = {
  filterStatusAll: false,
  filterStatusNone: false,
  filterStatusOne: false,
  filterStatusTwo: false,
  filterStatusThree: false,
};

const filter = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_TRANSFER_ALL:
      return Object.entries(initialState).reduce((acc, [key, _]) => ({ ...acc, [key]: payload }), {});
    case FILTER_TRANSFER_NONE:
      return { ...state, filterStatusNone: payload };
    case FILTER_TRANSFER_1:
      return { ...state, filterStatusOne: payload };
    case FILTER_TRANSFER_2:
      return { ...state, filterStatusTwo: payload };
    case FILTER_TRANSFER_3:
      return { ...state, filterStatusThree: payload };
    default:
      return state;
  }
};

export default filter;
