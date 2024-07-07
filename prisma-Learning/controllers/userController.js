const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");


exports.signup = async(req,res,next) => {
    try{
        const {name,email,password} = req.body

        if(!name||!email||!password){
            throw new Error("Please provide all fields")
        }

        const user = await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:password
            }
        })

        cookieToken(user,res)

    }
    catch(error){
        throw new Error(error)
    }
}