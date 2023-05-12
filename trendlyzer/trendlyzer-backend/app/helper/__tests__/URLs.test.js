/**
 * Author: Ashish Agnihotri
 * Created: 11.06.2023
 * Purpose: Unit test cases 
 **/

const urls = require("../URLs");

describe("Urls", () => {
  it("URL values", () => {
    const expectedUrls = {
      GET_TWEETS_BY_KEYWORD: "/search/tweets",
      CHATGPT_API_URL: "https://api.openai.com/v1/engines/text-davinci-003/completions",
      COUNTRY_API_URL: "https://restcountries.com/v3.1/all",
    };

    expect(urls).toEqual(expectedUrls);
  });
});