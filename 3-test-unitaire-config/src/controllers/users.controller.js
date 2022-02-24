const User = require("../models/user");

exports.create = (req, res) => {
  console.log("Create new user", req.body);
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
    role: req.body.role,
    recipes: [],
    favorite: [],
  });
  //add validator
  user
    .save()
    .then((data) => {
      res.status(201).send({firstName: data.firstName, email: data.email});
    })
    .catch((err) => {
      res.status(500).send({
        error: err.message,
      });
    });
};

exports.update = async (req, res) => {
  console.log(`id : ${req.params.id}`);
  await User.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      console.log("update successfully",data);
      res.status(200).send({
        message: `user ${req.params.id} has been edited`,
      });
    })
    .catch((err) => {
      {
        console.log("update fails", err);
        res.status(404).send({
          message: `user not found with id ${req.params.id}`,
        });
      }
    });
};

exports.getAll = (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send({
        error: err,
      });
    });
};

exports.getCurrentUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).send({
          message: `user not found with id ${req.param.id}`,
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(404).send({
        error: err,
      });
    });
};
exports.delete = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      let name = `${user.firstName} ${user.lastName}`;
      if (!user) {
        return res.status(404).send({
          message: `user not found with id ${req.param.id}`,
        });
      }
      res.status(200).send({
        message: `user ${name} has been deleted`,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
