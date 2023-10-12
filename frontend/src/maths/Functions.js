import { DateTime } from 'luxon';

export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const filterItems = (arr, query) => {
  return Array.isArray(arr) ? arr.filter((el) => el.type === query) : null;
};

export const formatDate = (date) => {
  const dt = DateTime.fromISO(date);
  return dt.setLocale('es').toLocaleString();
};
