const _COLLECTION_NAME='person'
const mongoose=  require('mongoose')
const _DEFAULTS = require('../defaults/document/person')
const schemaOptions ={ 
    collection: _COLLECTION_NAME,
    versionKey: false
}


const personSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    phone:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
},schemaOptions);

personSchema.methods.collumns = function () {
    return {_id:1, type: 1, name: 1,adress:1,photo:1,phone:1, email:1,password:1}
}

personSchema.statics.GetDefaultValues = function(){
    return _DEFAULTS
}

personSchema.statics.GetCollecionName = function(){
    return _COLLECTION_NAME
}

module.exports = mongoose.model(_COLLECTION_NAME, personSchema) 


