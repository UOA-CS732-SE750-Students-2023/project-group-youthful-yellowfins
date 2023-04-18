const axios = require('axios');
const Constants = require("../helper/Constants");

exports.fetchCountryCodes = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');

        if (response?.data) {
            const countries = response.data;
            const countryCodes = countries.map(country => {
                return {
                    name: country.name.common,
                    cca2: country.cca2,
                };
            });

            console.log('Countries and their codes:', countryCodes);
            return countryCodes;
        } else {
            console.log("The server returned no data or the data is undefined.");
            return;
        }
    } catch (error) {
        console.log("Error in calling the Country Codes API");
        console.dir(error);
    }
};