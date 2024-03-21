import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ActorRoute from './routes/Actor.js'

const port = process.env.PORT || 3000
const URL_MONGO = process.env.URL_MONGOOSE
const dbname = process.env.DBNAME

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(`${URL_MONGO}/${dbname}`)
        .then(() =>{
            console.log('Connected to Mongo ...')
        })
        .catch((err) =>{
            console.log('Error connection to mongo ...')
        })


app.use('/actor', ActorRoute);

app.listen(port, (err) => {
    if(!err)
        console.log('Server started at ' + port)
    else 
        console.log('Unable to start Server')

})