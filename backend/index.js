const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')
const mysql = require('mysql');



const app = express()
app.use(cors())
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'VottingApp'

})
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Votting App Connected.....')

});

app.get('/', function (req, res) {

  db.query('SELECT * FROM RegisteredVoters', async (err, result) => {
    
    console.log(result)

    return res.json({ message: result });

  })

  })

  app.get('/vote-result', function (req, res) {

    db.query('SELECT * FROM voteresults', async (err, result) => {
      
      console.log(result)
  
      return res.json({ message: result });
  
    })
  
    })


    
  app.get('/candidates', function (req, res) {

    const emma = req.headers.fullstack
    console.log(emma)

    db.query('SELECT * FROM Candidates WHERE Department = ?',[emma], async (err, result) => {
      
  
      return res.json({ message: result });
  
    })
  
    })


    app.get('/positions', function (req, res) {
  
      db.query('SELECT * FROM Candidates',  async (err, result) => {
        
    
        return res.json({ message: result });
    
      })
    
      })

    
      app.get('/posts', function (req, res) {

        const emma = req.headers.fullstack
        console.log(emma)
    
        db.query('SELECT * FROM voteresults WHERE Position = ?',[emma], async (err, result) => {
          
      
          return res.json({ message: result });
      
        })
      
        })

       
  app.get('/manifesto', function (req, res) {

    const email = req.headers.email

    db.query('SELECT * FROM Candidates WHERE Email = ?',[email], async (err, result) => {
      
  
      return res.json({ message: result });
  
    })
  
    })


app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });