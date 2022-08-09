const express = require('express');
const router= express.Router();

router.get('/notes', (req, res)=>{
    res.send("Hello madafaca from db");
})



module.exports = router;


