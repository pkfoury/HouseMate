const router = require('express').Router();

/********************
 * PROTECTED ROUTES *
 ********************/

 const auth = require('./auth');
// router.use(auth.verifyToken);
router.post('/login', auth.login);
router.post('/register', auth.register);

const member = require('./member');
router.get('/getMembers', member.getMembers);

const home = require('./home');
router.get('/getHome', home.getHome);

const task = require('./tasks');
router.get('/getTasks', task.getTasks);

// const settings = require('./settings');
// router.post('/settings/update', settings.update);
// router.get('/settings', settings.getSettings);

module.exports = router;
