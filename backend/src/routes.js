const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ongMid = require('../src/middlewares/ongMid');
const incidentMid = require('../src/middlewares/incidentMid');
const profileMid = require('../src/middlewares/profileMid');
const sessionMid = require('../src/middlewares/sessionMid');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
 
const routes = express.Router();

routes.post('/session', sessionMid.index(), SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', ongMid.create(), OngController.create);

routes.get('/profile', profileMid.index(), ProfileController.index);

routes.get('/incidents', incidentMid.index(), IncidentController.index);
routes.post('/incidents', incidentMid.create(), IncidentController.create);
routes.delete('/incidents/:id', incidentMid.delete(), IncidentController.delete);

module.exports = routes;