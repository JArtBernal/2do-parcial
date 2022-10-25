const express = require('express');
const {getData}=require('..//Controllers')
const{updateAdress}=require('..//Controllers')

const router = express.Router();

router.get("/account",getData)
router.put("/account",updateAdress)

module.exports = {
  router
}