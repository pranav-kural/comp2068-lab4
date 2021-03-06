var express = require('express');
var router = express.Router();
var familyData = require('../public/data/my-family'); // data related to family in json

/* I could've used multiple routes instead of one, and also created separate template (view) files
 * for each family member, but that would have been a lot of repetitive code and this seemed a better way to do it
 * However, for files exactly same as required according to the lab instructions: 'git checkout 4ff7502c12d158f700113f9a1cc7bf53e2e3bda0 .' [requires repo to be cloned]
 */

/* Routing for the website from root path '/' */
router.use('/', function(req, res, next) {
  // select the view to render
  switch (req.path) {
    case '/': res.render('index', { title: familyData[0].name, description: familyData[0].description, short_code: familyData[0].short_code });
      break;
    case '/pranav': res.render('index', { title: familyData[1].name, description: familyData[1].description, short_code: familyData[1].short_code });
      break;
    case '/aanchal': res.render('index', { title: familyData[2].name, description: familyData[2].description, short_code: familyData[2].short_code });
      break;
    case '/anu': res.render('index', { title: familyData[3].name, description: familyData[3].description, short_code: familyData[3].short_code });
      break;
    case '/tarloki': res.render('index', { title: familyData[4].name, description: familyData[4].description, short_code: familyData[4].short_code });
      break;
  }
});

module.exports = router;