import mongoose, {Schema} from 'mongoose';

const mongoose = require('mongoose');

const MaintenanceSchema = new mongoose.Schema({
  billboard: { type: mongoose.Schema.Types.ObjectId, ref: 'Billboard' },
  rental: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental' },
  issue: String,
  fromDate: Date,
  toDate: Date,
  cost: Number,
  costPaidBy: {
    type: String,
    enum: ['Self', 'Partner', 'Client', 'Partial']
  },
  clientContribution: Number,
  partnerContribution: Number,
  impact: {
    clientCompensation: Boolean,
    daysAffected: Number,
    deductedAmount: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('Maintenance', MaintenanceSchema);
