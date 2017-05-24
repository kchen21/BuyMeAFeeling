var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  name: String,
  price: Number,
  image: String
});

ProductSchema.plugin(mongoosastic, {
  hosts: [
    'https://jarm0u2v:iecfi9icqn7hq01h@myrtle-5586046.us-east-1.bonsaisearch.net'
  ]
});

module.exports = mongoose.model('Product', ProductSchema);
