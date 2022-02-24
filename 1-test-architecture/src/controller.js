'use strict';
const Service = require('./service');

const Controller = {
  async getPosts(req, res, next) {
    try {
      const posts = await Service.list();
      return res.status(201).json(posts);
    } catch (error) {
      return next(error);
    }
  },
  async getOnePost(req, res, next) {
    try {
      const post = await Service.getPost();
      return res.status(201).json(post);
    } catch (error) {
      return next(error);
    }
  },

 

  async AddPost(req, res, next) {
    try {
     
      const post = await Service.addPost(req.body);
      return res.status(201).json(post);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = Controller;
