const pg = require("../../libs/pg");
const bcrypt = require("bcrypt");
const jwt = require("../../libs/jwt");
const { generateHash, compareHash } = require("../../libs/bcrypt");

const login = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;

    const findAdmin = (
      await pg(`select * from admins where username = $1`, username)
    )[0];

    if (!findAdmin) {
      return res.redirect("/login");

    }

    const compare = await compareHash(password, findAdmin.password);

    if (!compare){
      return res.redirect("/login");
}
    const token = jwt.sign({ userId: findAdmin.id });
    
    res.cookie("token", token);

    res.redirect("/admin");

    // res.status(200).json({ message: "Success", data: token });
  } catch (error) {
    console.log(error);
  }

  //   const { username, password } = req.body;

  //   const users = await Users.read();

  //   const findUser = users.find((user) => user.username === username);

  //   if (!findUser) {
  //     return res.redirect("/login");
  //   }

  //   const checkPass = await bcrypt.compare(password, findUser.password);

  //   if (!checkPass) {
  //     return res.redirect("/login");
  //   }

  //   const token = jwt.sign({ userId: findUser.id });

  //   res.cookie("token", token);

  //   res.redirect("/admin");
};

const register = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const findAdmin = await pg(
      `select * from admins where username = $1 and password = $2`,
      username,
      password
    );

    if (findAdmin.length) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const generate = await generateHash(password);

    const newAdmin = (
      await pg(
        `insert into admins(name, username, password) values($1, $2, $3) returning *`,
        name,
        username,
        generate
      )
    )[0];

    delete newAdmin.password;
    res.status(201).json({ message: "Admin created", data: newAdmin });
  } catch (error) {
    console.log(error);
  }
};

const loginGet = async (req, res) => {
  res.render("login");
};

module.exports = {
  login,
  loginGet,
  register,
};
