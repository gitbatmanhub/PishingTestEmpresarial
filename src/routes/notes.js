const express = require('express');
const router= express.Router();
const Note = require('../models/Note');


router.get('/notes/nueva', (req, res)=>{
    res.render('notes/nueva');
})

router.post('/notes/new-note', async (req, res)=>{
    //Destructuring
    //Creo variables con las propiedades del objeto
    const {titulo, description}=req.body;
    const errors = [];
    if(!titulo){
        errors.push({text: 'falta titulo'})
    }
    if(!description){
        errors.push({text: 'falta descripción'})
    }
    if(errors.length>0){
        res.render('notes/nueva', {
            //datos a recuperar
            errors,
            titulo,
            description
        });
    }else {
        //Guardar los datos recibidos en la bbdd
        const newNote= new Note({titulo, description})
        await newNote.save();
        req.flash('succes_msg', 'Nota agregada');
        res.redirect('/notes');

    }

})

router.get('/notes', async (req, res)=>{
   const notes=  await Note.find().lean().sort({date: 'descending'});
    res.render('notes/all-notes', {notes});



    /*Enlistar tablas por metodos de busqueda
   const notes=  await Note.find().lean();

     */
});

router.get('/notes/edit/:id', async (req, res)=>{
    const note= await Note.findById(req.params.id).lean();
    res.render('notes/edit-note', {note});

});


//Editar tarea
router.put('/notes/edit-note/:id', async (req, res)=>{
    const {titulo, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {titulo, description});
    req.flash('succes_msg', 'Nota actualizada');
    res.redirect('/notes')
})


router.delete('/notes/delete/:id', async (req, res)=>{
    await Note.findByIdAndDelete(req.params.id);
    req.flash('succes_msg', 'Nota eliminada');
    res.redirect('/notes');
})


module.exports = router;


