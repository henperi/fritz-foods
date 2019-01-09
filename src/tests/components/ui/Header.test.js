// import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Header from "../../../components/ui/Header";
import { shallow } from "enzyme";
// import toJSON from "enzyme-to-json";

test("should render Header correctly", () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect((wrapper).find("nav").length).toBe(1);
});
