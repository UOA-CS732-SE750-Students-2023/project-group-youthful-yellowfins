const express = require("express");
const app = express();
var cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose");
const TrendsRouter = require("./app/routes/TrendsRoutes");


//middleware
app.use(cors({origin: ['http://localhost:3000', 'http://127.0.0.1:3000']}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/Trends", TrendsRouter);
 
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
