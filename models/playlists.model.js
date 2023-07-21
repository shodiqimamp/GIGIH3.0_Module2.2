let playlists = [
  {
    id: 1,
    title: "Kalih Welasku",
    artist: "Denny Caknan",
    url: "https://open.spotify.com/intl-id/track/4JRp8Wma0HjHvkHx2Ctl2d",
    img: "https://i.scdn.co/image/ab67616d0000b2734262caca007515f36f79fd04",
    total_played: 0,
  },
  {
    id: 2,
    title: "Monokrom",
    artist: "Tulus",
    url: "https://open.spotify.com/intl-id/track/4GfK1qOF3uBWidbPlTCQRL",
    img: "https://suarausu.or.id/wp-content/uploads/2022/02/Album-Monokrom.jpg",
    total_played: 0,
  },
  {
    id: 3,
    title: "Locked Out Of Heaeven",
    artist: "Bruno Mars",
    url: "https://open.spotify.com/intl-id/track/3w3y8KPTfNeOKPiqUTakBh",
    img: "https://i1.sndcdn.com/artworks-000042824893-xcujcq-t500x500.jpg",
    total_played: 0,
  },
];

const addSongToPlaylist = (title, artist, url, img) => {
  let index = Math.max(...playlists.map((item) => item.id));

  playlists.push({
    id: index + 1,
    title,
    artist,
    url,
    img,
    total_played: 0,
  });
};

const getPlaylist = () => {
  return playlists;
};

const sortMostPlayed = () => {
  return [...playlists].sort((a, b) => {
    return b.total_played - a.total_played;
  });
};

module.exports = {
  getPlaylist,
  sortMostPlayed,
  addSongToPlaylist,
};
