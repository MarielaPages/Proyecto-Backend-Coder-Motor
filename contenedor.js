//creo la clase con sus metodos 
class Contenedor{
    constructor(){
        this.productos = [];
    }
    
    save(object){
        let posteriorId = 0;
        if(this.productos.legth === 0){
            posteriorId = 1
        }
        else{
            let ultimoId=0
            this.productos.forEach(element => {
                ultimoId=element.id
            });
            posteriorId = ultimoId + 1
        }
        let objeto = {
            id : posteriorId,
            title : object.title,
            price : object.price,
            thumbnail : object.thumbnail
        }
        this.productos.push(objeto);
        return objeto;
    }
    save2(object){
        let objeto = {
            id : object.id,
            title : object.title,
            price : object.price,
            thumbnail : object.thumbnail
        }
        this.productos.push(objeto);
        return objeto;
    }
    getById(id){
        const productoEncontrado = this.productos.find(producto => producto.id === id);
        console.log(productoEncontrado);
        if (productoEncontrado === undefined){
            const error = {error: 'producto no encontrado'};
            return error;
        }
        else{
            return productoEncontrado;
        }
    }
    getAll(){
        return this.productos;
    }
    deleteById(id){
        const productoEncontrado = this.productos.find(producto => producto.id === id);
        if(productoEncontrado){
            const arrayMenosProducto = this.productos.filter(producto => producto.id !== id);
            this.productos = arrayMenosProducto;
            console.log(`el producto fue eliminado existosamente`)
        } else{
            console.log(`no habia producto para eliminar`)
        }
    }
    async deleteAll(){
        const arrayEliminarTodo = [];
        this.productos = arrayEliminarTodo;
        console.log(`objetos eliminados exitosamente`)
    }
}

module.exports = Contenedor;

