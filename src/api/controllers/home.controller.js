const pg = require("../../libs/pg");

const home = async (req, res) => {
  try {
    const Courses = await pg(`select * from courses `);
    const PopularCourses = await pg(`select * from popular`);
    const createExpert = await pg(`select * from experts`);

    res.render("index", { Courses, PopularCourses, createExpert });
  } catch (error) {
    console.log(error.message);
  }
};

const adminPage = async (req, res) => {
  res.render("admin");
};
const formPage = async (req, res) => {
  res.render("form");
};
const UpdCourse = async (req, res) => {
  res.render("updcourse");
};
const allcourses = async (req, res) => {
  const Courses = await pg(`select * from courses`);

  res.render("allcourses", {
    Courses,
  });
};
const allpopular = async (req, res) => {
  const Courses = await pg(`select * from popular`);

  res.render("allpopular", {
    Courses,
  });
};
const allexperts = async (req, res) => {
  const Courses = await pg(`select * from experts`);

  res.render("allexperts", {
    Courses,
  });
};



module.exports = {
  home,
  adminPage,
  formPage,UpdCourse,
  allcourses,
  allpopular,
  allexperts,
};
