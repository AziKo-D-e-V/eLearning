const pg = require("../../libs/pg");

const deleteCourses = async (req, res) => {
  const { id } = req.params;
console.log(id);
  try {
    const deletes = await pg(`DELETE FROM courses WHERE id = '${id}'`);

    if (deletes.length == 0) {
      return res.redirect("/admin");
    }

    res.redirect("/admin/allcourses");
  } catch (error) {
    console.log(error);
    res.redirect("/admin");
  }
};

const deletePopular = async (req, res) => {
  const { id } = req.params;

  try {
    const deletes = await pg(`DELETE FROM popular WHERE id = '${id}'`);

    if (deletes.length == 0) {
      return res.redirect("/admin");
    }

    res.redirect("/admin/allcourses");
  } catch (error) {
    console.log(error);
    res.redirect("/admin");
  }
};

const deleteExperts = async (req, res) => {
  const { id } = req.params;
  try {
    const deletes = await pg(`DELETE FROM experts WHERE id = '${id}'`);

    if (deletes.length == 0) {
      return res.redirect("/admin");
    }

    res.redirect("/admin/allcourses");
  } catch (error) {
    console.log(error);
    res.redirect("/admin");
  }
};
module.exports = { deleteCourses, deletePopular, deleteExperts };
