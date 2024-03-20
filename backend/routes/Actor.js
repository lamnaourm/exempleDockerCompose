import express from 'express'
import ActorModel from '../models/Actor.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    ActorModel.find({})
     .then((actors) => {
        return res.status(201).json(actors)
     })
     .catch((err) => {
        return res.status(510).send('Erreur ...')
     })
})

routes.get('/names', (req, res) => {
   ActorModel.find({},{_id:0,name:1})
   .then((actors) => {
      return res.status(201).json(actors)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.post('/add', (req, res) => {
   const actor = req.body

   ActorModel.create(actor)
   .then((actor) => {
      return res.status(201).json(actor)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.put('/update/:name', (req, res) => {
   const actor = req.body
   const name = req.params.name

   ActorModel.updateOne({name:name},actor)
   .then((actor) => {
      return res.status(201).json(actor)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.delete('/delete/:name', (req, res) => {
   const name = req.params.name

   ActorModel.deleteOne({name:name})
   .then((resOP) => {
      return res.status(201).json(resOP)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})


export default routes