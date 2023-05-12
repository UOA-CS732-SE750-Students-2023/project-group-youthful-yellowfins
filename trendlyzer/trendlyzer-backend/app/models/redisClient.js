
/**
 * Author:  Shubham Gujare, Ashish Agnihotri
 * Created: 25.04.2023
 * Purpose: This file has the code to connect to cloud based redis client
 **/


var redis = require('redis');

(async () => {
    redisClient = redis.createClient({
        password: 'XuHv2HtGschy0AvdVIckLsf58ECwAOSe',
        socket: {
            host: 'redis-18049.c90.us-east-1-3.ec2.cloud.redislabs.com',
            port: 18049
        }
    });
    redisClient.on('error', err => console.log('Redis Client Error', err));

    await redisClient.connect();

    redisClient.on("connect", function () {
        console.log(`connected to redis`);
    });
})();

module.exports = redisClient;