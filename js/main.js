// const packProducto$ = [
//   {id:1, nombre:"Pantalon y Remera", precio:1200},
//   {id:2, nombre:"Pantalon y Campera", precio:2000},
//   {id:3, nombre:"Equipo de Fútbol", precio:2500},
//   ]

// class PacksProductos {
//   constructor(productos) {
//     this.items = productos;
//   }

//   buscarProdcto(id) {
//     return this.items.find(productoPack => productoPack.id == id );
//   }

//   obtenerProducto() {
//     return this.items;
//   }

//   totalProductos() {
//     return this.items.length;
//   }

//   descuentito(cantidad, precio) {
//     if (cantidad >= 10) {
//       this.descuent = (precio * cantidad) * 0.9;
//     }
//     else if (cantidad >= 20) {
//       this.descuent = (precio * cantidad) * 0.8;
//     }
//     else if (cantidad >= 30) {
//       this.descuent = (precio * cantidad) * 0.7;
//     }
//     else {
//       this.descuent = precio * cantidad;
//     }
//     this.plataDescontada = this.descuent - (precio * cantidad);
//     console.log("Plata descontada: " + this.plataDescontada);
//     let descuento = this.descuent;
//     return descuento;
//   }

//   infoCuotas (validacion) {
//     this.info = 0;
//     if (validacion === "SI".toUpperCase()){
//       this.info = prompt("Escriba en cuantos meses desea pagar:")
      
//     }
//     else if (validacion === "NO".toUpperCase()){
//       this.info = 0; 
//     }
//     else {
//       alert("No a escrito correctamente");
//     }
//     console.log(`Cuotas a pagar ${this.info}`)
//   }
  
//   pagarEnCuotas () {
//     let cuotasFinal = this.descuent / this.info; 
//     this.cuotas123 = cuotasFinal.toFixed(2);
//     return cuotasFinal;
//   }

//   listaFinal() {
//     let salida =
//     `Usted lleva la cantidad de ${cantidadProducto} productos del pack (${packElecto.nombre} $${packElecto.precio} "c/u") por el precio de $${Preciofinal}, ya con un descuento de $${this.plataDescontada}.`;
//     alert (salida);
//   }

//   listaFinalCuotas () {
    
//     let salida2 = (`Usted lleva la cantidad de ${cantidadProducto} productos del pack (${packElecto.nombre} $${packElecto.precio} "c/u"). El monto final a pagar es: $${Preciofinal} en un total de ${this.info} cuotas ($${this.pagarEnCuotas()} cada cuota).`);
//     alert(salida2);
//   }
// }  

// const todosLosProductos = new PacksProductos(packProducto$);
// console.log(todosLosProductos.obtenerProducto());

// let electo = prompt("Elige un pack:\n\n1 - Pantalon y Remera $1200\n2 - Pantalon y Campera $2000\n3 - Equipo de Fútbol $2500");
// let cantidadProducto = prompt("Ingrese la cantidad que quiere llevar de este producto:\n\nLlevando más de 10 tendra un 10% OFF\nLlevando más de 20 tendra un 20% OFF\nLlevando más de 30 tendra un 30% OFF");

// let packElecto = todosLosProductos.buscarProdcto(electo);
// console.log(todosLosProductos.buscarProdcto(1));
// console.log("Precio del producto: " + packElecto.precio + ` X ${cantidadProducto}`);

// console.log("Monto final: "+ todosLosProductos.descuentito(cantidadProducto, packElecto.precio));
// let Preciofinal = todosLosProductos.descuentito(cantidadProducto, packElecto.precio);
// todosLosProductos.listaFinal();
// let pagarEnCuotas1 = prompt(`¿Desea pagar en cuotas? Escriba "si" o "no".`).toUpperCase();
// let decisionCuotas = todosLosProductos.infoCuotas(pagarEnCuotas1);

// todosLosProductos.listaFinalCuotas();
// alert(`Gracias por su compra:))))`);



function renderProductos() {
    let contenidoHTML = "";

    for(const producto of productos) {
        contenidoHTML += `<div class="col-md-3 my-4">
        <div class="card border-1">
            <a href="/producto.html" onclick="guardarProductoLS(${producto.id});">
                <img src="${producto.imagen}" class="card-img-top"  alt="${producto.nombre}">
            </a>
            <div class="card-body text-center">
                <p class="card-text"><b>${producto.nombre}</b><br><span class="text-danger">$${producto.precio} UYU</span></p>
                <p class="card-text"><button class="btn btn-danger rounded-2" onclick="agregarProductos(${producto.id});">Agregar <i class="bi bi-cart-plus"></i></button></p>
            </div>
        </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenidoHTML;
}

renderProductos(productos);
renderBotonCarrito();