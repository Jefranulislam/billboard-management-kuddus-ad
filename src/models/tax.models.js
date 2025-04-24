import mongoose, {Schema} from 'mongoose';
const mongoose = require('mongoose');

const TaxSchema = new mongoose.Schema({
  rental: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental' },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  aitPercent: Number,
  vatPercent: Number,
  aitAmount: Number,
  vatAmount: Number,
  deductedOn: Date,
  aitReceipt: String
}, { timestamps: true });

module.exports = mongoose.model('Tax', TaxSchema);
