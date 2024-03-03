require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONT_END = process.env.FRONT_END

const corsOptions = {
    origin: FRONT_END, // your localhost or deploy domain
    optionsSuccessStatus: 200 //  204 for the legacy browsers  
}
//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//---------------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Hello Node API')
})


//routes  
app.use('/api/products', productRoute);

app.use(errorMiddleware);

//---------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Node Api is running on port: ${PORT}`);
})
mongoose.connect(MONGO_URL)
.then( () => {
    console.log('connected to mongodb');
}).catch( () => {
    console.log(error);
})