import express from 'express'
import { createReview, getReview } from './../Controllers/reviewController.js'

import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:tourId', verifyUser, createReview)

router.get('/:tourId', getReview);

export default router