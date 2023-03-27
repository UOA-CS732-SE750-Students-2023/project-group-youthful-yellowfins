const express = require("express");
const router = express.Router();
const trendsController = require("../controllers/TrendsController");


router.get("/getTweets/:keyword", trendsController.getTweets);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
 
module.exports = router;
