import express from "express";
import { getAllPosts, getOnePost, createPost, updatePost, deletePost } from '../controllers/postController.js'
import protect from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/')
  .get(getAllPosts)
  .post(protect, createPost)

router.route('/:id')
  .get(protect, getOnePost)
  .patch(protect, updatePost)
  .delete(protect, deletePost)

export default router