const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST - Create new feedback
router.post('/feedback', async (req, res) => {
  try {
    const { studentName, subject, rating, comments } = req.body;
    
    const newFeedback = new Feedback({
      studentName,
      subject,
      rating,
      comments
    });
    
    const savedFeedback = await newFeedback.save();
    res.status(201).json({
      success: true,
      data: savedFeedback
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// GET - Get all feedbacks
router.get('/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// GET - Get feedbacks by subject
router.get('/feedbacks/:subject', async (req, res) => {
  try {
    const subject = req.params.subject;
    const feedbacks = await Feedback.find({ subject }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// GET - Get average rating by subject
router.get('/feedbacks/rating/:subject', async (req, res) => {
  try {
    const subject = req.params.subject;
    
    const result = await Feedback.aggregate([
      { $match: { subject } },
      { $group: {
          _id: "$subject",
          averageRating: { $avg: "$rating" },
          count: { $sum: 1 }
        }
      }
    ]);
    
    if (result.length === 0) {
      return res.status(200).json({
        success: true,
        data: { subject, averageRating: 0, count: 0 }
      });
    }
    
    res.status(200).json({
      success: true,
      data: {
        subject: result[0]._id,
        averageRating: result[0].averageRating,
        count: result[0].count
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

module.exports = router;
