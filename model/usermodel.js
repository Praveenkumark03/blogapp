const mongo=require('mongoose')
const schema=mongo.Schema
const bcrypt= require('bcrypt')

const userschema=new schema({
    name:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:"string",
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    }
})
userschema.pre('save', async function () {
    try {
        const user = this;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }
    catch (err) {
        console.log(err)
    }
})
const usermodule=mongo.model('notifications',userschema)
module.exports=usermodule