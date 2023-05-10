const BlogModel = require("../models/Trends");
const googleTrends = require("google-trends-api");
const axios = require('axios');
const URLs = require("../helper/URLs");
var redisClient = require('../models/redisClient');
const unsupportedCountries = ['Barbados', 'Réunion', 'Suriname', 'Namibia','Guinea','Vanuatu', 'Samoa', 'Andorra', 'Azerbaijan', 'Maldives', 'French Polynesia', 'Saint Lucia', 'Panama', 'Timor-Leste', 'North Macedonia', 'Estonia', 'Bahamas', 'Uruguay', 
'Åland Islands', 'Comoros', 'Cook Islands', 'Costa Rica', 'Togo', 'São Tomé and Príncipe', 'Nepal', 'Cuba', 'North Korea', 'French Guiana', 'Moldova', 'Zambia', 'Dominica', 'Marshall Islands', 'Tonga', 'Cape Verde', 'Kiribati', 'Ivory Coast', 'Martinique',
 'Pakistan', 'Djibouti', 'Turks and Caicos Islands', 'Micronesia', 'Slovenia', 'Kyrgyzstan', 'Caribbean Netherlands', 'French Southern and Antarctic Lands', 'Saint Barthélemy', 'Kuwait', 'Seychelles', 'United States Virgin Islands', 'Fiji', 'Yemen', 'British Virgin Islands', 
 'Bouvet Island', 'Central African Republic', 'Curaçao', 'Madagascar', 'Latvia', 'Zimbabwe', 'Antarctica', 'Guernsey', 'Gabon', 'BD', 'Montserrat', 'Jordan', 'Mozambique', 'Eritrea', 'Isle of Man', 'Afghanistan', 'United Arab Emirates', 'Malawi', 'Belarus', 'Montenegro', 
 'Bosnia and Herzegovina', 'Eswatini', 'Lithuania', 'Turkmenistan', 'Ethiopia', 'Anguilla', 'American Samoa', 'Chad','Guadeloupe','San Marino', 'Haiti', 'Botswana','Guyana','New Caledonia','Saint Martin','Mauritius','Gibraltar','Saint Kitts and Nevis','Iceland', 'Svalbard and Jan Mayen',
 'United States Minor Outlying Islands','Kazakhstan','China','Macau','Armenia','Bolivia','Sudan','Wallis and Futuna','Burundi','Lesotho','Bermuda','Guatemala','Uzbekistan','Cayman Islands','Senegal','Gambia','Liechtenstein','Pitcairn Islands','Tuvalu','Equatorial Guinea','Bhutan','Aruba',
 'Paraguay','Grenada','Papua New Guinea','Jamaica','Republic of the Congo','Mauritania','Western Sahara','Burkina Faso','DR Congo','Benin','Uganda','Mongolia','Laos','Algeria','Brunei','Sri Lanka','Dominican Republic','Luxembourg','Georgia','Slovakia','British Indian Ocean Territory',
 'Morocco','Saint Pierre and Miquelon','Greenland','Nicaragua','Qatar','Syria','Belize','Falkland Islands','Venezuela','Bahrain','Cocos (Keeling) Islands','Northern Mariana Islands','Cameroon','Cyprus','Angola','Tunisia','Monaco','Rwanda','Trinidad and Tobago','Malta', 'Mayotte', 
 'Antigua and Barbuda','Tokelau','Niger','Albania','Somalia','Liberia', 'Myanmar','Tanzania','Iraq','South Georgia','Saint Vincent and the Grenadines','Libya','Sierra Leone','Sint Maarten','Serbia','Heard Island and McDonald Islands','Ghana','South Sudan','Faroe Islands','Guinea-Bissau',
 'Palau','Bulgaria','Nauru', 'Cambodia','Jersey','Palestine','Mali','Iran','Niue','Tajikistan', 'Kosovo','Saint Helena, Ascension and Tristan da Cunha','Norfolk Island','Oman','El Salvador','Lebanon','Vatican City','Ecuador','Guam','Croatia','Solomon Islands','Honduras','Christmas Island',
 'Puerto Rico'];


async function getRealTimeTrends(req) {
  let response = null;
    let data = await googleTrends.realTimeTrends({
        geo: req.geocode,
        category: "all"
    });
    if(data){
       try {
        response =  JSON.parse(data);
        return translateRealTimeTrendsResponse(response)
      } catch (e) {
        response = null;
      }
    } else {
      return null;
    }

  }

// Search top 20 trending search keywords in past 24 hrs - segregation by date, adds 7 articles hyperlinks per trending keyword
async function getDailyTrends (req)  {
  let response = null;
    let data = await googleTrends.dailyTrends({
        trendDate: new Date(req.date),
        geo: req.geocode
    });
    if(data){
      try {
        response =  JSON.parse(data);
        response = translateTrendsByDateResponse(response);
      } catch (e) {
        response = null;
      }
    }
    return response;
}

// gives list of places/countries (based on input) where popularity of keyword - Doubt - ordering how?
async function getTrendsByRegion(req) {
  let response = null;
  try {
    let startTime = new Date('2004-04-04');
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
      if(data) {
        response =  JSON.parse(data);
        response = translateTrendsByRegionResponse(response);
      }
    }
    catch (error) {
      response = null;
    }
    return response;
}

// related queries - start and end date - default start - some date in 2004 (ranked List), just queries, no subsequent articles
async function relatedQueries(){
    const data = await googleTrends.relatedQueries({
        keyword: "COVID",
        geo: "NZ"
    });

}

// just gives related topics - no further hyperlinks - title, topic segregation - potential use if use with dailyTrends api (but user has to mention country)
async function autoComplete(){
    const data = await googleTrends.autoComplete({
        keyword: "DONALD "
    });

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
      if(element.articles?.length){
        element.articles.forEach(article => {
          article.articleTitle = article.articleTitle.replace(/(#39|&#39|&amp)/g, ' ');
        });
      }
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
          if(item.articles?.length){
            item.articles.forEach(article => {
              article.title = article.title.replace(/(#39|&#39|&amp)/g, ' ');
            });
          }
          const model = {
            title : item.title?.query,
            trafficCount : item?.formattedTraffic,
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



async function fetchCountryCodes() {
  try {
    const cachedCountryResults = await redisClient.get('masterCountries');
    if(cachedCountryResults){
      const countryCodes = JSON.parse(cachedCountryResults);
      return countryCodes;
    } else {
        const response = await axios.get(URLs.COUNTRY_API_URL);
          if (response?.data) {
              const countries = response.data;
              const countryCodes = countries.map(country => {
                
                  return {
                      name: country.name.common,
                      cca2: country.cca2,
                  };
              });
                const filteredCountryCodes = countryCodes.filter(country => !unsupportedCountries.includes(country.name));
              await redisClient.set('masterCountries', JSON.stringify(filteredCountryCodes));
                return filteredCountryCodes;
          } else {
              console.log("The server returned no data or the data is undefined.");
              return;
          }
    }
  } catch (error) {
      console.log("Error in calling the Country Codes API");
      console.dir(error);
  }
};

module.exports = {
  getRealTimeTrends,
  getDailyTrends,
  getTrendsByRegion,
  fetchCountryCodes
};

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
