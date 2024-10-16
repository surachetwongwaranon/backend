import express from 'express'
import { createReview, getReview } from './../Controllers/reviewController.js'

const router = express.Router()

router.post('/:tourId', createReview)

router.get('/:tourId', getReview);

export default router