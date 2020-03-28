var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  }

  
});

var Item = mongoose.model("Item", ItemSchema);
module.exports = Item;