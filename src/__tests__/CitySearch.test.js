import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";
import mockData from '../mock-data';
import { extractLocations } from '../api'; 

describe("<CitySearch /> componenet", () => {
  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData)
    CitySearchWrapper = shallow(<CitySearch />);
  });

  test("render city input", () => {
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });

  test("render  a lsit of suggestions", () => {
    expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
  });

  test("renders text input properly", () => {
    const query = CitySearchWrapper.state("query");
    expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  });

  test("change state when text input changes", () => {
    CitySearchWrapper.setState({
      query: "boston",
    });
    const eventObject = { target: { value: "new york" } };
    CitySearchWrapper.find(".city").simulate("change", eventObject);
    expect(CitySearchWrapper.state("query")).toBe("boston");
  });

  test('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations});
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  test('suggestion list match the query when changed', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: 'boston'}
    });
    const query = CitySearchWrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOF(query.toUpperCase()) > -1;
    });
    expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
  })

  test('selecting a suggestion should change the query state', () => {
    CitySearchWrapper.setState({
      query: "boston"
    });
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  });
});
