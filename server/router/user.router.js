const {Router} = require("express");
const { registerUser, loginUser, getPosts } = require("../controllers/user.controller");
const authMiddleware =require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");
const loginSchema = require("../ZodValidator/login.validator");
const registerSchema = require("../ZodValidator/register.validator");

const router=Router();

router.route("/register").post(validate(registerSchema),registerUser);
router.route("/login").post(validate(loginSchema),loginUser);
router.route("/posts").get(authMiddleware,getPosts);

module.exports = router