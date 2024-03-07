const {Schema, model} = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type : String,
        require: true
    },
    name:{
        type:String
    }
},{ timeStamps: true })

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {//PAYLOAD
            _id: this._id,                      
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,    //SECRET KEY
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

const User=new model('User',userSchema);

module.exports=User;