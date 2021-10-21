import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique:true },
    password: {type: String, required: true },
    isAdmin: {type: Boolean, required: true, default:false },
    
}, 
{
    timestamps: true, //create ||update date
});

//if user exists set a value in user else create a new User model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User