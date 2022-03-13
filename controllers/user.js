const jwt = require("jsonwebtoken");
const userHelper = require("../helpers/user");
const responseGenerator = require("../response/response");
const constants = require("../response/constants");
class UserController {

    /**
     * addBlog method is used to add blogs in database with corresponding users
     * @param {*} req 
     * @param {*} res 
     */
    async addBlog (req, res) {
        try {
            const note = await userHelper.addBlogs({blogTitle: req.body.blogTitle, blogContent: req.body.blogContent, authorName: req.body.authorName, authorEmail: req.body.authorEmail, createdAt: Date.now()});
            console.log(note, 'ayush')
            responseGenerator.sendResponse(res, {message: 'Blog is successfully added', note: note });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

    /**
     * updateBlog api is used to update blogs
     * @param {*} req 
     * @param {*} res 
     */
    async updateBlog (req, res) {
        try {
            const note = await userHelper.updateBlog({blogTitle: req.body.blogTitle, blogContent: req.body.blogContent}, req.params.id);
            if (!note) {
                throw new Error("106");
            }
            responseGenerator.sendResponse(res, {message: 'Blog is updatedSuccessfully added', note: note });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

     /**
     * updateBlogLikes api is used to update blogs likes
     * @param {*} req 
     * @param {*} res 
     */
      async updateBlogLikes (req, res) {
        try {
            const note = await userHelper.updateBlogLikes({likes: req.body.likes}, req.params.id);
            if (!note) {
                throw new Error("106");
            }
            responseGenerator.sendResponse(res, {message: 'Blog is updatedSuccessfully added', note: note });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }


    /**
     * listBlogs method is used to list blogs
     * @param {*} req 
     * @param {*} res 
     */
    async listBlogs (req, res) {
        try {
            const list = await userHelper.BlogsList();
            responseGenerator.sendResponse(res, { list: list });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

    /**
     * deleteBlog method is used to delete blog
     * @param {*} req 
     * @param {*} res 
     */
    async deleteBlog (req, res) {
        try {
            const list = await userHelper.deleteBlog(req.params.id);
            if (!list) {
                throw new Error('106');
            }
            responseGenerator.sendResponse(res, { message: 'Blog is deleted successfully' });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

    /**
     * getBlog method is used to get Blog detail
     * @param {*} req 
     * @param {*} res 
     */
     async getBlog (req, res) {
        try {
            const list = await userHelper.getBlog(req.params.id);
            if (!list) {
                throw new Error('106');
            }
            responseGenerator.sendResponse(res, { blog: list });
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }
}

module.exports = new UserController();