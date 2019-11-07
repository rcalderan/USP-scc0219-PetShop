const _COLLECTION_NAME='animal'
const mongoose=  require('mongoose')
const _DEFAULTS = require('../defaults/document/animal')
const schemaOptions ={ 
    collection: _COLLECTION_NAME,
    versionKey: false
}


const animalSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    owner: {
        type: Number,
        required: true
    },
    type:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    race:  {
        type: String,
        required: true
    },
    age:  {
        type: Date,
        required: true
    },
},schemaOptions);

animalSchema.methods.collumns = function () {
    return {_id:1, owner: 1, type:1,name: 1,adress:1,photo:1,race:1, age:1}
}

animalSchema.statics.GetDefaultValues = function(){
    return _DEFAULTS
}

animalSchema.statics.GetCollecionName = function(){
    return _COLLECTION_NAME
}

module.exports = mongoose.model(_COLLECTION_NAME, animalSchema) 


