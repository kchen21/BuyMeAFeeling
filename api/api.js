var router = require('express').Router();
var async = require('async');
var faker = require('faker');
var Category = require('../models/category');
var Product = require('../models/product');

var productData = require('../public/data/product_data');

router.post('/search', function(req, res, next) {
  Product.search({
    query_string: { query: req.body.search_string },
  }, function(err, results) {
    if (err) return next(err);
    res.json(results);
  });
});

router.get('/positive', function(req, res, next) {

  async.waterfall([

    function(callback) {
      Category.findOne({ name: 'positive' }, function(err, positiveCategory) {
        if (err) return next(err);
        callback(null, positiveCategory);
      });
    },

    function(positiveCategory, callback) {
      for (var feeling in productData.positive) {
        var feelingVal = productData.positive.feeling;
        var product = new Product();
        product.category = positiveCategory._id;
        product.name = feelingVal.name;
        product.price = feelingVal.price;
        product.image = feelingVal.image;

        product.save();
      }
    }

  ]);

  res.json({ message: 'Success' });

});

router.get('/negative', function(req, res, next) {

  async.waterfall([

    function(callback) {
      Category.findOne({ name: 'negative' }, function(err, negativeCategory) {
        if (err) return next(err);
        callback(null, negativeCategory);
      });
    },

    function(negativeCategory, callback) {
      for (var feeling in productData.negative) {
        var feelingVal = productData.negative.feeling;
        var product = new Product();
        product.category = negativeCategory._id;
        product.name = feelingVal.name;
        product.price = feelingVal.price;
        product.image = feelingVal.image;

        product.save();
      }
    }

  ]);

  res.json({ message: 'Success' });

});

router.get('/miscellaneous', function(req, res, next) {

  async.waterfall([

    function(callback) {
      Category.findOne({ name: 'miscellaneous' }, function(err, miscellaneousCategory) {
        if (err) return next(err);
        callback(null, miscellaneousCategory);
      });
    },

    function(miscellaneousCategory, callback) {
      for (var feeling in productData.miscellaneous) {
        var feelingVal = productData.miscellaneous.feeling;
        var product = new Product();
        product.category = miscellaneousCategory._id;
        product.name = feelingVal.name;
        product.price = feelingVal.price;
        product.image = feelingVal.image;

        product.save();
      }
    }

  ]);

  res.json({ message: 'Success' });

});

router.get('/:name', function(req, res, next) {

  async.waterfall([

    function(callback) {
      Category.findOne({ name: req.params.name }, function(err, category) {
        if (err) return next(err);
        callback(null, category);
      });
    },

    function(category, callback) {
      for (var i = 0; i < 30; i++) {
        var product = new Product();
        product.category = category._id;
        product.name = faker.commerce.productName();
        product.price = faker.commerce.price();
        product.image = faker.image.image();

        product.save();
      }
    }

  ]);

  res.json({ message: 'Success' });

});

module.exports = router;
