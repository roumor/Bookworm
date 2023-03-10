const express = require('express');

const router = express.Router();

const {
  renderMyProfile,
  MyPostDelete,
  addBookPage,
  addbookForm,
  renderformPage,
  postEditform,
  renderFavs,
  addFav,
  rateBook,
} = require('../controllers/myprofileController');


// Импортим middleware, котороя будет проверять авторизованного пользователя
// const isAuth = require('../middlewares/auth');

// myProfile:
router.get('/myprofile', renderMyProfile);
router.delete('/myprofile', MyPostDelete);


// private/editform/:id
router.get('/editform/:id', renderformPage);
router.put('/editform', postEditform);


// addFarmPage:
router.get('/addbook/new', addBookPage);
router.post('/addbook/new', addbookForm);

router.get('/favorites', renderFavs);
router.post('/favorites', addFav);

router.post('/rating', rateBook);

module.exports = router;
