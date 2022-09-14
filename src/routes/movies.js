const { Router } = require('express');
const router = Router();
const movies = require('../sample.json');
const _ = require('underscore'); //biblioteca para borrar 

//me muestra por la consola el contenido del archivo json especificamente
//movies.json
//console.log(movies);

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    //si quiero agregar desde el post un registration
    const { title, director, year, rating } = req.body; //guardo lo que tengo en el req.boy en  el objeto
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {...req.body, id };
        //console.log(newMovie);
        movies.push(newMovie);
        //res.json('saved'); //mostraria este menj
        res.json(movies);
    } else {
        res.send('wrong request');
    }
    //si deseo solo recibir algo y mandar señal que el servidor lo recivio
    //console.log(req.body);  
    //res.send('recivido');
})


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director == director;
                movie.year == year;
                movie.rating == rating;
            }
        })
        res.json(movies);
    } else {
        res.status(500).json({ error: "Hubo un error..." });
    }
})

router.delete('/:id', (req, res) => {
    // console.log(req.params); //mostrar por consola  como req.params devuelve todo el contenido  del arreglo
    // res.send('eliminado.....');
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    })
    res.send(movies);
})

module.exports = router;