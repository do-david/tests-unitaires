const express = require("express")
const routes = require("../src/routes")

function createServer() {
	const app = express()
	app.use(express.json())
	app.use("/api/test/", routes)
	return app
}

module.exports = createServer