const express = require('express');
const router= express.Router();

router.get('/ingresar', (req, res)=>{
    res.send("Hello madafaca ingresar");
})

router.get('/registrarse', (req, res)=>{
    res.send("Hello madafaca registrarse");
})


module.exports = router;


