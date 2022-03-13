const express = require("express");
const router = express.Router();
const routesValidators = require("../validatiors/route-validators");
const userController = require("../controllers/user");

router.post("/blogs/add", routesValidators.verifyUser, userController.addBlog);
router.put("/blogs/:id", routesValidators.verifyUser, userController.updateBlog);
router.put("/blogs/:id/likes", routesValidators.verifyUser, userController.updateBlogLikes);
router.get("/blogs/:id", userController.getBlog);
router.get("/blogs", userController.listBlogs);
router.delete("/blogs/:id", routesValidators.verifyUser, userController.deleteBlog);
module.exports = router;