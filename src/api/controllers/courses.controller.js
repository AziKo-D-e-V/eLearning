const { v4: uuid } = require("uuid");
const path = require("path");
const pg = require("../../libs/pg");

const create = async (req, res) => {
  console.log(req.body);
  const { course, valume } = req.body;
  const { image } = req.files;
  const imagename = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imagename);

  await pg(
    `insert into courses(image, course, valume) values($1, $2, $3)`,
    imagename,
    course,
    valume
  );
  res.redirect("/form");
};
const createPopular = async (req, res) => {
  console.log(req.body);
  const { course, valume } = req.body;
  const { image } = req.files;
  const imagename = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imagename);

  await pg(
    `insert into popular(image,  valume, course) values($1, $2, $3)`,
    imagename,
    valume,
    course
  );
  res.redirect("/form");
};
const createExpert = async (req, res) => {
  console.log(req.body);
  const { course, valume } = req.body;
  const { image } = req.files;
  const imagename = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imagename);

  await pg(
    `insert into experts(image,  valume, course) values($1, $2, $3)`,
    imagename,
    valume,
    course
  );
  res.redirect("/form");
};

module.exports = {
  create,
  createPopular,
  createExpert,
};
