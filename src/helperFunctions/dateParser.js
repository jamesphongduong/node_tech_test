export const parseDate = date => {
  //take date in YYYY-MM-DD format and return in DD-MM-YYYY format
  return date
    .split('-')
    .reverse()
    .join('-');
};
