import mongoose, {Schema} from 'mongoose';

const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: String,
  billboards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Billboard' }],
  earnings: [{
    billboard: { type: mongoose.Schema.Types.ObjectId, ref: 'Billboard' },
    rental: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental' },
    earnedAmount: Number,
    deduction: Number,
    profitPaid: Boolean,
    remarks: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Partner', PartnerSchema);
