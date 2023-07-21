const playlistService = require("../services/playlist.service");

const getPlaylist = () => {
  return playlistService.getPlaylist();
};

const getPlaylistByMostPlayed = () => {
  return playlistService.getPlaylistByMostPlayed();
};

module.exports = {
  getPlaylist,
  getPlaylistByMostPlayed,
};
