import mongoose, {Schema} from 'mongoose';
const mongoose = require('mongoose');

const BillboardSchema = new mongoose.Schema({
  location: { type: String, required: true },
  image: { type: String },
  size: { type: String },
  type: { type: String, enum: ['Unipole', 'Gantry', 'Other'] },
  structureCost: { type: Number },
  installationDate: { type: Date },
  currentStatus: { type: String, enum: ['Available', 'Rented', 'Maintenance'], default: 'Available' },
  partnerInvestments: [{
    partner: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner' },
    investmentType: { type: String }, // e.g. 'Structure', 'Token Money', 'Labor'
    amount: Number,
    date: Date,
    description: String
  }],
  taxes: [{
    taxType: String,
    amount: Number,
    paidBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner' },
    paidDate: Date
  }]
}, { timestamps: true });

module.exports = mongoose.model('Billboard', BillboardSchema);
