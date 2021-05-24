import express from 'express';

const router = express.Router();


router.get('/', (req, res) => { //when we visit the main page //req what we send, res what we receive
    //res.send('Hola mundo'); //res.json creates a json response, res.render is used to show/print views
    res.render('login', {
        page: 'Bienvenido'
    });  //it'll search the view and then show it by sending it to the app through the router
});

router.get('/inicio', (req,res) => {
    
    

    res.render('base', { //inside this object we can send everything we want to the view, this way is ideal to pass the results of a query into the view || we have to specify the route inside the views folder
        page: 'Base'
    });
});

router.get('/almacen', (req, res) => {
    res.render('almacen', {
        page: 'Almacen'
    });
});

export default router; //exporting the router