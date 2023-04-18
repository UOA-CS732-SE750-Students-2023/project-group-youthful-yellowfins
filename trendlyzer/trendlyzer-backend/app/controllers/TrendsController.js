const TrendsService = require("../services/TrendsService");
const Constants = require("../helper/Constants");
const chatgptService = require('../services/ChatgptService');
var ApiException = require('././../models/Error');


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


  exports.getTrendByRegion = async (req, res) => {
    try {
      let response = null;
      if(!req.body?.keyword){
        throw new ApiException(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE, 
          Constants.BAD_REQUEST_ERROR_CODE);   
      }
      response = await TrendsService.getTrendsByRegion(req.body);
      if(!response){
        throw new ApiException(Constants.INTERNAL_SERVER_ERROR_CODE, 
          Constants.BAD_REQUEST_ERROR_CODE);   
      }
      // response null code to be added
      res.json({  status: true, message: 'success', result : response });
    } catch (err) {
      if(err instanceof ApiException){
        res.status(err.statusCode).json({ message: err.message , status : false});
      } else {
        res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message , status : false});
      }
    }
  };


// exports.createBlog = async (req, res) => {
//   try {
//     const blog = await blogService.createBlog(req.body);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getBlogById = async (req, res) => {
//   try {
//     const blog = await blogService.getBlogById(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateBlog = async (req, res) => {
//   try {
//     const blog = await blogService.updateBlog(req.params.id, req.body);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteBlog = async (req, res) => {
//   try {
//     const blog = await blogService.deleteBlog(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
