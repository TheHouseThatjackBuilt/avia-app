import { requestId, requestTickets } from '../serviceApi/serviceApi';
import { GET_SESSION_ID, GET_TICKETS } from '../tools/constants';

const getSearchId = () => async (dispatch) => {
  const response = await requestId();
  dispatch({ type: GET_SESSION_ID, payload: response });
};

const getTickets = (id) => async (dispatch) => {
  const response = await requestTickets(id);
  dispatch({ type: GET_TICKETS, payload: response });
};

export { getSearchId, getTickets };
