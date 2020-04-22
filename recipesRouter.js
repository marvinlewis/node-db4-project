const express = require('express');

const Recipe = require('./data/recipes-model.js');

const router = express.Router();


router.get('/', (req,res) => {
    //console.log(req)
    Recipe.getRecipes()
        .then(res => {
            res.status(200).json(res)
        })
        .catch(err => {
            res.status(400).json({
                error : 'error getting data'   
            })
        })
})


module.exports = router;