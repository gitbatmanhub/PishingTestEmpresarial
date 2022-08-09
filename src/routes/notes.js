const express = require('express');
const router= express.Router();

router.get('/notes/nueva', (req, res)=>{
    res.render('notes/nueva');
})

router.post('/notes/new-note', (req, res)=>{
    //Destructuring
    //Creo variables con las propiedades del objeto
    const {title, description}=req.body;
    const errors = [];
    if(!title){
        errors.push({text: 'falta titulo'})
    }
    if(!description){
        errors.push({text: 'falta descripción'})
    }
    if(errors.length>0){
        res.render('notes/nueva', {
            //datos a recuperar
            errors,
            title,
            description
        });
    }else {
        res.send('ok')

    }

})


module.exports = router;


