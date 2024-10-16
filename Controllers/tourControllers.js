import { parse } from 'dotenv'
import Tour from '../models/Tour.js'

export const createTour = async(req,res)=>{

    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save()

        res.status(200).json({success:true, message:'Successfully created', data:savedTour})
    } catch (err) {
        res.status(500).json({success:false, message:'failed to created. try again'})
    }
}

export const updateTour = async(req,res)=>{

    const id = req.params.id

    try{
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
    }, {new:true})

    res.status(200).json({success:true, message:'Successfully updated', data:updateTour})

    } catch (err) {
        res.status(500).json({success:false, message:'failed to updated. try again'})
    }
};

export const deleteTour = async(req,res)=>{

    const id = req.params.id

    try{
        await Tour.findByIdAndDelete(id)

    res.status(200).json({success:true, message:'Successfully deleted'})

    } catch (err) {
        res.status(500).json({success:false, message:'failed to deleted. try again'})
    }
};

export const getSingleTour = async(req,res)=>{

    const id = req.params.id

    try{
        const tour = await Tour.findById(id);

        res.status(200).json({ success: true, message: 'successful', data: tour });

    } catch (err) {
        res.status(404).json({success:false, message:'not found'});
    }
};

export const getAllTour = async(req,res)=>{

    const page = parseInt(req.query.page)

    console.log(page);

    try{

        const tours = await Tour.find({}).skip(page * 8).limit(8);
        res.status(200).json({ success: true, count:tours.length, message: 'successful', data: tours });

    } catch (err) {
        res.status(404).json({success:false, message:'not found'});
    }
};

export const getTourBySearch = async(req,res)=>{

    const city = new RegExp(req.query.city, 'i')

    try{

        const tours = await Tour.find({ city })
        res.status(200).json({ success: true, message: 'successful', data: tours });

    } catch (err) {
        res.status(404).json({success:false, message:'not found'});
    }
};

export const getFeaturedTours = async(req,res)=>{

    try{

        const tours = await Tour.find({featured:true}).limit(8);
        res.status(200).json({ success: true, count:tours.length, message: 'successful', data: tours });

    } catch (err) {
        res.status(404).json({success:false, message:'not found'});
    }
};

export const getTourCount = async(req,res)=>{

    try{

        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data: tourCount });

    } catch (err) {
        res.status(500).json({success:false, message:'failed to fetch'});
    }
};

export const getFeaturedToursCount = async(req,res)=>{

    try{

        const tours = await Tour.find({ featured: true });
        res.status(200).json({ success: true, count:tours.length, message: 'successful', data: tours });

    } catch (err) {
        res.status(404).json({success:false, message:'not found'});
    }
};
