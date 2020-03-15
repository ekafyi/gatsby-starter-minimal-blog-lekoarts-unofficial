/**
 * Get post item year
 * @description Get year value from a post item object
 * @param item - Post item
 * @return {string} - Year, eg. "2020"
 */
export const getItemYear = item => {
  // IMPORTANT: Change this if using a custom/different formatString!
  const arr = item.date.split(".");
  const year = arr[2];

  return year;
};

/**
 * Get years from a list of posts
 * @description Get years from a list of posts for grouping
 * @param items - Array of posts
 * @return {array} - Years of the posts
 */
export const getYears = items => {
  let years = items.map(item => getItemYear(item));
  years = [...new Set(years)];
  return years;
};
