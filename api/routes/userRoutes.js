const express = require('express')
// const path = require('path')
const User = require("../models/User");
const UserController = require('../controllers/UserController')


// const way = path.join(__dirname + '../../controllers/UserController.js')


const router = express.Router()

//routes
router.get('/', UserController.showUser)
router.get('/register', UserController.createUser)
router.post('/register', UserController.createUserSave)
router.get('/:id', UserController.showUserDetails)
router.get('/delete/:id', UserController.deleteUser)
router.get('/edit/:id', UserController.editUser)
router.post('/edit', UserController.editUserSave)

// router.get('/', async (req, res) => {
//     try {
//       const users = await User.findAll({ raw: true });

//       res.render("home", { users });
//     } catch (error) {
//       console.log(error);
//     }
// })

// router.get('/register', (req, res) => {
//     res.render("register");
//   }
// )

// router.post('/register', async (req, res) => {
//     const user = {
//       name: req.body.name,
//       email: req.body.email,
//       active: req.body.active === "on" ? true : false,
//     };

//     try {
//       await User.create(user);
//       console.log(user);
//       res.redirect("/");
//     } catch (error) {
//       console.log(error);
//     }
//   }
// )

// router.get('/:id', async (req, res) => {
//     const id = req.params.id;

//     try {
//       const user = await User.findOne({ where: { id: id }, raw: true });
//       res.render("user", { user });
//     } catch (error) {
//       console.log(error);
//     }
//   })


module.exports = router