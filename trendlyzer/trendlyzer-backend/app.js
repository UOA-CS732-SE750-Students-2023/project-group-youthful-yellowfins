require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const TrendsRouter = require("./app/routes/TrendsRoutes");
const ChatgptRoutes = require('./app/routes/ChatgptRoutes');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/Trends", TrendsRouter);
app.use("/api/chatgpt", ChatgptRoutes);

 
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
