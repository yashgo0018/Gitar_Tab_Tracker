module.exports = app => {
  app.post("/register", (req, res) => {
    res.send({
      msg: "hello"
    });
  });
};
