/**
 * Format cash/money to a readable money fromat
 * @param {Number} amount the amount to format
 */
export const formatCash = amount => amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

/**
 * Format date to callendar fromat
 * @param {String} date the date string to format
 */
export const formatDate = date => `${
  date
    .toLocaleString()
    .replace(/-/g, '/')
    .split('T')[0]
} ${
  date
    .toLocaleString()
    .split('T')[1]
    .split('.')[0]
}`;
