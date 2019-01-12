const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(morgan("combine"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8081);
