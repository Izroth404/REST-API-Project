//routes.js
//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});
//Export API routes

//Import bioController
var bioController = require('./bioController');

//bio routes
router.route('/bio')
    .get(bioController.index)
    .post(bioController.add);

router.route('/bio/:bio_id')
    .get(bioController.view)
    .patch(bioController.update)
    .put(bioController.update)
    .delete(bioController.delete);

module.exports = router;