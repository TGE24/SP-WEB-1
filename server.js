const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });

const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		server.get("properties/:pid", (req, res) => {
			app.render(req, res, "/user", { pid: req.params.pid });
		});

		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(7777, (err) => {
			if (err) throw err;
			console.log("Server started on 3000");
		});
	})

	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
