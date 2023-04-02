const googleTrends = require("google-trends-api");

// function for searching top 13 articles for given geography and given category (coudl be b-> business, e-> economics etc, 'all'-> all)
async function realTimeTrends(){
    const data = await googleTrends.realTimeTrends({
        geo: "US",
        category: "all"
    });
    console.log(data)

}

// Search top 20 trending search keywords in past 24 hrs - segregation by date, adds 7 articles hyperlinks per trending keyword
async function dailyTrends(){
    const data = await googleTrends.dailyTrends({
        trendDate: new Date('2023-03-14'),
        geo: "IN"
    });

    console.log(data);
}

// gives list of places/countries (based on input) where popularity of keyword - Doubt - ordering how?
async function interestByRegion(){
    const data = await googleTrends.interestByRegion(
        {keyword: 'CHRIS HIPKINS', 
        startTime: new Date('2023-03-15'),
        endTime: new Date('2022-03-15'), 
        resolution: 'CITY'
    });

    console.log(data);
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

relatedQueries();
 