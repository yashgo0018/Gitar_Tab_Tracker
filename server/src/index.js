const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { port } = require("./config/config");
const { sequelize } = require("./models");
const RoutesGenerator = require("./routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combine"));

app.use(cors());

//Generate Routes
RoutesGenerator(app);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => console.log(`Server Started on port ${port}`));
  })
  .catch(err => console.log(err));
