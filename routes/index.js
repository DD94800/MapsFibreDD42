
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Cloudant Boiler Plate' });
};

exports.map = function(req, res){
  res.render('map.html', { title: 'Fibre map' });
};