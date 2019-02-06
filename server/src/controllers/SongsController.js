const { Song } = require("../models");

module.exports = {
  async getSongs(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      });
      if (req.query.s) {
        res.send(songs.filter(song => song.title.includes(req.query.s)));
      } else {
        res.send(songs);
      }
    } catch (err) {
      res.status(500).send({
        error: "While Getting Songs Something went wrong."
      });
    }
  },
  async getSong(req, res) {
    try {
      const song = await Song.findOne({
        where: {
          id: req.params.id
        }
      });
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: "While Getting Song Something went wrong."
      });
    }
  },
  async setSong(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "While Creating Song Something went wrong."
      });
    }
  },
  async updateSong(req, res) {
    try {
      const song = await Song.create(req.body, {
        where: {
          id: res.params.id
        }
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "While Updating Song Something went wrong."
      });
    }
  }
};
