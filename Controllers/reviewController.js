import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReview = async (req,res) => {
   const tourId  = req.params.tourId
   const newReview = new Review({...req.body}) 
   
   try {
      const savedReview = await newReview.save()

      await Tour.findByIdAndUpdate(tourId, {
         $push: {reviews: savedReview._id}
      })

      res.status(200).json({success:true, message:"Review submitted", data:savedReview})
   } catch (error) {
      res.status(500).json({success:false, message:"Failed to submit"})
   }
}

export const getReview = async (req,res) => {
   const tourId  = req.params.tourId
   
   try {
      const tour = await Tour.findById(tourId);

      res.status(200).json({success:true, message:"successful", data:tourId})
   } catch (error) {
      res.status(500).json({success:false, message:"Failed to find"})
   }
}