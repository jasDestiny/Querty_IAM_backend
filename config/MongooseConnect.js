const mongoose=require("mongoose");

const connector = mongoose.connect(process.env.MONGO_CONNECTION);