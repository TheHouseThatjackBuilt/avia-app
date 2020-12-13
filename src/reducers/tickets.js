/* eslint-disable */
import { GET_SESSION_ID, GET_TICKETS } from '../tools/constants';

const initialState = {
  sessionId: '',
  ticketsStore: {
    ticketsData: [],
  },
};

const tickets = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SESSION_ID:
      return { ...state, sessionId: payload.searchId };
    case GET_TICKETS:
      return {
        ...state,
        ticketsStore: { ticketsData: [...state.ticketsStore.ticketsData, ...payload.tickets], stop: payload.stop },
      };
    default:
      return state;
  }
};

export default tickets;
