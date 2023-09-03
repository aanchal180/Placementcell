
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb+srv://new_CSV:new_CSV@cluster0.gbjrkub.mongodb.net/placement?retryWrites=true&w=majority"; 
// const mongoDB = "mongodb+srv://pawan9934gupta:P5b6iGgMwaagyNrO@cluster0.cgzpw6t.mongodb.net/Placement-Cell?retryWrites=true&w=majority";
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected');
}
