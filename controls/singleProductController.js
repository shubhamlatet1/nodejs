import express from 'express';
import { agriProductModel } from '../models/agriProductSchema.js';

const singleProductController = async (req, res) => {
  let productId = req.params.id;

  const products = await agriProductModel.findById(productId);
  res.render('singleproduct', { title: 'Product', products });
};

export default singleProductController;
