const controller=require('../controller/usercontroller')
// const e=require('express')
// const router=e.Router()
// router.post('/register',controller.register)
// module.exports= router

const e=require('express')
const router=e.Router()
router.post('/register',controller.register)
router.post('/login',controller.login)
module.exports=router