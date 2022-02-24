'use strict';
const axios = require('axios');
const path = 'https://jsonplaceholder.typicode.com/posts';
const getOnePost = "https://jsonplaceholder.typicode.com/posts/1";
const AddPost = "https://jsonplaceholder.typicode.com/posts";

const Service = {
  async list() {
    try {
      const response = await axios.get(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getPost(){
      try {
        const response = await axios.get(getOnePost);
        return response.data;
      } catch (error) {
        throw error;
      }
  } ,

  async addPost(post){

      try {

        const response = await axios.post(AddPost , post);
        return response.data;
      } catch (error) {
        throw error;
      }
  }
};

module.exports = Service;
