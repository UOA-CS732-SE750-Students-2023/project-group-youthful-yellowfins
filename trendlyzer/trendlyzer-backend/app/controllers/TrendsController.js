const blogService = require("../services/TrendsService");
const TwitterService = require("../services/TwitterContentService");


exports.getTweets = async (req, res) => {
    try {
      console.log(req.params)
      const blogs = await TwitterService.GetTweetsByKeywords(req.params.keyword);
      res.json({  status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
 

  
// exports.createBlog = async (req, res) => {
//   try {
//     const blog = await blogService.createBlog(req.body);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getBlogById = async (req, res) => {
//   try {
//     const blog = await blogService.getBlogById(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateBlog = async (req, res) => {
//   try {
//     const blog = await blogService.updateBlog(req.params.id, req.body);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteBlog = async (req, res) => {
//   try {
//     const blog = await blogService.deleteBlog(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
