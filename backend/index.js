const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

app.get('/home', function (req, res) {
  res.json({message: "hello world", students: "Emma", location: "Awoyaya", ageAverage: "20", bestSongs: 'Lonely at the top', likes: "Women"})
})

app.get('/', function (req, res) {
    res.send('Hello World to our home page')
  })
app.get("/movies", function (req, res) {
    res.json([
      {movie: "Shutter Island"},
      {movie: "Game of Thrones"},
      {movie: "The Witcher"},
      {movie: "Teen Wolf"},
      {movie: "The Great Gatsby"},
      {movie: "Avengers: Endgame"},
      {movie: "Barbie: The Movie"},
      {movie: "The Boys"},
      {movie: "Invincible"},
      {movie: "Demon Slayer"},
      {movie: "Hidden Figures"},
    ]);
});


app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });