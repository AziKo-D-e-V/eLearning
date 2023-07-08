const { Router } = require("express");

const isAuth = require("../middlewares/isAuth");
const {
  home,
  adminPage,
  formPage,
  allcourses,
  allpopular,
  allexperts,
} = require("../controllers/home.controller");
const {
  create,
  createPopular,
  createExpert,
} = require("../controllers/courses.controller");
const {
  deleteCourses,
  deletePopular,
  deleteExperts,
} = require("../controllers/delete.controller");

const router = Router();

router.get("/", home);
router.get("/admin", isAuth, adminPage);
router.get("/admin/allcourses", isAuth, allcourses);
router.get("/admin/allpopular", isAuth, allpopular);
router.get("/admin/allexperts", isAuth, allexperts);
router.get("/form", formPage);
router.post("/admin/courses", create);
router.post("/admin/popular", createPopular);
router.post("/admin/expert", createExpert);
router.delete("/deleteCourses/:id", deleteCourses);
router.delete("/deletePopular/:id", deletePopular);
router.delete("/deleteExperts/:id", deleteExperts);
router.get("/admin/logout", isAuth, (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
