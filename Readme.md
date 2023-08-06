**Overview**

Today's generation lives in a world of trends. Does everyone want to know what is trending? Why is it
trending? and what do people feel about it? These questions not only satisfy the curiosity of every 
other social person but also getting answers to this can help market researchers grow their business 
exponentially. Trends can help enterprises by letting them know what interests different people across 
the globe, build new or improve existing products around Entertainment, E-commerce, and 
Healthcare and plan out marketing strategies.
To dive deeper into analyzing the statistics and sentiments behind these trends, we created a web 
application called Trendlyzer which would focus on helping the users to understand the market and 
grow their business primarily. This application is a user-friendly website that will take trending 
topics across the globe and provide data analysis and sentiment analysis over them.

**Features**

**Trends Module**

  1.	**Daily Trends**
    a.	Daily trends would list trending topics.
    b.	View this feature on the dashboard page.
    c.	You can filter the trends by country and date.
  2.	**Real-time Trends**
    a.	Real-time trends would provide a list of trending topics on the current date.
    b.	View this feature on the dashboard page in the real-time tab.
    c.	You can filter the trends by country and category.
  3.	**Trends by region**
    a.	Region-wise trends would summarise the trending popularity in different countries based on the keyword provided.
    b.	View this feature on the Trend by Region page.
    c.	You can filter the trends by country and date.
  4.	**Understand Trend Background and Trend Reasons**
    a.	In this feature, ChatGPT will explain why this trend is trending and some background information about it. 
    b.	You can find this feature inside the details page of the trend.
  5.	**Related Tweets**
    a.	This feature would provide you with all the related tweets regarding the trend.
    b.	You can find this feature inside the details page of the trend.
  6.	**Related Articles**
    a.	This feature would provide you with all the related articles regarding the trend.
    b.	You can find this feature inside the details page of the trend.

**Sentiment Module**
  1.	**Sentiment Module**
    a.	Sentiment feature would provide sentiment analysis on the selected trend or entered keyword.
    b.	You can use this feature by using the analyse sentiment section or by going inside the trend details page.
    
    
**How to run the application**

Clone the repository 
1.	Install the node module by using the command NPM Install in the Trendlyzer-Frontend folder and Trendlyzer-Backend folder
2.	Run the frontend project using the command **npm start**
3.	Run the backend project using the command **node app.js**
4.	Start the frontend react project on port 3001 and start the backend project on port 3000.
5.	Download the credentials given to you and keep it in the trendlyzer-backend folder as mentioned below.
![image](https://github.com/UOA-CS732-SE750-Students-2023/project-group-youthful-yellowfins/assets/30353201/62660bbd-cfbe-449e-af36-e548440728c1)
6.	If you are using Mac then please make sure the downloaded environment file has .env file as an extension type.
7.	Run the command in trendlyzer-backend on your terminal in the folder to setup Google environment variable using below command
 **set GOOGLE_APPLICATION_CREDENTIALS=./secret.json**
 8. To test run the frontend and backend project, please input the command **npm test** in the trendlyzer-frontend and trendlyzer-backend folder.
