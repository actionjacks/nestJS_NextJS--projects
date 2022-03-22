import Post from '../models/postModel.js'

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()

    res.status(200).json({
      status: 'succes',
      results: posts.length,
      data: {
        posts
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail'
    })
  }
}

export const getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    res.status(200).json({
      status: 'succes',
      data: {
        post
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail'
    })
  }
}

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body)

    res.status(200).json({
      status: 'succes',
      data: {
        post
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail'
    })
  }
}

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findOneAndUpdate(req.params.id, req.body,
      {
        new: true,
        runValidators: true
      })

    res.status(200).json({
      status: 'succes',
      data: {
        post
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail'
    })
  }
}

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)

    res.status(200).json({
      status: 'succes'
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail'
    })
  }
}