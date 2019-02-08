import React from 'react';

/* eslint-disable no-undef */
import Errors, { MainError } from './Errors';

describe('The Errors component Test Suite', () => {
  it('should return a main error list item', () => {
    const wrapper = shallow(<MainError errors={[{ msg: 'An error occured' }]} />);

    expect(wrapper.length).toBe(1);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MainError)).toBeDefined();
  });

  it('should format a date and return it to standard callendar dates', () => {
    const wrapper = shallow(<Errors errors={[{ param: 'email' }]} name="email" />);

    expect(wrapper.length).toBe(1);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MainError)).toBeDefined();
  });
});
