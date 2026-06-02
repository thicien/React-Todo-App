const express = require('express');
const mongoose = require('mongoose');
const Item = require('../models/items');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, decription, price } = req.body
        if (!name || !descrition || price === undefined) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        const item = await Itme.create({
            name, descrition, price
        })
        res.status(201).json();
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;