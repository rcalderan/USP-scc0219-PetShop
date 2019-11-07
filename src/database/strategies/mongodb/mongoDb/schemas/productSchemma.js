const _COLLECTION_NAME='product'
const mongoose=  require('mongoose')
const _DEFAULTS = require('../defaults/document/product')
const schemaOptions ={ 
    collection: _COLLECTION_NAME,
    versionKey: false
}


const productSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo:  {
        type: String,
        required: true
    },
    price:  {
        type: Number,
        required: true
    },
    stock:  {
        type: Number,
        required: true
    },
    sold:  {
        type: Number,
        required: true
    },
},schemaOptions);

productSchema.methods.collumns = function () {
    return {_id:1, description: 1, name: 1,photo:1,price:1, stock:1,sold:1}
}

productSchema.statics.GetDefaultValues = function(){
    return _DEFAULTS
}

productSchema.statics.GetCollecionName = function(){
    return _COLLECTION_NAME
}

module.exports = mongoose.model(_COLLECTION_NAME, productSchema) 


