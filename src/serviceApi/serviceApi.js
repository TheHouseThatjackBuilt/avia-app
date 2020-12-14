/* eslint-disable */
import { BASE_PATH, SEARCH_ID, SEARCH_PARAMS } from '../tools/constants';

const request = async (params) => {
  let response = await fetch(`${BASE_PATH}${params}`);
  if (response.status === 500) return request(params);
  return response.json();
};

const requestId = async () => await request(SEARCH_ID);
const requestTickets = async (id) => await request(`${SEARCH_PARAMS}${id}`);

export { requestId, requestTickets };
