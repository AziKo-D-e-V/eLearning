const pg = require("../../libs/pg");
const { v4: uuid } = require("uuid");
const path = require("path");

const UpdateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { course, valume } = req.body;
console.log(id);
    const { image } = req.files;

    const imagename = `${uuid()}${path.extname(image.name)}`;
    image.mv(process.cwd() + "/uploads/" + imagename);

    await pg(
      `update courses set image = $1, course = $2, valume = $3 where id = $4`,
      imagename,
      course,
      valume,
      id
    );

    res.redirect("/admin/allcourses");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { UpdateCourse };
