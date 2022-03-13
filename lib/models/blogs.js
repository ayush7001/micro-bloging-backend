const mongoose = require("mongoose");
const Scehma = mongoose.Schema;
const dbClient = require("../database");

const blogModel = new Scehma({
    blogTitle: {
        type: Scehma.Types.String,
        default: '',
        required: true
    },
    blogContent: {
        type: Scehma.Types.String,
        default: '',
        required: true
    },
    authorEmail: {
        type: Scehma.Types.String,
        default: '',
        required: true
    },
    authorName: {
        type: Scehma.Types.String,
        default: '',
        required: true
    },
    likes: {
        type: Scehma.Types.Number,
        default: 0,
        required: true
    },
    createdAt: {
        type: Scehma.Types.Date,
        default: Date.now(),
        required: true
    },
});

const Blog = dbClient.model('Blog', blogModel);
module.exports = Blog;