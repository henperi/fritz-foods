/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { OrderItems, mapStateToProps } from './OrderedItems';

describe('rendering', () => {
  let wrapper;
  let props;
  let nextProps;
  let mockedSignUpState;
  beforeEach(() => {
    props = {
      getOrderedItems: jest.fn(),
      history: {
        push: jest.fn(),
      },
      match: {
        params: {
          orderId: '',
        },
      },
      order: {
        orderedItems: [],
      },
      user: {
        isAuthenticated: true,
      },
    };
  });

  it('invokes `componentDidMount` when mounted', () => {
    const spy = jest.spyOn(OrderItems.prototype, 'componentDidMount');
    wrapper = shallow(<OrderItems {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should render the component', () => {
    wrapper = shallow(<OrderItems {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(props);
    expect(state).toBeTruthy();
  });
  // it('should test the onSubmit function', () => {
  //   const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  //   wrapper = shallow(<OrderItems {...props} />);
  //   const signupForm = wrapper.find('form');
  //   signupForm.simulate('submit', fakeEvent);
  //   const signupUser = jest.fn(mockedSignUpState);
  //   const promise = new Promise((resolve) => {
  //     resolve(wrapper.instance().onSubmit);
  //   });
  //   promise.then(() => expect(signupUser).toHaveBeenCalledTimes(1));
  // });
});
