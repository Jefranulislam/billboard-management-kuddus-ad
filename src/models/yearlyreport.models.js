import mongoose, {Schema} from 'mongoose';

const mongoose = require('mongoose');

const YearlyReportSchema = new mongoose.Schema({
  year: String,
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  totalRent: Number,
  totalAIT: Number,
  totalVAT: Number,
  submitted: Boolean,
  summaryUpload: String,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('YearlyReport', YearlyReportSchema);
