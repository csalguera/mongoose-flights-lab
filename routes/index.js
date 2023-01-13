import { Router } from 'express'
import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  Flight.find({})
  .then(flights => {
    Meal.find({})
    .then(meals => {
      res.render('index', {
        title: 'Mongoose Flights',
        flights: flights,
        meals: meals
      })
    })
  })
})

export { 
  router
}
