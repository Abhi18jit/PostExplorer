const jwt = require("jsonwebtoken");
const User=require("../models/user.models")
const ApiError = require("../utils/ApiError")
const asyncHandler=require("../utils/asyncHandler")

const authMiddleware = asyncHandler(async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        throw new ApiError(400,"Unauthorised Token")        
    }
    const jwtToken=token.replace("Bearer","").trim();
    // console.log(jwtToken);
        const isVerified=jwt.verify(jwtToken,process.env.ACCESS_TOKEN_SECRET);
        if (!isVerified) {
            throw new ApiError(400,"Unauthorised Access Token")        
        }

        // console.log(isVerified);

        const userData=await User.findOne({email:isVerified.email}).select({password:0});
        // console.log(userData);

        req.data=userData;
        req.token=token;
        next();

})

module.exports = authMiddleware ;