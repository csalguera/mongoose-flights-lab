import { Router } from 'express'
import { Flight } from '../models/flight.js'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('index', {
      title: 'Mongoose Flights',
      flights: flights
    })
  })
})

export { 
  router
}
