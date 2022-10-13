import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";

describe("<CitySearch /> componenet", () => {
  test("render city input", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });

  test("render  a lsit of suggestions", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
  });
});
