const User = require("../models/User");

module.exports = class UserController {
  static async showUser(req, res) {
    try {
      const users = await User.findAll({ raw: true });

      res.render("users", { users });
    } catch (error) {
      console.log(error);
    }
  }
  static createUser(req, res) {
    res.render("register");
  }
  static async createUserSave(req, res) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      active: req.body.active === "on" ? true : false,
    };

    try {
      await User.create(user);
      console.log(user);
      res.redirect("/users");
    } catch (error) {
      console.log(error);
    }
  }
  static async showUserDetails(req, res) {
    const id = req.params.id;

    try {
      const user = await User.findOne({ where: { id: id }, raw: true });
      res.render("user", { user });
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteUser(req, res) {
    const id = req.params.id
    try {
      await User.destroy({ where: {id: id} })
      res.redirect('/users')
    } catch (error) {
      console.log(error)
    }
  }
  static async editUser(req, res) {
    const id = req.params.id
    try {
      const user = await User.findOne({ where: { id: id }, raw: true})
      res.render('edit', { user })
    } catch (error) {
      console.log(error)
    }
  }
  static async editUserSave(req, res) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      active: req.body.active === "on" ? true : false,
    }

    try {
      await User.update(user, { where: { id: req.body.id }})
      res.redirect(`/users/${req.body.id}`)
    } catch (error) {
      console.log(error)
    }
  }
};


