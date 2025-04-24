import mongoose, {Schema} from 'mongoose';

const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  rental: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental' },
  amountPaid: Number,
  paymentDate: Date,
  paymentMode: String,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);

