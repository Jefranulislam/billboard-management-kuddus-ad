import mongoose, {Schema} from 'mongoose';

const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  billboard: { type: mongoose.Schema.Types.ObjectId, ref: 'Billboard', required: true },
  startDate: Date,
  endDate: Date,
  totalRent: Number,
  paymentMode: { type: String, enum: ['Full', 'Installment'] },
  paidStatus: { type: String, enum: ['Paid', 'Partial', 'Unpaid'] },
  poUpload: String,
  pvcCost: Number,
  fittingCost: Number,
  adjustment: {
    delayDays: Number,
    paymentReduction: Number,
    displayExtensionDays: Number,
    companyCompensationType: { type: String, enum: ['Deduct', 'Extend', 'None'], default: 'None' }
  }
}, { timestamps: true });

module.exports = mongoose.model('Rental', RentalSchema);
