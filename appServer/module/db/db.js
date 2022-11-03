const mongoose = require("mongoose");

const Db = "mongodb://0.0.0.0:27017/flut";

mongoose.Promise = global.Promise;

mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log(error.message);
  });
