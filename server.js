const express = require('express');
const app = express();

// Se agregan assets y scripts externos
app.use(express.static('app'));
app.use(express.static('assets'));

// se generan los routes para navegar
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});
app.get('/contacto', function (req, res) {
    res.send('Página de contacto!!!');
    res.sendFile(__dirname + '/contacto.html');
});

// escucahr el puerto de enlace 3000
app.listen(3000, () => {
    console.log('Servidor web corriendo en puerto 3000');
});