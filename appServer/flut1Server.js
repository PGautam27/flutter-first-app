const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("../appServer/module/routes/flutRoutes");

app.use("/flut", router);

app.listen(port);
