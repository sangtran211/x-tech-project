var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1512346', function(req, res, next) {
  res.send('/1512346');
});

router.get('/1712471', function(req, res, next) {
  res.send('/1712471');
});

router.get('/1712722', function(req, res, next) {
  res.send('/1712722');
});
module.exports = router;
