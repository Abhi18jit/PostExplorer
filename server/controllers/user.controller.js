const Post = require("../models/posts.model");
const User = require("../models/user.models");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse")
const asyncHandler=require("../utils/asyncHandler")

const registerUser = asyncHandler(async (req, res) => {

    const {username, email, password, name} = req.body;

    if(username ==="" || email==="" || password===""){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        throw new ApiError(409, "Username or email Already Exist")
    }

    const user= await User.create({
        email,
        username,
        password,
        name
    })

    return res.status(200).json(
        new ApiResponse(200,{user, token: await user.generateAccessToken()},"Registration Successful")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!email && !username) {
        throw new ApiError(400, "user name or password is required");

    }
    const user = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (!user) {
        throw new ApiError(400, "Invalid Credentials");
    }

    const isPasswordValid = await user.isCorrectPassword(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid credentials");
    }
    
    const loggedInUser = await User.findById(user._id).select('-password');

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, token:loggedInUser.generateAccessToken()
                },
                "Login Successful"
            )
        )
})
const getPosts = asyncHandler (async(req,res)=>{
    const {username} = req.data;
    const page=Number(req.query.page);
    console.log(page);
    const limit = 8;
    const skip = (page-1)*limit;

    const posts = await Post.find()?.skip(skip)?.limit(limit);
    if(!posts){
        throw new ApiError(400,"No post Found")
    }

    
    return res.status(200).json(new ApiResponse(200,{posts,username},"Posts fetched"))

})

module.exports = {registerUser, loginUser, getPosts};