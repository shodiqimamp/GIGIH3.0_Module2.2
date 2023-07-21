const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlist.controller");
const playlistModel = require("../models/playlists.model");

//untuk playlist normal
router.get("/", (req, res) => {
  try {
    const playlists = playlistController.getPlaylist();
    res.render("index", { playlists });
  } catch (error) {
    res.status(500).send({ error: "server error" });
  }
});

//untuk playlist sorted most played
router.get("/mostPlayed", (req, res) => {
  try {
    const playlist = playlistController.getPlaylistByMostPlayed();
    res.status(200).send(playlist);
  } catch (error) {
    res.status(500).send({ error: "server error" });
  }
});

router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/add", (req, res) => {
  let { title, artist, url, img } = req.body;
  const playlists = playlistModel.getPlaylist();
  if (!title || !artist || !url || !img) {
    return res
      .status(400)
      .json({ error: "Title, Artists, URL, Image are required fields." });
  }
  let index = Math.max(...playlists.map((item) => item.id));

  playlists.push({
    id: index + 1,
    title,
    artist,
    url,
    img,
    total_played: 0,
  });
  res.redirect("/");
});

//untuk play lagu
router.get("/song/:title", (req, res) => {
  let title = req.params.title;
  let playlists = playlistModel
    .getPlaylist()
    .find((playlist) => playlist.title === title);

  if (!playlists) {
    return res.status(404).json({ error: "Song not found in the playlist." });
  }

  playlists.total_played += 1;
  res.render("play", {
    title: playlists.title,
    artist: playlists.artist,
    img: playlists.img,
    total_played: playlists.total_played,
  });
});

module.exports = router;
