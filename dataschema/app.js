const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const addresses =require('./models/address')
const students=require('./models/students')


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/address', async (req, res) => {
    const {details} = req.body;
    let ad=await addresses.create({details});
    res.send({
        message: 'address successfully Added',
        ad
    })
})

app.post('/student', async (req, res) => {
    const { name, age, marks ,address_id} = req.body;
    let stu=await students.create({name,age,marks,address_id});
    res.send({
        message: 'Student created successfully',
        stu
    })
})


app.get('/find', async (req, res) => {
    // let { limit, skip } = req.query;
    // limit= +limit;
    // skip= +skip;
    let stu=await students.find().populate('address_id');
    res.send({
        message: 'Students fetched successfully',
        student: stu
    })

})

app.post('/update', async (req, res) => {

})


mongoose.connect('mongodb://127.0.0.1:27017/codingblocks')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })