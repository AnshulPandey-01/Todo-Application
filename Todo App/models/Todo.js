const mongoose = require("mongoose");

const TododScheme = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
});

module.exports = new mongoose.model("Todo", TododScheme);