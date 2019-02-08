/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { Fragment } from 'react';
import { Header } from './Header';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      logoutUser: jest.fn(),
      errors: [],
      cart: [],
      history: {
        push: jest.fn(),
      },
      user: {
        isAuthenticated: true,
      },
    };
  });

  it('should render the component', () => {
    wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('Fragment')).toBeDefined();
    expect(wrapper.find('Fragment')).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  // it('should test mapStateToProps', () => {
  //   const state = mapStateToProps(mockedState);
  //   expect(state).toBeTruthy();
  // });

  it('should test the handleLogout function', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    wrapper = shallow(<Header {...props} />);
    const logoutBtn = wrapper.find('.logout');
    logoutBtn.simulate('click', fakeEvent);
    const logoutUser = jest.fn();
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().handleLogout);
    });
    promise.then(() => expect(logoutUser).toHaveBeenCalledTimes(1));
  });

  it('should test the toggleNav function', () => {
    // event.target.parentElement.parentElement.classList.toggle;
    const fakeEvent = {
      preventDefault: () => console.log('preventDefault'),
      target: {
        parentElement: { parentElement: { classList: { toggle: jest.fn(), contains: jest.fn() } } },
      },
    };
    wrapper = shallow(<Header {...props} />);
    const toggleBtn = wrapper.find('.icon');
    toggleBtn.simulate('click', fakeEvent);
    const toggleNav = jest.fn(fakeEvent);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().handleLogout);
    });
    promise.then(() => expect(toggleNav).toHaveBeenCalledTimes(1));
  });
});
