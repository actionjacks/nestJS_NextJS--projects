import User from '../models/userModel.js'
import bcrypt from 'bcryptjs/dist/bcrypt'

export const signUp = async (req, res) => {
  const { username, password } = req.body

  try {
    const hashpassword = await bcrypt.hash(password, 12)
    const newUser = await User.create({
      username,
      password: hashpassword
    })

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }
}

export const login = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })
    if (!user) {
      res.status(404).json({
        status: 'fail',
        message: 'user not found'
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (isPasswordCorrect) {
      res.status(201).json({
        status: 'success',
      })
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'wrong credentials'
      })
    }

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }
}