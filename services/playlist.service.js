const playlistModel = require("../models/playlists.model");

const getPlaylist = () => {
  return playlistModel.getPlaylist();
};

const getPlaylistByMostPlayed = () => {
  return playlistModel.sortMostPlayed();
};
const getSongById = (id) => {
  return playlistModel.getSongById(id);
};

const addSong = (title, artist, url) => {
  return playlistModel.addSongToPlaylist(title, artist, url);
};

const playSong = (id) => {
  const index = playlistModel.findIndexInPlaylist(id);
  if (index == -1) {
    return "error";
  }
  return playlistModel.playSong(index);
};

module.exports = {
  getPlaylist,
  getPlaylistByMostPlayed,
  addSong,
  getSongById,
  playSong,
};
