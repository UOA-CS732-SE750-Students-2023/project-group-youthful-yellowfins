const express = require("express");
const app = express();
var cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose");
const TrendsRouter = require("./app/routes/TrendsRoutes");
const SentimentRouter = require("./app/routes/SentimentRoutes");
const authMiddleware = require("./app/Middleware/AuthenticationService");

//middleware
/** CORS setting with OPTIONS pre-flight handling */
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Access-Control-Allow-Headers, Content-Type, Authorization, Origin, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true)
  next();
});
app.use(cors({origin: ['http://localhost:3000', 'http://127.0.0.1:3000']}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", authMiddleware);
app.use("/api/Trends", TrendsRouter);
app.use("/api/Sentiment", SentimentRouter);

//configure mongoose
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/CRUD",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Connected to MongoDB");
//     }
//   }
// );

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

module.exports = app;
