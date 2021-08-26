const mongoose = require('mongoose');
 
const LanguageSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is required!"]  
    },
    reason:{
        type:String,
        required: [true, "reason is required!"]  
    },
    demanded_rate:{
        type: Number,
        required: [true, "Demanded_rate is required!"]  
    },
    good_salary:{
        type:Boolean,
        required: [true, "salary is required!"]  
    }
});
 
const Language = mongoose.model('language', LanguageSchema);
 
module.exports = Language;