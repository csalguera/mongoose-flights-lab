import { Meal } from "../models/meal.js";

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      meals,
      title: 'Add Meal'
    })
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

function create(req, res) {
  console.log(req.body);
  Meal.create(req.body)
  .then(meal => {
    res.redirect('/meals/new')
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

export {
  newMeal as new,
  create
}