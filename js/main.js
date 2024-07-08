const packProducto$ = [
  {id:1, nombre:"Pantalon y Remera", precio:1200},
  {id:2, nombre:"Pantalon y Campera", precio:2000},
  {id:3, nombre:"Equipo de Fútbol", precio:2500},
  ]

class PacksProductos {
  constructor(productos) {
    this.items = productos;
  }

  buscarProdcto(id) {
    return this.items.find(productoPack => productoPack.id == id );
  }

  obtenerProducto() {
    return this.items;
  }

  totalProductos() {
    return this.items.length;
  }

  descuentito(cantidad, precio) {
    if (cantidad >= 10) {
      this.descuent = (precio * cantidad) * 0.9;
    }
    else if (cantidad >= 20) {
      this.descuent = (precio * cantidad) * 0.8;
    }
    else if (cantidad >= 30) {
      this.descuent = (precio * cantidad) * 0.7;
    }
    else {
      this.descuent = precio * cantidad;
    }
    let plataDescontada = this.descuent - (precio * cantidad);
    console.log("Plata descontada: " + plataDescontada);
    let descuento = this.descuent;
    return descuento;
  }

  pagarEnCuotas (meses) {
    let cuotas = this.descuentito() / meses;
    return cuotas;
  }

  listaFinal() {
    let salida =
    `Usted lleva la cantidad de ${cantidadProducto} productos del pack (${packElecto.nombre} $${packElecto.precio} "c/u") por el precio de $${Preciofinal}.`;
    alert (salida);
  }
}  

const catalogo = new PacksProductos(packProducto$);
console.log(catalogo.obtenerProducto());

let electo = prompt("Elige un pack:\n1 - (Pantalon y Remera $1200)\n2 - (Pantalon y Campera $2000)\n3 - (Equipo de Fútbol $2500)");
let cantidadProducto = prompt("Ingrese la cantidad que quiere llevar de este producto:");

let packElecto = catalogo.buscarProdcto(electo);
console.log("Precio del producto: " + packElecto.precio + ` X ${cantidadProducto}`);

console.log("Monto final: "+ catalogo.descuentito(cantidadProducto, packElecto.precio));
let Preciofinal = catalogo.descuentito(cantidadProducto, packElecto.precio);
catalogo.listaFinal();
console.log(catalogo.pagarEnCuotas(4));

