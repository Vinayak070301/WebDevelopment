const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    marks: {
        type: Number
    },
    address_id: {
        type: Schema.Types.ObjectId,
        ref: 'address'
    }
});

module.exports = mongoose.model('students',studentSchema);
// [
//     {
//       _id: ObjectId('66268af050253c8290eba2b1'),
//       details: 'Noida, Coding Blocks'
//     },
//     {
//       _id: ObjectId('66268af050253c8290eba2b2'),
//       details: 'Pitampura, Coding Blocks'
//     },
//     {
//       _id: ObjectId('66268af050253c8290eba2b3'),
//       details: 'Lucknow, Coding Blocks'
//     },
//     {
//       _id: ObjectId('66268af050253c8290eba2b4'),
//       details: 'Las vegas, Coding Blocks'
//     }
//   ]

// [{"name": "Arjun","age": "3","marks": 11,address_id:ObjectId('6649ba576cbb9e14922615b8')},{"name": "Salman","age": "4","marks": 13,address_id:ObjectId('6649bac486ea54a2097b95be')},{"name": "Bipin","age": "5","marks": 15,address_id:ObjectId('6649ba576cbb9e14922615b8')}]