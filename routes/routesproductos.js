const Contenedor = require("../contenedor");
const { Router } = require('express');
const res = require("express/lib/response");
const router = Router();

const archivoNuevo = new Contenedor();

router.get("/", (request, response) => {
    const productos = archivoNuevo.getAll();
    response.render('pages/list', {productos: productos}); // Lo busca en views
});

router.get("/:id", (request, response) => {
    const { id } = request.params;
    const productoSegunId = archivoNuevo.getById(parseInt(id));
    response.json(productoSegunId);
});

router.post('/', (request, response) => {
    const producto = request.body; // esto es el objeto que llega con los datos. Lo uso para pasarselo al save
    const productoAgregado = archivoNuevo.save(producto)
    response.redirect('/')
})

router.put("/:id", (request, response) => {
    const { id } = request.params;
    const idParse = parseInt(id);
    const productos = archivoNuevo.getAll();
    arrayIndexPorId = [] // aqui me guardo para cada elemento su id y el indice que tiene en el array
    productos.forEach((element, index) => {
        arrayIndexPorId.push({elemId: element.id, elemIndex:index})
    }); // uso esto para guardar id e indice en array
    const productoASuplirIdIndex = arrayIndexPorId.find(producto => producto.elemId === idParse); // busco el objeto que tiene el id del objeto a borrar y el indice del objeto en el array productos
    const indexElemSuplir = productoASuplirIdIndex.elemIndex; // obtengo el indice en el array productos del objeto a borrar (objeto cuyo id es el que se corresponde con el que quiero borrar)
    const productoModifEntrante = request.body; //guardo objeto con la data con la que quiero suplantar el otro objeto
    const productoModif = {id : idParse, ...productoModifEntrante} // armo objeto. Le pongo el mismo id del que voy a eliminar y le agrego la info con la que quiero suplirlo
    productos.splice(indexElemSuplir, 1, productoModif) //borro elemento con el id corresp y lo reemplazo por el nuevo objeto
    archivoNuevo.deleteAll(); // borro todo para llenar mi objeto archivoNuevo con los objetos que ahora tiene productos (mismos de antes con uno reemplazado)
    productos.forEach(element => {
        archivoNuevo.save2(element);
    }) // lleno archivoNuevo con los productos
    response.json({productoModificado: productoModif}) 
});

router.delete("/:id", (request, response) => {
    const { id } = request.params;
    archivoNuevo.deleteById(parseInt(id));
    response.json({mensaje:'producto borrado con exito'})
});

module.exports = router;

