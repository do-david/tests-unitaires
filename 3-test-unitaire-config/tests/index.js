const express = require("express")
const mongoose = require("mongoose")
const createServer = require("./server") // new
const dbConfig = require('../configs/db.config');
const uri = dbConfig.uri;

mongoose
	.connect(uri, { useNewUrlParser: true })
	.then(() => {
		const app = createServer() // new
		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})