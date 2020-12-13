/* eslint-disable */
import { SORT_CHEAPEST, SORT_FASTEST } from '../tools/constants';

const initialState = {
  theCheapest: true,
  theFastest: false,
};

const sort = (state = initialState, { type, payload }) => {
  switch (type) {
    case SORT_CHEAPEST:
      return { theFastest: false, theCheapest: payload };
    case SORT_FASTEST:
      return { theFastest: payload, theCheapest: false };
    default:
      return state;
  }
};

export default sort;
