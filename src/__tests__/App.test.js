import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from '../EventList';
import CitySearch from  '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from "../api";


describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  })

  test('redner list of events', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  })
  

  test('render CitySearch', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

});

describe('<App /> integration', () => {


  test("spp passes eventes state as a prop to eventlist", () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('app passes "locations" as prop for citysearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  })

  test('get list of events matching the city selected by user', () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations});
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  })

})