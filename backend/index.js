const express = require('express')
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/TaskApp')
  .then(() => console.log('Our MongoDB has been Connected!'));

var cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json());



const studentSchema = new mongoose.Schema(
 
  { 
    firstName : String,
    lastName : String,
    email: String,
    password: String,
  }

);

const Student = mongoose.model('Tailwind', studentSchema);


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

app.post('/login', function (req, res) {
  const {email, password} = req.body
  studentEmail = "admin@gmail.com"
  studentPassword = "1234"
  if (email == studentEmail && password == studentPassword){
    res.send('Logged in successfully')
    }else{
      res.send('Wrong Email or password')
    }
  
})


app.post('/register', async (req, res) => {
  const {first_name, last_name, email, passwords} = req.body

  const user = await Student.findOne({email})
  if(user){
   console.log("User Exists")
   return res.status(400).json({error:'User Exists!'})
 
 }

  const newUser = new Student({
    firstName: first_name,
    lastName : last_name,
    email: email,
    password: passwords
   
  });

  newUser.save()
  return res.status(200).json({message : "Registration Successful"})

 })


app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });