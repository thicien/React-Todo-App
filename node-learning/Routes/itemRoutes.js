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

module.exports = router;