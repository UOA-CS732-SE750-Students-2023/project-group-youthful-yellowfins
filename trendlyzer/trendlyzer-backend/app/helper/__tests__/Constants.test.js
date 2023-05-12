/**
 * Author: Ashish Agnihotri
 * Created: 11.06.2023
 * Purpose: Unit test cases 
 **/

const constants = require("../Constants");

describe("Constants", () => {
  it("constant values", () => {
    const expectedConstants = {
      BAD_REQUEST_ERROR_CODE: 400,
      INTERNAL_SERVER_ERROR_CODE: 500,
      THIRD_PARTY_SERVICE_ERROR_CODE: 201,
      SUCCESS_MESSAGE: "Success",
      GEOCODE_MISSING_ERROR_MESSAGE: "Geocode is missing",
      SEARCH_KEYWORD_MISSING_ERROR_MESSAGE: "Search Keyword is missing",
      SOMETHING_WENT_WRONG: "Something went wrong !",
      SOMETHING_WENT_WRONG_W_THIRD_PARTY:
        "Something went wrong with Third party API, try changing country or date!",
    };

    expect(constants).toEqual(expectedConstants);
  });
});