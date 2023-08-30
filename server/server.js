const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sql_login'
});

connection.connect(err => {
    if(err) throw err ;
    console.log('connected to MySQL database');
});

app.post('/api/signup/', (req,res) => {
    //const country = req.params.country;
    const {username, email, password, country} = req.body;
    const query = 'INSERT INTO user (username, email, password, country) VALUES (?, ?, ?, ?)';
    connection.query(query, [username, email, password, country], (err, result) => {
        if(err) {
            console.error('Error signin up:', err);
            res.status(500).send('Error signing up');
        } else {
            res.status(200).send('Sign-up successful');
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

