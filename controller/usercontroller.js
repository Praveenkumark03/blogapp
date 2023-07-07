const controller = require("../service/userservice")
const bcrypt=require('bcrypt')
const register =async(req,res)=>{
    try{
    let {name,email,password,confirmpassword,phoneno}=req.body;
    if(password=confirmpassword){
        const user= await controller.registeruser(name,email,password,phoneno)
        res.json(user)
    }
    
}
catch(err)
{
    console.log(err);
}
}
const login =async(req,res)=>{
    try{
        const {name,email,password,phoneno}=req.body
    
      const user=await controller.checkuser(email)
    if (!user) {
        throw new Error('user not found')
    }
    const match=await bcrypt.compare(password,user.password)
    if (!match) {
        throw new Error('invalid password') 
    }
    let tokendata={
        id:user._id,
        email:user.email
    }

    const token=await controller.generatetoken(tokendata,'secretkey');
    res.status(200).json({
        status:true,
        token:token
    })
}
    catch(err)
    {
        console.log(err);
    }
}
module.exports={register,login}