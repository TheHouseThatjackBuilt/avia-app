/* eslint-disable */
import {
  FILTER_TRANSFER_ALL,
  FILTER_TRANSFER_NONE,
  FILTER_TRANSFER_1,
  FILTER_TRANSFER_2,
  FILTER_TRANSFER_3,
} from '../tools/constants';

export const filterAll = (payload) => ({ type: FILTER_TRANSFER_ALL, payload });
export const filterNone = (payload) => ({ type: FILTER_TRANSFER_NONE, payload });
export const filter1 = (payload) => ({ type: FILTER_TRANSFER_1, payload });
export const filter2 = (payload) => ({ type: FILTER_TRANSFER_2, payload });
export const filter3 = (payload) => ({ type: FILTER_TRANSFER_3, payload });
