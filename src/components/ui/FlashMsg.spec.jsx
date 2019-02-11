import React from 'react';

/* eslint-disable no-undef */
import FlashMsg from './FlashMsg';

describe('The Errors component Test Suite', () => {
  const props = {
    flashData: {
      showFlash: '',
      title: '',
      message: '',
      flashType: '',
    },
  };
  it('should return a main error list item', () => {
    const wrapper = shallow(<FlashMsg {...props} />);

    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FlashMsg)).toBeDefined();
  });
});
