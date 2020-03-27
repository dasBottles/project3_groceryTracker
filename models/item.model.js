var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
var item = mongoose.model("item", ItemSchema);
module.exports = item;