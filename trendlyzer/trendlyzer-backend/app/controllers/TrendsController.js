
/**
 * Author:  Shubham Gujare, Ashish Agnihotri
 * Created: 10.04.2023
 * Purpose: This file has the code related to trends module APIs
 **/


const TrendsService = require("../services/TrendsService");
const Constants = require("../helper/Constants");
const chatgptService = require('../services/ChatgptService');
var ApiException = require('././../models/Error');

// Fetches autocomplete suggestions for a given keyword
exports.getAutocomplete = async(req, res) => {
  const query = req.query.keyword;
    
    const response = await TrendsService.getAutocomplete(query);
    res.json({   status: true, message : 'success', result : response});
}

// Fetches the country codes (code conversion used in frontend)
exports.getCountryCodes = async (req, res) => {
  
  try {
    const countryCodes = await TrendsService.fetchCountryCodes();
    if(!countryCodes){
      throw new ApiException(Constants.INTERNAL_SERVER_ERROR_CODE, 
        Constants.BAD_REQUEST_ERROR_CODE);   
    }
    res.json({   status: true, message : 'success', result : countryCodes});
  } catch (err) {
    if(err instanceof ApiException){
      res.status(err.statusCode).json({ message: err.message , status : false});
    } else {
      res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message , status : false});
    }
};
}

// Sends a message to the ChatGPT API and returns its response
exports.sendMessage = async (req, res) => {
  
  try {
    if (!req.query?.message) {
      throw new ApiException(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE, 
      Constants.BAD_REQUEST_ERROR_CODE);
    }
    const response = await chatgptService.generateResponse(req.query?.message);
    res.json({   status: true, message : 'success', result : response});

} catch (err) {
  if(err instanceof ApiException){
    res.status(err.statusCode).json({ message: err.message , status : false});
  } else {
    res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message , status : false});
  }
}
};
 
// Fetches trends by date and geocode
  exports.getTrendsByDate = async (req, res) => {
    try {
      let response = null;
      if(!req.query?.geocode){
        throw new ApiException(Constants.GEOCODE_MISSING_ERROR_MESSAGE, Constants.BAD_REQUEST_ERROR_CODE);   
      }
      if(req.query?.date){
         response = await TrendsService.getDailyTrends(req.query);
      } else {
         response = await TrendsService.getRealTimeTrends(req.query);
      }
      if(!response){
        throw new ApiException(Constants.SOMETHING_WENT_WRONG_W_THIRD_PARTY, Constants.THIRD_PARTY_SERVICE_ERROR_CODE);   
      }
      // response null code to be added
      res.json({  status: true, result : response , message : 'success'});
    } catch (err) {
      if(err instanceof ApiException){
        res.status(err.statusCode).json({ message: err.message , status : false});
      } else {
        res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message , status : false});
      }
    }
  };

// Fetches trends by region for a given keyword
  exports.getTrendByRegion = async (req, res) => {
    try {
      let response = null;
      if(!req.body?.keyword){
        throw new ApiException(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE, 
          Constants.BAD_REQUEST_ERROR_CODE);   
      }
      response = await TrendsService.getTrendsByRegion(req.body);
      if(!response){
        throw new ApiException(Constants.SOMETHING_WENT_WRONG_W_THIRD_PARTY, Constants.THIRD_PARTY_SERVICE_ERROR_CODE);   
      }
      res.json({  status: true, message: 'success', result : response });
    } catch (err) {
      if(err instanceof ApiException){
        res.status(err.statusCode).json({ message: err.message , status : false});
      } else {
        res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message , status : false});
      }
    }
  };
