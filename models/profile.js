const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            require: [true, 'Please input your name'],
        },
        lName: {
            type: String,
            require: [true, 'Please input your surname']
        },
        email: {
            type: String,
            require: false
        },
        age: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;