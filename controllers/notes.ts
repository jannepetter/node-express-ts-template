const Note = require('../models/note')
const noteRouter= require('express').Router()

noteRouter.get('/', async (request:any, response:any, next:any)=>{
    try {
        const notes= await Note.find({})
        response.status(200).json(notes)
    } catch (error) {
        next(error)
    }
})
noteRouter.post('/', async (request:any, response:any, next:any) =>{
    const body = request.body
    try {
        const note =new Note({
            content:body.notefield
        }) 
        const savedNote=await note.save()
        response.status(201).json(savedNote.toJSON())
    } catch (error) {
        next(error)
    }
})
noteRouter.delete('/:id', async (request:any, response:any, next:any) => {
    try {
      await Note.findByIdAndDelete(request.params.id)
      response.status(200)
    } catch (error) {
        next(error)
    }
})
module.exports= noteRouter