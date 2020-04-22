const express = require('express');
const router = express.Router();
const Recipe = require('./data/recipes-model');

router.get('/', (req,res) => {
    console.log(req)
    Recipe.getRecipes()
        .then(res => {
            res.status(200).json({
                data : res
            })
        })
        .catch(err => {
            res.status(400).json({
                error : 'error getting data'   
            })
        })
})


module.exports = router;