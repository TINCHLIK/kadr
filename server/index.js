require('dotenv').config()
const cors = require('cors')
const express = require('express')
const sequelize = require("./db")
const fileUpload = require('express-fileupload')
const path = require('path')
const router = require('./routes/index')
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Xatolikni qayta ishlash
app.use(errorHandler)

const start=async()=>{
    try {
        app.listen(PORT, ()=>{console.log(`server ${PORT}-portda ishladi`)})
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
start()

