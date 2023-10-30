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


app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });