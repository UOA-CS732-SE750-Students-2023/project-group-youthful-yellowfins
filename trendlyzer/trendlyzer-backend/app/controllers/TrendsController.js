const { response } = require("express");
const TrendsService = require("../services/TrendsService");
const TwitterService = require("../services/TwitterContentService");
const Constants = require("../helper/Constants");
const chatgptService = require('../services/ChatgptService');
const CountryCode = require('../services/CountryCodesService');


exports.getCountryCodes = async (req, res) => {
  
  try {
    const countryCodes = await CountryCode.fetchCountryCodes();
    res.json({   status: true, message : 'success', result : countryCodes});
  } catch (err) {
    res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message , status : false});  }
};

exports.sendMessage = async (req, res) => {
  
  try {
    if (!req.query?.message) {
      throw new MyCustomError(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE, 
      Constants.BAD_REQUEST_ERROR_CODE);
    }
    const response = await chatgptService.generateResponse(req.query?.message);
    res.json({   status: true, message : 'success', result : response});

} catch (err) {
  if(err instanceof MyCustomError){
    res.status(err.statusCode).json({ message: err.message , status : false});
  } else {
    res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message , status : false});
  }
}
};

exports.getTweets = async (req, res) => {
    try {
      console.log(req.params)
      const blogs = await TwitterService.GetTweetsByKeywords(req.params.keyword);
      res.json({  status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
 

  exports.getTrendsByDate = async (req, res) => {
    try {
      let response = null;
      if(!req.query?.geocode){
        throw new MyCustomError(Constants.GEOCODE_MISSING_ERROR_MESSAGE, Constants.BAD_REQUEST_ERROR_CODE);   
      }
      if(req.query?.date){
         response = await TrendsService.getDailyTrends(req.query);
      } else {
         response = await TrendsService.getRealTimeTrends(req.query);
      }
      // response null code to be added
      res.json({  status: true, result : response , message : 'success'});
    } catch (err) {
      if(err instanceof MyCustomError){
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
        throw new MyCustomError(Constants.SEARCH_KEYWORD_MISSING_ERROR_MESSAGE, 
          Constants.BAD_REQUEST_ERROR_CODE);   
      }
      response = await TrendsService.getTrendsByRegion(req.body);
      // response null code to be added
      res.json({  status: true, message: 'success', result : response });
    } catch (err) {
      if(err instanceof MyCustomError){
        res.status(err.statusCode).json({ message: err.message , status : false});
      } else {
        res.status(Constants.INTERNAL_SERVER_ERROR_CODE).json({ message: err.message , status : false});
      }
    }
  };

  class MyCustomError extends Error {
    constructor(msg, statusCode) {
      super(msg);
      this.statusCode = statusCode;
      this.name = MyCustomError.name;
    }
  }

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
