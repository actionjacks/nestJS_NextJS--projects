import User from "../models/users.js";

export const controller = {
  getAll: async (req, res, next) => {
    try {
      const ALL = await User.findAll();
      return res.status(200).json(ALL);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  createOne: async (req, res, next) => {
    try {
      const USER_MODEL = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };

      try {
        const user = await User.create(USER_MODEL);
        console.log("User crerated");
        return res.status(201).json(user);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  updateOne: async (req, res, next) => {
    try {
      const USER_MODEL = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };

      try {
        const user = await User.update(USER_MODEL, {
          where: { id: req.params.id },
        });
        return res.status(200).json(user);
      } catch (error) {}
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  deleteOne: async (req, res, next) => {
    try {
      const user = await User.destroy({ where: { id: req.params.id } });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
