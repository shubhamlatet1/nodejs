import express from 'express';
import { agriProductModel } from '../models/agriProductSchema.js';

const detailController = async (req, res) => {
  const data = await agriProductModel.find();
  console.log(data);
  res.render('detail', { title: 'detail', data });
};

export default detailController;
