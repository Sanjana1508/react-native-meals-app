import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import AppNavigator from "../navigation/AppNavigator";
import Category from "../components/molecules/Category";

import "react-native-gesture-handler/jestSetup";

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

afterEach(cleanup);

describe("react navigation tests", () => {
  const mockFn = jest.fn();
  it("should get categories", () => {
    const { getByText } = render(<AppNavigator />);
    const categories = getByText("Meal Categories");
    expect(categories).toBeTruthy();
  });
  it("should be categories", () => {
    const wrapper = shallow(<AppNavigator />);

    expect(wrapper.find(<Category />)).not.toBeNull();
  });
  it("should render category", async () => {
    const category = render(<Category />);
    expect(category).not.toBeNull();
  });

  it("testing category", () => {
    const { getAllByText } = render(<AppNavigator />);
    const category = getAllByText("Italian");
    expect(category).toBeTruthy();
  });
});
