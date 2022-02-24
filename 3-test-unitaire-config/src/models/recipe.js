const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  user: {
    userId: {
      Type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  category: {
    type: String,
    enum: [
      "Vegan",
      "Vegetarian",
      "SmallCalories",
      "Gourmet",
      "Fast",
      "Cocktail",
    ],
  },
  title: String,
  description: String,
  imgUrl: [String],
  duration: Number,
  notation: Number,
  isTop: Boolean,
});

module.exports = mongoose.model("Recipe", recipeSchema);
