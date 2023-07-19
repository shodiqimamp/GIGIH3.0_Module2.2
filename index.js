//import express
import express from "express";

// init express
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

let playlists = [
  {
    title: "Kalih Welasku",
    artist: "Denny Caknan",
    url: "https://open.spotify.com/intl-id/track/4JRp8Wma0HjHvkHx2Ctl2d",
    img: "https://i.scdn.co/image/ab67616d0000b2734262caca007515f36f79fd04",
    total_played: 0,
  },
  {
    title: "Monokrom",
    artist: "Tulus",
    url: "https://open.spotify.com/intl-id/track/4GfK1qOF3uBWidbPlTCQRL",
    img: "https://suarausu.or.id/wp-content/uploads/2022/02/Album-Monokrom.jpg",
    total_played: 0,
  },
  {
    title: "Locked Out Of Heaeven",
    artist: "Bruno Mars",
    url: "https://open.spotify.com/intl-id/track/3w3y8KPTfNeOKPiqUTakBh",
    img: "https://i1.sndcdn.com/artworks-000042824893-xcujcq-t500x500.jpg",
    total_played: 0,
  },
];

// basic route
app.get("/", (req, res) => {
  res.render("index", { playlists });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/play/:title", (req, res) => {
  let title = req.params.title;
  let playlist = playlists.find((playlist) => playlist.title === title);

  if (!playlist) {
    return res.status(404).json({ error: "Song not found in the playlist." });
  }

  res.status(200).json({ message: "Song Played Now.", Song: playlist });
});

app.post("/addSong", (req, res) => {
  let { title, artist, url, img } = req.body;
  if (!title || !artist || !url || !img) {
    return res
      .status(400)
      .json({ error: "Title, Artists, URL, Image are required fields." });
  }

  const song = {
    title,
    artist,
    url,
    img,
    total_played: 0,
  };

  playlists.push(song);
  res.redirect("/");
});

// listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
