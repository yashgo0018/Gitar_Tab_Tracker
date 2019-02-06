const { register, login } = require("./controllers/AuthenticationController");
const {
  getSongs,
  setSong,
  getSong,
  updateSong
} = require("./controllers/SongsController");
const { registerPolicy } = require("./policies/AuthenticationControllerPolicy");
const authCheck = require("./middleware/check-auth");

module.exports = app => {
  app.post("/register", registerPolicy, register);
  app.post("/login", login);
  app.get("/songs", getSongs);
  app.post("/song/add", setSong);
  app.get("/song/:id", getSong);
  app.put("/song/:id", updateSong);
};
