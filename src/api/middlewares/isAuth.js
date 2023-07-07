const jwt = require("../../libs/jwt");
const cookie = require("cookie-parser");


const isAuth = (req, res, next) => {
  console.log(req.cookies);
  try {
    const { token } = req.cookies;

    if (!token) return res.redirect("/login");

    const verify = jwt.verify(token);

    req.user = verify;

    next();
  } catch (error) {
    console.log(error.message);
    res.redirect("/login");
  }
};

module.exports = isAuth;
