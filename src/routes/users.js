/*
node-fetchfrom v3 es un módulo exclusivo de ESM: no puede importarlo con 
require(). Si no puede cambiar a ESM, utilice v2, que sigue siendo 
compatible con CommonJS. Se seguirán publicando correcciones de errores 
críticos para v2.
==> "npm instalar nodo-fetch@2"
*/

const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async(req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    // si queremos enviar al cliente en el browser lo hacemos asi:
    res.json(users);
    //de la siguiente manera se envian por consola
    // console.log(users);
    // res.send('users');
});

module.exports = router;