const BlogModel = require("../models/Trends");
const googleTrends = require("google-trends-api");

exports.TrendsService = async () => {

  return null;
};




// function for searching top 13 articles for given geography and given category (coudl be b-> business, e-> economics etc, 'all'-> all)

exports.getRealTimeTrends = async (req) => {
  let response = null;
    let data = await googleTrends.realTimeTrends({
        geo: req.geocode,
        category: "all"
    });
    if(data){
      response =  JSON.parse(data);
      return translateRealTimeTrendsResponse(response)
    } else {
      return null;
    }

  }

// Search top 20 trending search keywords in past 24 hrs - segregation by date, adds 7 articles hyperlinks per trending keyword
exports.getDailyTrends = async (req) => {
  let response = null;
    let data = await googleTrends.dailyTrends({
        trendDate: new Date(req.date),
        geo: req.geocode
    });
    if(data){
      response =  JSON.parse(data);
      response = translateTrendsByDateResponse(response);
    }
    return response;
}

// gives list of places/countries (based on input) where popularity of keyword - Doubt - ordering how?
exports.getTrendsByRegion = async (req) => {
  let response = null;
  let startTime = new Date('07-04-2004');
  let endTime =  new Date().toISOString();
  endTime = new Date(endTime);
  if(req.startTime){
    startTime = new Date(req.startTime)
  } 
  if(req.endTime) {
    endTime = new Date(req.endTime)
  }
  let data = await googleTrends.interestByRegion(
    {
      keyword : req.keyword,
      geo :  req.geocode,
      startTime: startTime,
      endTime: endTime
    });
    if(data){
      
      response =  JSON.parse(data);
      console.log(response);
      response = translateTrendsByRegionResponse(response);
    }
    return response;
}

// related queries - start and end date - default start - some date in 2004 (ranked List), just queries, no subsequent articles
async function relatedQueries(){
    const data = await googleTrends.relatedQueries({
        keyword: "COVID",
        geo: "NZ"
    });

    console.log(data);
}

// just gives related topics - no further hyperlinks - title, topic segregation - potential use if use with dailyTrends api (but user has to mention country)
async function autoComplete(){
    const data = await googleTrends.autoComplete({
        keyword: "DONALD "
    });

    console.log(data);
}


function translateTrendsByRegionResponse(response){
  let trendingItemsList = [];
  if(response?.default?.geoMapData?.length){
    let trendingModel = {}
    for (const element of response?.default?.geoMapData) {
        trendingModel = {
          geoCode : element?.geoCode,
          geoName : element?.geoName,
          value : element?.value[0],
        }
      trendingItemsList.push(trendingModel)
    }
  }
  return trendingItemsList;
}

function translateRealTimeTrendsResponse(response){
  let trendingItemsList = [];
  if(response?.storySummaries?.trendingStories.length){
    let trendingModel = {}
    for (const element of response?.storySummaries?.trendingStories) {
        trendingModel = {
          title : element?.title,
          entityNames : element?.entityNames,
          image : element?.image,
          articles : element?.articles
        }
      trendingItemsList.push(trendingModel)
    }
  }
  return trendingItemsList;
}


function translateTrendsByDateResponse(response){
  let trendingItemsList = [];
  if(response?.default?.trendingSearchesDays?.length){
    let trendingModel = {}
    for (const element of response.default.trendingSearchesDays) {
      let trendingStory = [];
      if(element.trendingSearches?.length){
        for (const item of element.trendingSearches) {
           const model = {
            title : item.title?.query,
            trafficCount : item.title,
            image : item.image,
            articles : item.articles
          }
          trendingStory.push(model);
        }
      }
         trendingModel = {
          date : element.date,
          formattedDate : element?.formattedDate,
          trendingStories : trendingStory
        }
      trendingItemsList.push(trendingModel)
    }
  }
  return trendingItemsList;
}


// interestByRegion();
 

// exports.createBlog = async (blog) => {
//   return await BlogModel.create(blog);
// };
// exports.getBlogById = async (id) => {
//   return await BlogModel.findById(id);
// };
 
// exports.updateBlog = async (id, blog) => {
//   return await BlogModel.findByIdAndUpdate(id, blog);
// };

// exports.deleteBlog = async (id) => {
//   return await BlogModel.findByIdAndDelete(id);
// };
