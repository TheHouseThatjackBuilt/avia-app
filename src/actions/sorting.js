/* eslint-disable */
import { SORT_CHEAPEST, SORT_FASTEST } from '../tools/constants';

export const sortByPrice = (payload) => ({ type: SORT_CHEAPEST, payload });
export const sortBySpeed = (payload) => ({ type: SORT_FASTEST, payload });
