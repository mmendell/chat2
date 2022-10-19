import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../numberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render element", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("render input for number of events", () => {
    expect(NumberOfEventsWrapper.find(".event-number-input")).toHaveLength(1);
  });

  test("render default input of event number to 32", () => {
    expect(
      NumberOfEventsWrapper.find(".event-number-input")
      .prop("value")
      ).toBe(32)
  });
});
