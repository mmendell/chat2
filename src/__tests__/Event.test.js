// when details collapsed dispolay only th edate, time, event time and location
// when expanded show link  to the google calendar, and the event description

import React from "react";
import { shallow } from "enzyme";
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
  let event, EventWrapper;

  beforeAll(() => {
    event = mockData[0];
    
    EventWrapper = shallow(<Event event={ mockData[0] } />);
  });

  test('render summary of event', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });
  
  test('render summary of mock event properly', () => {
    expect(EventWrapper.find('.information')).toHaveLength(1);
  });

  test('render show details button properly', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('default should have no event details rendered', () => {
    expect(EventWrapper.find('.details')).toHaveLength(0);
  });

  test('render show details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('render details when show details button is clicked', () => {
    EventWrapper.find('.show-details').at(0).simulate('click');
    expect(EventWrapper.state("detailsVisible")).toBe(true);
  });

  test('render title, link, summary when showdetails clicked', () => {
    EventWrapper.setState({ detailsVisible: true });
    expect(EventWrapper.find('.details')).toHaveLength(1);
    expect(EventWrapper.find('.details-title')).toHaveLength(1);
    expect(EventWrapper.find('.details-link')).toHaveLength(1);
  });

  test('render hide details button when state of showdetails is true', () =>{
    EventWrapper.setState({ detailsVisible: true });
    expect(EventWrapper.find('.hide-details')).toHaveLength(1);
  });

  test('switch state of details visible after buttoon click thereby hiding the details once more', () => {
    EventWrapper.setState({ detailsVisible: true });
    EventWrapper.find('.hide-details').at(0).simulate('click');
    expect(EventWrapper.find('.details')).toHaveLength(0);
  });
});