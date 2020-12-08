/* eslint-disable */
import React from 'react';
import allFilterChecked from '../../tools/index';

const Filter = ({ filterStatus, filterAll, filterNone, filter1, filter2, filter3 }) => {
  const CheckAll = allFilterChecked(filterStatus);
  return (
    <div className="content__filters-container filter">
      <h3 className="filter__title">количество пересадок</h3>
      <ul className="content__filters-list filter__list">
        <li className="filter__item-container">
          <label className="filter__item-label">
            <input
              onChange={({ target: { checked } }) => filterAll(checked)}
              className="filter__input"
              type="checkbox"
              checked={CheckAll}
            />
            <span className="filter__checkbox" />
            Все
          </label>
        </li>
        <li className="filter__item-container">
          <label className="filter__item-label">
            <input
              onChange={({ target: { checked } }) => filterNone(checked)}
              className="filter__input"
              type="checkbox"
              checked={filterStatus.filterStatusNone}
            />
            <span className="filter__checkbox" />
            Без пересадок
          </label>
        </li>
        <li className="filter__item-container">
          <label className="filter__item-label">
            <input
              onChange={({ target: { checked } }) => filter1(checked)}
              className="filter__input"
              type="checkbox"
              checked={filterStatus.filterStatusOne}
            />
            <span className="filter__checkbox" />1 пересадка
          </label>
        </li>
        <li className="filter__item-container">
          <label className="filter__item-label">
            <input
              onChange={({ target: { checked } }) => filter2(checked)}
              className="filter__input"
              type="checkbox"
              checked={filterStatus.filterStatusTwo}
            />
            <span className="filter__checkbox" />2 пересадки
          </label>
        </li>
        <li className="filter__item-container">
          <label className="filter__item-label">
            <input
              onChange={({ target: { checked } }) => filter3(checked)}
              className="filter__input"
              type="checkbox"
              checked={filterStatus.filterStatusThree}
            />
            <span className="filter__checkbox" />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
