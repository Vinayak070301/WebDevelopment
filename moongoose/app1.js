const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
let cdDB = null;

async function main() {
    try {
        if (cdDB !== null) return cdDB;
        
        await client.connect();
        console.log('Connected successfully to server');
        cdDB = client.db("codingblock");
        return cdDB;
    } catch (err) {
        console.log("Error occurred while connecting to MongoDB:", err);
        throw err;
    }
}

main()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    })
    .catch(err => {
        console.log("Error occurred while starting the server:", err);
    });