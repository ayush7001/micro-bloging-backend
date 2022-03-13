const Blogs = require("../lib/models/blogs");

class UserHelper {

    addBlogs(noteBody) {

        return new Promise(async (resolve, reject) => {
            try {
                
                const newNote = new Blogs({
                    blogTitle: noteBody.blogTitle,
                    blogContent: noteBody.blogContent,
                    authorEmail: noteBody.authorEmail,
                    authorName: noteBody.authorName,
                    createdAt: noteBody.createdAt
                });

                const createdNote = await newNote.save();
                resolve(createdNote);
            } catch (error) {
                reject(error);
            }
        })
    }

    updateBlog(noteBody, id) {
        return new Promise(async (resolve, reject) => {
            try {
               
                let blogDetail = await this.getBlog(id)
               const note = {blogTitle: noteBody.blogTitle,
                blogContent: noteBody.blogContent, likes: blogDetail.likes, authorName: blogDetail.authorName, authorEmail: blogDetail.authorEmail}
                console.log(note)
                const updatedNote = await Blogs.updateOne({_id: id}, note);
                if(updatedNote.n > 0) {
                    resolve(true);
                } else {
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    updateBlogLikes(noteBody, id) {
        return new Promise(async (resolve, reject) => {
            try {
                let blogDetail = await this.getBlog(id)
                const note = {blogTitle: blogDetail.blogTitle,
                    blogContent: blogDetail.blogContent, likes: noteBody.likes, authorName: blogDetail.authorName, authorEmail: blogDetail.authorEmail}
                const updatedNote = await Blogs.updateOne({_id: id}, note);
                if(updatedNote.n > 0) {
                    resolve(true);
                } else {
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    BlogsList() {
        return new Promise(async (resolve, reject) => {
            try {
                const list = await Blogs.find({})
                if (list.length > 0) {
                    resolve(list)
                } else {
                    resolve([])
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    deleteBlog(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const list = await Blogs.deleteOne({_id: id});
                if (list.deletedCount > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    getBlog(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const list = await Blogs.findOne({_id: id});
                if (list) {
                    resolve(list);
                } else {
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        })
    }
}

module.exports = new UserHelper();