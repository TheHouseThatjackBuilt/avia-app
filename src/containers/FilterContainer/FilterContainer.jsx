/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/ActionsCreatorFilter';
import Filter from '../../components/Filter/Filter';

const FilterContainer = ({ filter, filterAll, filterNone, filter1, filter2, filter3 }) => {
  return (
    <Filter
      filterStatus={filter}
      filterAll={filterAll}
      filterNone={filterNone}
      filter1={filter1}
      filter2={filter2}
      filter3={filter3}
    />
  );
};

export default connect(
  (state) => ({
    filter: state.filter,
  }),
  actions
)(FilterContainer);
