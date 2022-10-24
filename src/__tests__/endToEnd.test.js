import puppeteer from "puppeteer";
describe("show/hide event details", () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);

    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ["--disable-extensions"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
  });

  afterAll(() => {
    browser.close();
  });

  test("an event element is collapesd by default", async () => {
    await page.waitForSelector(".event");

    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });

  test("user can ecpand an event to see its details", async () => {
    await page.waitForSelector(".event");

    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeDefined();
  });

  test("user can collapse an event to hide its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });
});
