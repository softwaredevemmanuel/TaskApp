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
    
        db.query('SELECT * FROM voteresults WHERE position = ?',[emma], async (err, result) => {
          
      
          return res.json({ message: result });
      
        })
      
        })

       
  app.get('/manifesto', function (req, res) {

    const email = req.headers.email

    db.query('SELECT * FROM Candidates WHERE Email = ?',[email], async (err, result) => {
      
  
      return res.json({ message: result });
  
    })
  
    })


    app.get('/name', function (req, res) {
      
      const position = req.headers.position
  
      db.query('SELECT * FROM Candidates WHERE Position = ?', [position], async (err, result) => {
    
        return res.json({ message: result });
    
      })
    
      })



    app.get('/name-by-matric', function (req, res) {
      
      const name = req.headers.fullstack
      const nameArray = name.split(' ')
      console.log(nameArray)
      const firstName = nameArray[0]
      const lastName = nameArray[1]
      console.log(firstName)
      console.log(lastName)
  
      db.query('SELECT * FROM Candidates WHERE FirstName = ? AND LastName = ?', [firstName, lastName], async (err, result) => {
        if(result.length != 0){
          const matric = result[0].MatricNumber
          db.query('SELECT * FROM voteresults WHERE candidateMatricNumber = ?', [matric], async (err, emma) => {

            console.log(emma)

            return res.json({ message: emma });
  
          })

        }

      
    
      })
    
      })



  // app.post('/register', (req, res) => {

  // const { firstName, lastName, department, email, phoneNumber, dob, password } = req.body;
  

  // db.query('SELECT * FROM RegisteredVoters WHERE email = ?', [email], async (err, result) => {
  //   if (err) {
  //     console.error(" There is an erro err");
  //     return res.status(500).json({ error: 'Internal Server Error' });
  //   }

  //   if (result.length === 0) {
     
  //       // Now, you can insert data into the Curriculum table
  //       const insertDataQuery = `
  //             INSERT INTO RegisteredVoters (firstName, lastName, department, email, phoneNumber, dob, password ) VALUES (?, ?, ?, ?, ?, ?, ?);
  //           `;

  //       const values = [firstName, lastName, department, email, phoneNumber, dob, password];

  //       db.query(insertDataQuery, values, (err) => {
  //         if (err) {
  //           console.error(err);
  //           throw new Error('Error inserting data');
  //         }
  //         return res.json({ message: `Student Registered successfully` });
  //       });

  //     }
  //   })

 
  // })




  app.post('/register', (req, res) => {

    const { firstName, lastName, department, email, phoneNumber, dob, password, matricNumber } = req.body;


    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS RegisteredVoters (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      department VARCHAR(255) NOT NULL,
      dob DATE NOT NULL,
      phoneNumber VARCHAR(255) NOT NULL,
      matricNumber VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;
  
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error(err);
      throw new Error('Error creating table');
    }
  });
  
  
    db.query('SELECT * FROM RegisteredVoters WHERE email = ?', [email], async (err, result) => {
      if (err) {
        console.error(" There is an erro err");
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (result.length === 0) {
         
          db.query(`INSERT INTO RegisteredVoters (firstName, lastName, department, email, phoneNumber, dob, password, matricNumber ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [firstName, lastName, department, email, phoneNumber, dob, password, matricNumber], (err) => {
            if (err) {
              console.error(err);
              throw new Error('Error inserting data');
            }
            return res.json({ message: `Student Registered successfully` });
          });
  
        }else{
          return res.json({ message: `Student already exists` });

        }
      })
  
   
    })
    




 

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });