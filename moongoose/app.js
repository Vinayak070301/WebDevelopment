const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let cbDB;

function main() {
    return client.connect().then((client) => {
        cbDB = client.db("codingblocks");
    })
}

function getDB() {
    if (cbDB != undefined) return cbDB;
    return null;
}


app.post('/student', async (req, res) => {
    const {name, age, marks} = req.body;
    const db = getDB();
    let students=db.collection('students');
    let stu=await students.insertOne({
      name,
      age,
      marks
    })
   res.send({
    msg:"data send",
    data:stu
})

})


main()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })