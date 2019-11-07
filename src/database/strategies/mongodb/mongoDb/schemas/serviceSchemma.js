const _COLLECTION_NAME='service'
const mongoose=  require('mongoose')
const _DEFAULTS = require('../defaults/document/service')
const schemaOptions ={ 
    collection: _COLLECTION_NAME,
    versionKey: false
}


const serviceSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default:'src'
    },
    price: {
        type: Number,
        required: true
    },

},schemaOptions);

serviceSchema.methods.collumns = function () {
    return {_id:1, description: 1, name: 1,photo:1,price:1}
}

serviceSchema.statics.GetDefaultValues = function(){
    return _DEFAULTS
}

serviceSchema.statics.GetCollecionName = function(){
    return _COLLECTION_NAME
}

module.exports = mongoose.model(_COLLECTION_NAME, serviceSchema) 


