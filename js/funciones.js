const productos = [
    {id:1 , nombre:"Pesadillas Nocturnas", precio:2000, imagen:"https://lucasbernalb.github.io/PreEntrega.Bernal/img/productos/cuadros/cuadro%20negro.jpg", categoria:"cuadros"},
    {id:2 , nombre:"Desurbanismo", precio:2500, imagen:"https://lucasbernalb.github.io/PreEntrega.Bernal/img/productos/cuadros/desurbanismo.jpg", categoria:"cuadros"},
    {id:3 , nombre:"Cielo y Tierra", precio:2500, imagen:"https://lucasbernalb.github.io/PreEntrega.Bernal/img/productos/cuadros/entre%20el%20cielo%20y%20la%20tierra.jpg", categoria:"cuadros"},
    {id:4 , nombre:"Condor", precio:2000, imagen:"https://lucasbernalb.github.io/PreEntrega.Bernal/img/productos/cuadros/mi%20condor.jpg", categoria:"cuadros"},
    {id:5 , nombre:"Todo lo que existe", precio:3000, imagen:"https://lucasbernalb.github.io/PreEntrega.Bernal/img/productos/cuadros/todo%20lo%20que%20existe.jpg", categoria:"cuadros"},
    {id:6 , nombre:"Mi sol", precio:2000, imagen:"https://lucasbernalb.github.io/PreEntrega.Bernal/img/productos/cuadros/mujer%20en%20ventada.jpg", categoria:"cuadros"},
    {id:7 , nombre:"Cenizas", precio:2500, imagen:"https://lucasbernalb.github.io/PreEntrega.Bernal/img/productos/cuadros/mujer%20y%20fuego.jpg", categoria:"cuadros"},
    {id:8 , nombre:"Parte del aire", precio:4000, imagen:"https://lucasbernalb.github.io/PreEntrega.Bernal/img/productos/cuadros//parte%20del%20aire.jpg", categoria:"cuadros"},
]

function renderProductos(productos) {
    let contenidoHTML = "";

    for(const producto of productos) {
        contenidoHTML += `<div class="col-md-3 my-4">
        <div class="card border-1 ">
            <img src="${producto.imagen}" class="card-img-top  alt="${producto.nombre}">
            <div class="card-body text-center"">
                <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio} UYU</span></p>
                <p class="card-text"><button class="btn btn-danger rounded-2" onclick="agregarProductos(${producto.id});">Agregar (+)</button></p>
            </div>
        </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenidoHTML;
}

function agregarProductos(id) {
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLocalS();
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    console.log(`El producto ${producto.nombre} se ha agregado correctamente!`);
}

function renderBotonCarrito() {
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML = total;

}

function eliminarCarritoLS(id) {
    const carrito = cargarCarritoLocalS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
    console.log("El producto #" + id + " ha sido removido correctamente"); 
}

function totalProductos() {
    const carrito = cargarCarritoLocalS();

    return carrito.length;
}

function cargarCarritoLocalS() {
    return carrito = JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));

}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    console.log("El carrito se ha vaciado correctamente"); 
}

function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);

    return producto;
}

function sumarProductosCarrito() {
        let precio = JSON.parse(localStorage.getItem("carrito"));
        const productoPrecio = productos.reduce(item => item.precio == precio);
        document.getElementById("totalPagar").innerHTML = productoPrecio;
        
}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}

console.log(sumarProductosCarrito());