/* eslint-disable */
import { createSelector } from 'reselect';

// simple filters && request data selectors
export const getFilter = (state) => state.filter;
export const getSessionId = (state) => state.tickets.sessionId;
export const getTickets = (state) => state.tickets.ticketsStore.ticketsData;
export const getStopFetching = (state) => state.tickets.ticketsStore.stop;
export const getTabsStatus = (state) => state.sort;

export const allFilterChecked = createSelector(getFilter, (filters) => {
  const checkboxStatus = Object.values(filters).filter((el) => el === true);
  return checkboxStatus.length === 4;
});

export const filterData = createSelector(getTickets, getFilter, (data, filters) => {
  const { filterStatusNone, filterStatusOne, filterStatusTwo, filterStatusThree } = filters;
  let sortedTickets = [];

  if (filterStatusNone)
    sortedTickets = [
      ...sortedTickets,
      ...data.filter(({ segments }) => (segments[0].stops.length === 0) & (segments[1].stops.length === 0)),
    ];

  if (filterStatusOne)
    sortedTickets = [
      ...sortedTickets,
      ...data.filter(
        ({ segments }) =>
          (segments[0].stops.length === 1 && segments[1].stops.length === 1) ||
          (segments[1].stops.length === 1 && segments[0].stops.length === 1)
      ),
    ];

  if (filterStatusTwo)
    sortedTickets = [
      ...sortedTickets,
      ...data.filter(
        ({ segments }) =>
          (segments[0].stops.length === 2 && segments[1].stops.length === 2) ||
          (segments[1].stops.length === 2 && segments[0].stops.length === 2)
      ),
    ];

  if (filterStatusThree)
    sortedTickets = [
      ...sortedTickets,
      ...data.filter(
        ({ segments }) =>
          (segments[0].stops.length === 3 && segments[1].stops.length === 3) ||
          (segments[1].stops.length === 3 && segments[0].stops.length === 3)
      ),
    ];

  return sortedTickets;
});

export const sortTicketsByPrice = createSelector(filterData, getTabsStatus, (data, sortTabs) => {
  const { theCheapest, theFastest } = sortTabs;

  if (theCheapest) return data.sort((prev, next) => prev.price - next.price).slice(0, 10);
  if (theFastest) return data.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration).slice(0, 10);
});
