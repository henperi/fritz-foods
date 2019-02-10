/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { PlaceOrderModal } from './PlaceOrderModal';

describe('rendering', () => {
  let wrapper;
  let props;
  // let mockedSignUpState;
  beforeEach(() => {
    props = {
      handleModal: jest.fn(),
      cart: [],
      placeOrder: jest.fn(),
    };
  });

  it('should render the component', () => {
    wrapper = shallow(<PlaceOrderModal {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should test the placeOrder function', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    wrapper = shallow(<PlaceOrderModal {...props} />);
    const placeOrderBtn = wrapper.find('.btn-green');
    placeOrderBtn.simulate('click', fakeEvent);
    const placeOrder = jest.fn(props.cart);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(placeOrder).toHaveBeenCalledTimes(1));
  });

  it('should test the close-modal btn click', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    wrapper = shallow(<PlaceOrderModal {...props} />);
    const closeBtn = wrapper.find('.btn-primary');
    closeBtn.simulate('click', fakeEvent);
    const handleModal = jest.fn(props.cart);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(handleModal).toHaveBeenCalledTimes(1));
  });
});
