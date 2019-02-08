/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
// import { configureMockStore } from 'redux-mock-store';
import { LoginPage } from './LoginPage';

describe('rendering', () => {
  let wrapper;
  let props;
  let nextProps;
  let mockedSignInState;
  beforeEach(() => {
    // mapStateToProps = jest.fn();
    mockedSignInState = {
      auth: {
        isAuthenticated: true,
        loading: null,
        user: { id: 1, iat: 1549439277, exp: 1549525677 },
      },
      errors: {
        isAuthenticated: false,
        loading: null,
        email: '',
        password: '',
        message: '',
      },
      loader: {
        loading: false,
      },
    };
    props = {
      loginUser: jest.fn(),
      errors: [],
      history: {
        push: jest.fn(),
      },
      user: {
        isAuthenticated: true,
      },
    };
    nextProps = {
      loginUser: jest.fn(),
      checkoutOrder: jest.fn(),
      history: {
        push: jest.fn(),
      },
      success: {
        status: true,
      },
      orders: [],
      auth: {
        isAuthenticated: true,
        user: {
          id: 1,
        },
      },
    };
  });

  it('invokes `componentDidMount` when mounted', () => {
    const spy = jest.spyOn(LoginPage.prototype, 'componentDidMount');
    wrapper = shallow(<LoginPage {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('invokes `componentWillRecieveProps` when mounted', () => {
    const spy = jest.spyOn(LoginPage.prototype, 'componentWillReceiveProps');
    wrapper = shallow(<LoginPage {...props} />);
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(spy).toHaveBeenCalled();
  });

  it('should render the component', () => {
    wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for onchange', () => {
    const event = {
      target: { name: 'email', value: 'test@test.com' },
      preventDefault: () => {},
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().email).toEqual('test@test.com');
    expect(wrapper.instance().state.email).toEqual(event.target.value);
  });

  it('should render the Button component', () => {
    wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper.length).toBe(1);
  });

  // // it('should test mapStateToProps', () => {
  // //   const state = mapStateToProps(mockedSignInState);
  // //   expect(state).toBeTruthy();
  // // });

  it('should test the onSubmit function', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    wrapper = shallow(<LoginPage {...props} />);
    const loginForm = wrapper.find('form');
    loginForm.simulate('submit', fakeEvent);
    const loginUser = jest.fn(mockedSignInState);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(loginUser).toHaveBeenCalledTimes(1));
  });
});
