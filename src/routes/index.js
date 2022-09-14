const { Router } = require('express');
const router = Router();

//se pueden crear aqui las rutas que se necesiten
//este es otra ruta
router.get('/test', (req, res) => {
    // res.send('Hola mundo');
    const data = {
        "Nombre": "Alberto",
        "Apellido: ": "Pardo",
        "Edad": 55
    };
    res.json(data);
});

//este es una ruta
router.get('/', (req, res) => {
    // res.send('Hola mundo');
    res.json({ "Nombre": "EliezerP", "Edad": 54 });
});
//esta ruta la comente xq se hizo de otra manera se creo un archivo aparte y despues
// se llamo desde la ruta del index principal
// router.get('/movies', (req, res) => {
//     res.send('movies......');
// });

module.exports = router;