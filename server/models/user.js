let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let findOrCreate = require('mongoose-find-or-create')

let User = mongoose.Schema({
    username: 
    {
        type:String,
        default:"",
        trim:true,
        required:'Username is required'
    },
    // password: 
    // {
    //     type:String,
    //     default:"",
    //     trim:true,
    //     required:'Password is required'
    // },
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        required:'Display name is required'
    },
    email:
    {
        type:String,
        default:"",
        trim:true,
        required:'Email is required'
    },
    created:
    {
        type: Date,
        default: Date.now()
    },
    update:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: 'user'

}
);

// configure this model
let options = ({MissingPasswordError:'Wrong/Missing Password'});
User.plugin(passportLocalMongoose, options);

User.plugin(findOrCreate, options)

module.exports.User = mongoose.model('User', User);

