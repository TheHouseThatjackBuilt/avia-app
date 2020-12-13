import { requestId, requestTickets } from '../serviceApi/serviceApi';
import { GET_SESSION_ID, GET_TICKETS } from '../tools/constants';

const getSearchId = () => async (dispatch) => {
  const response = await requestId();
  dispatch({ type: GET_SESSION_ID, payload: response });
};

const getTickets = (id) => (dispatch) => requestTickets(id)
  .then((data) => dispatch({ type: GET_TICKETS, payload: data }))
  .catch(() => dispatch({ type: GET_TICKETS, payload: { tickets: [], stop: false } }));

export { getSearchId, getTickets };
