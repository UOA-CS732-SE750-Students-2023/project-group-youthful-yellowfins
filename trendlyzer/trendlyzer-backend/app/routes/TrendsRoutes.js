const express = require("express");
const {
  getAllBlogs,
  // createBlog,
  // getBlogById,
  // updateBlog,
  // deleteBlog,
} = require("../controllers/TrendsController");

const router = express.Router();

router.route("/").get(getAllBlogs);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
 
module.exports = router;
