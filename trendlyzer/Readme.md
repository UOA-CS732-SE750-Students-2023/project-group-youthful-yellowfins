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


**Minutes of Meeting**

6March2023 | 10am- 12:30pm	| In-Person
- Discussion regarding project topics and research
- Project Topic discussed- sentimental analysis for trends, Data analysis on bush fires & earthquake etc, Health predictor app.
- Research done on third party apis like sentimental analysis, web scraping etc for an hour individually on all the topic
- Sentimental analysis topic selected and sub task for research got divided
- Sentiment Analysis API - Shubham (https://www.edenai.co/post/how-to-use-sentiment-analysis-api-with-javascript-in-5-minutes)
- ChatGPT API - Ankita M
- Trends- Ashish, Ankita D
- Discussion on Technologies to use and weekly sprint.
- Weekly meeting time to be decided
- Individual Progress
    - Ashish 
        - Researched on sentiment analysis API.
        - Checked google trends API.
        - Worked on Lab Modules 
    - Ankita D
        - Searched for Machine Learning tools or data analysis for health predictor
        - Research for sentiment analysis API, Eden AI (https://www.edenai.co/)
        - Lab Modules - Vite 
    - Ankita M, Shubham
        - Researched on sentiment analysis API.
    - Ughanthi
        - Learning Git command, Javascript

11March2023 | 11am- 12:00pm | Zoom
- Discussed research on chatgpt, sentimental analysis and trends in first 30 mins.
- Trending to be wrapped by Sunday (Ashish and Ankita D)
- Project Proposal 
    - Shubham - intro 
    - Ankita M -  Project Management and strategies
    - Monday and Friday regular meetings 
    - Ughanthi 
      - Related work and sample for project proposal 
      - Learning JS and github 

15March2023 | 10:30am- 11:00pm | Zoom
- Feature Discussion
- Landing Page (About Us) 
- showcasing CSS skills
- Sign Up and Sign In Button
- Auth0, Firebase
- Password Management
- Trends Dashboard
- Filters: Region Countrywise and Time week, months
- Download Report
- Nice to have feature: Free and premium accounts save it on premium accounts
- Trending Details Page (Uses Google Trends)
- Sections on frontend (Menu)
- Why using Chapgpt
- Tweets on recent based on word, articles
- Sentimental Analysis
- Word wise chart based from positive to negative scale
- Nice to have feature: Can be split on free and premium.

23March2023 | 4pm- 5:30pm | In-Person
- Discussed layout for UI - Ankita, Shubahm, Ashish
- Wireframe task - Ankita D
- Explore Chatgpt API complete - Ankita
- Progress on Landing page UI (Ughanthi and Ankita D)

10April2023 | 11am-12pm | Zoom
- APIs (Shubham and Ashish)
- Get daily trends api
- Get real-time trends api
- Chatgpt api
- Country code api
- Progress on landing page UI (Ughanthi and Ankita D)
- Authentication using firebase (Ughanthi)
- Progress on the application UI (Ankita)

17April2023 | 9pm-10pm | Zoom
- Progress on the application UI (Ankita)
- Working on Landing page (Ughanthi)
- Integration with backend 
- Low level wireframe done (Ankita D)
- APIs in progress (Shubham and Ashish)

22April2023 | 9pm-10pm | Zoom
- Backend APIs are complete (Shubham and Ashish)
- UI Progress (Ankita)
- Dashboard complete
- Explore trends complete
- Other UI pages in progress (Ankita)

28April2023 | 9pm-10pm | Zoom
- UI progress (Ankita)
- Analyze sentiment complete
- Trends Details in progress
- Backend unit testing (Ashish & Shubham)

8May2023 | 2pm-5pm | In-Person
Sat together, discussed and did testing (Ashish, Ankita, Ankita, Shubham, Ughanthi)

