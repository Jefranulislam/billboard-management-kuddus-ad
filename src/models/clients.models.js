import mongoose, {Schema} from 'mongoose';

const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  industry: String,
  contactPerson: String,
  email: String,
  phone: String
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);
