const express = require('express');

const router = express.Router();

const { addBookPage, addbookForm } = require('../controllers/addBookController');

// const { editFarmPage, editFarm } = require('../controllers/editFarmController')


// Импортим middleware, котороя будет проверять авторизованного пользователя
// const isAuth = require('../middlewares/auth');

// addFarmPage:
router.get('/addbook/:id', addBookPage);
router.post('/addbook/:id', addbookForm);


module.exports = router;
