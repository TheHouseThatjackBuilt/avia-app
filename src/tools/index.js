/* eslint-disable */
const allFilterChecked = (checkboxState) => {
  if (typeof checkboxState === 'null' || typeof checkboxState === 'undefined') return;
  const filtersWithoutAll = Object.entries(checkboxState)
    .slice(1)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  const checkboxStatus = Object.values(filtersWithoutAll).filter((el) => el === true);
  return checkboxStatus.length === 4;
};
export default allFilterChecked;
