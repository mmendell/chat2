import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import puppeteer  from "puppeteer";
import App from "../App";

const feature = loadFeature("./src/features/showHideEventDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  test("elements are collapsed by default", ({given, when , then }) => {
    given("event element on page is collapsed", () => {});

    when("user opens up app", () => {
      AppWrapper = mount(<App />);
    });

    then("event element is collapsed by default", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event details")).toHaveLength(0);
    });
  });

  test("User expands element to view details", ({ given, when, then }) => {
    given("event list has rendered into the app", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks an event details button", () => {
      AppWrapper.update();
      AppWrapper.find(".event .show-details").at(0).simulate("click");
    });

    then("event element expands and shows all event details", () => {
      expect(AppWrapper.find(".event .details")).toHaveLength(1);
    });
  });

  test("user can collapse event details", ({ given, when, then }) => {
    given("event element is showing specific event details", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    when("the user click hide details", () => {
      AppWrapper.update();
      AppWrapper.find(".event .hide-details").at(0).simulate("click");
    });

    then("event details become hidden", () => {
      expect(AppWrapper.find(".event")).toHaveLength(0);
    });
  });
});
