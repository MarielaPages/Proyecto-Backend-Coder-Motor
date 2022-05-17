const express = require("express");
const app = express();
const routesproductos = require('./routes/routesproductos')
const routegeneral = require('./routes/generalRoute')

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
app.use('/api/productos', routesproductos);
app.use('/', routegeneral)

//Le digo donde van a estar mis templates y prendo el motor
app.set('views', './views') // este no es necesario??
app.set('view engine', 'ejs')

//empiezo el server
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});

server.on('error', error => console.log(`Error en el servidor ${error}`))