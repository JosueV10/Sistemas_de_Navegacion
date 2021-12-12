'use strict';

const express = require('express');
const router = express.Router();
const municipios = require('../../controllers/municipios.controller');

router.get('/', municipios.GetMunicipios);
router.get('/id', municipios.GetMunicipioById);
router.post('/crear', municipios.InsertMunicipio);
router.put('/actualizar', municipios.UpdateMunicipio);

module.exports = router;
