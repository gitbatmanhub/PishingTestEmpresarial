const express = require('express');
const router= express.Router();

router.get('/users/ingresar', (req, res)=>{
    res.render('users/ingresar');
})

router.get('/users/registrar', (req, res)=>{
    res.render("users/registrar");
})


module.exports = router;


