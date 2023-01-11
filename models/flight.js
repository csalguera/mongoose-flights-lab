import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  airport: {type: String, default: 'DEN'},
  flightNo: {
    type: Number,
    default: function() {
      return Math.floor(Math.random() * (9999 - 10) + 10)
    }
  },
  departs: {
    type: Date,
    default: function() {
      return new Date().setFullYear(new Date().getFullYear() + 1)
    }
  }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}