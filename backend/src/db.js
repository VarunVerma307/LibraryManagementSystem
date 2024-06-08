const  mongoose  = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
async function connectDb(){
mongoose.connect(process.env.DB_URI)

}
module.exports = {  connectDb}