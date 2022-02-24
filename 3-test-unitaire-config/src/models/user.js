const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    avatar: String,
    role: {
      type: String,
      enum: ["Member", "Admin"],
    },
    recipes: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        recipeId: { type: Schema.Types.ObjectId, ref: "Recipe" },
      },
    ],
    favorite: [{ recipeId: { type: Schema.Types.ObjectId, ref: "Recipe" } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
