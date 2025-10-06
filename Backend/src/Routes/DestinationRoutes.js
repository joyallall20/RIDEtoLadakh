import express from 'express'
import {createDestination,getDestinationById,getAllDestinations,updateDestination, deleteDestination} from "../Controllers/DestinationControllers.js"

const router = express.Router()

router.get('/destinations/:id',getDestinationById)
router.get('/destinations',getAllDestinations)
router.post('/destinations', createDestination)
router.put('/destinations/:id',updateDestination)
router.delete('/destinations/:id',deleteDestination)

export default router