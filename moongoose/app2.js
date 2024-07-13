const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const {MongoClient,getDB}=require('./connection/mongo')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());




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


MongoClient()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })