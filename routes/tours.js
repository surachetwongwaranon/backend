import express from 'express'
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTours, getTourCount, getFeaturedToursCount } from '../Controllers/tourControllers.js'

const router = express.Router()

router.post('/', createTour);

router.put('/:id', updateTour);

router.delete('/:id', deleteTour);

router.get('/:id', getSingleTour);

router.get('/', getAllTour);

router.get('/search/getTourBySearch', getTourBySearch);

router.get('/search/getFeaturedTours', getFeaturedTours);

router.get('/search/getTourCount', getTourCount);

router.get('/search/getFeaturedToursCount', getFeaturedToursCount);


export default router;