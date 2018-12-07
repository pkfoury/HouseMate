const router = require('express').Router();

/********************
 * PROTECTED ROUTES *
 ********************/

const auth = require('./auth');
// router.use(auth.verifyToken);
// router.post(auth.login);

const member = require('./member');
router.get('/members', member.getMembers);

const home = require('./home');
router.get('/homes', home.getHome);

// const settings = require('./settings');
// router.post('/settings/update', settings.update);
// router.get('/settings', settings.getSettings);

module.exports = router;
