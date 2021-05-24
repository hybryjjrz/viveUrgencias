import express from 'express';
import router from './routes/index.js'; 


//express base
const app = express(); //there can only be an instance of the app


//Defining PORT and HOST
const port = process.env.PORT || 4000;   //development stage

//Enable pug
app.set('view engine', 'pug');

//Get current Year
app.use( (req, res, next) => {

    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals. siteName = "Vive Urgencias"

    next();
});


//Defining public folder //needed for linking style sheets
app.use(express.static('public'));

//Adding router
app.use('/', router); //use supports get, post put patch and delete




//accessing the port, launching the server
app.listen(port, () => {
    console.log(`El servidor funciona en el puerto ${port}`);
});