import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  }
}, {
  timestamps: true
})

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
  },
  tickets: [ticketSchema]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}