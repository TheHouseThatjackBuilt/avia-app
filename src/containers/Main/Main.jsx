/* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Progress, Alert } from 'antd';

import * as filtersActions from '../../actions/filtering';
import * as ticketsActions from '../../actions/getTickets';
import * as sortingActions from '../../actions/sorting';

import {
  getFilter,
  getSessionId,
  getTickets,
  getStopFetching,
  getTabsStatus,
  allFilterChecked,
  filterData,
  sortTicketsByPrice,
} from '../../tools/selectors';

import Filter from '../../components/Filter/Filter';
import Tabs from '../../components/Tabs/Tabs';
import TicketsList from '../../components/TicketsList/TicketsList';

const Main = ({
  filter,
  CheckAll,
  sessionId,
  tickets,
  stop,
  filterAll,
  filterNone,
  filter1,
  filter2,
  filter3,
  getSearchId,
  getTickets,
  sortByPrice,
  sortBySpeed,
  tabsStatus,
  sortedTickets,
}) => {
  useEffect(() => {
    if (sessionId === '') getSearchId();
    if (!stop && sessionId !== '') getTickets(sessionId);
  }, [sessionId, stop, getSearchId, getTickets, tickets]);

  const persentLoading = Math.floor((tickets.length * 100) / 7000);
  const noFilterAlert = Object.values(filter).filter((el) => el === true).length;

  const progressBar = !stop ? (
    <Progress percent={persentLoading} strokeColor="#2196f3" showInfo={false} status="active" />
  ) : null;

  const alert = !noFilterAlert ? (
    <Alert
      message="Informational Notes"
      description="Билетов, подходящих под параметры поиска не найдено"
      type="info"
      showIcon
    />
  ) : null;

  return (
    <main className="main__content content">
      <Filter
        CheckAll={CheckAll}
        filterStatus={filter}
        filterAll={filterAll}
        filterNone={filterNone}
        filter1={filter1}
        filter2={filter2}
        filter3={filter3}
      />
      <section className="content__tickets">
        <Tabs tabsStatus={tabsStatus} sortByPrice={sortByPrice} sortBySpeed={sortBySpeed} />
        {progressBar}
        {alert}
        <TicketsList tickets={sortedTickets} />
      </section>
    </main>
  );
};

export default connect(
  (state) => ({
    filter: getFilter(state),
    CheckAll: allFilterChecked(state),
    sessionId: getSessionId(state),
    tickets: getTickets(state),
    stop: getStopFetching(state),
    tabsStatus: getTabsStatus(state),
    filteredTickets: filterData(state),
    sortedTickets: sortTicketsByPrice(state),
  }),
  {
    ...filtersActions,
    ...ticketsActions,
    ...sortingActions,
  }
)(Main);
