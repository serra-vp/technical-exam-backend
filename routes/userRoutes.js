const express = require('express');
const router = express.Router();
const userServices = require('../services/userServices');

router.get('/', async (req, res, next) => {
  try {
    res.json(await userServices.getAllUsers());
  } catch (err) {
    console.error(`Error while getting all users `, err.message);
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.json(await userServices.getSingleUser(req.params));
  } catch (err) {
    console.error(`Error in ${req.url} ||`, err.message);
    res.status(500).json('Error getting user. Please try again').end();
  }
});

router.post('/create-user', async ( req, res, next) => {
  try {
    res.status(201).json(await userServices.createUser(req.body));
  } catch (err) {
    console.error(`Error in ${req.url} ||`, err.message);
    res.status(500).json('Error creating user. Please try again').end();
  }
});

router.patch('/update-user', async ( req, res, next) => {
  try {
    res.status(200).json(await userServices.updateUser(req.body));
  } catch (err) {
    console.error(`Error in ${req.url} ||`, err.message);
    res.status(500).json('Error updating user. Please try again').end();
  }
});

router.delete('/delete-user', async ( req, res, next) => {
  try {
    res.status(200).json(await userServices.deleteUser(req.query, 'single'));
  } catch (err) {
    console.error(`Error in ${req.url} ||`, err.message);
    res.status(500).json('Error deleting a user. Please try again').end();
  }
});

router.delete('/delete-multiple-user', async ( req, res, next) => {
  try {
    res.status(200).json(await userServices.deleteUser(req.query, 'multiple'));
  } catch (err) {
    console.error(`Error in ${req.url} ||`, err.message);
    res.status(500).json('Error deleting a user. Please try again').end();
  }
});


module.exports = router;
