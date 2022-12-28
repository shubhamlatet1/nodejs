import mongoose from 'mongoose';

export const agriProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  contry_origin: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  discounted_Price: {
    type: Number,
    required: true,
  },
  regular_Price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

export const agriProductModel = mongoose.model(
  'agriProduct',
  agriProductSchema
);
