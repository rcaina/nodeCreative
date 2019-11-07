var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

 router.get('/dog/:query', function(req, res, next) {
     var owlREST= "https://dog.ceo/api/breed/" + req.params.query + '/images/random';
     console.log(owlREST);
     
     request(owlREST).pipe(res);
     console.log(res);
 });
 
module.exports = router;
