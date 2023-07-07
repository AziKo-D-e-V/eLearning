const { Router } = require("express");

const isAuth = require("../middlewares/isAuth");
const {
  home,
  adminPage,
  formPage,
  allcourses,
} = require("../controllers/home.controller");
const {
  create,
  createPopular,
  createExpert,
} = require("../controllers/courses.controller");

const router = Router();

router.get("/", home);
router.get("/admin", isAuth, adminPage);
router.get("/admin/allcourses",isAuth, allcourses);
router.get("/form", formPage);
router.post("/admin/courses", create);
router.post("/admin/popular", createPopular);
router.post("/admin/expert", createExpert);
router.get("/admin/logout", isAuth, (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
