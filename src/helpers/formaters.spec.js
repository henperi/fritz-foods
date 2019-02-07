/* eslint-disable no-undef */
import { formatCash, formatDate } from './formaters';

describe('The formaters helper Test Suite', () => {
  it('should format a number and return it to cash', () => {
    const result = formatCash(500);
    expect(result).toEqual('500.00');
  });

  it('should format a date and return it to standard callendar dates', () => {
    const result = formatDate('2018-11-09T02:30:03.986Z');
    expect(result).toEqual('2018/11/09 02:30:03');
  });
});
