while (true){
    let nombreUsuario = prompt("Ingrese su nombre completo: (ESC para salir)");
    if(nombreUsuario.toUpperCase() === "ESC")break;
    
    
        let textoPackProducto = "Elija el pack del producto que desea comprar:\n\n"
        textoPackProducto += "1 - Pantalon y Remera (1.200$)\n";
        textoPackProducto += "2 - Pantalon y Campera (2.000$)\n";
        textoPackProducto += "3 - Pantalon Remera y Campera (2.800$)\n";
        let packElecto = parseInt(prompt(textoPackProducto));
        let textoCantidad = ("Seleccione la cantidad que desea llevar del producto:\n\n");
        textoCantidad += "Llevando 10 o mas te descontamos el 10%\n";
        textoCantidad += "Llevando 20 o mas te descontamos el 20%\n";
        textoCantidad += "Llevando 30 o mas te descontamos el 30%\n";
        let cantidad = parseInt(prompt(textoCantidad));
        let textoCuotas = "¿En cuantas cuotas desea pagar?\n\n";
        textoCuotas += "1 - 3 Cuotas\n";
        textoCuotas += "2 - 6 Cuotas\n";
        textoCuotas += "3 - 9 Cuotas\n";
        textoCuotas += "4 - 12 Cuotas\n";
        let cuotas = parseInt(prompt(textoCuotas));
        
        let precioPack = 0;
        
        if (packElecto == 1) {
             precioPack = 1200;   
        } else if (packElecto == 2) {
              precioPack = 2000;   
        } else if (packElecto == 3) {
              precioPack = 2800; 
        }
        
         let montoSinDescuento = calcularMontoSin(precioPack, cantidad);
         console.log("Precio sin descuento: " + montoSinDescuento);
         let montoConDescuento = 0;
         
         if (cantidad >= 10){
             montoConDescuento = montoSinDescuento * 0.9;
        } else if (cantidad >= 20){
            montoConDescuento = montoSinDescuento * 0.8;
            } else if (cantidad >= 10){
            montoConDescuento = montoSinDescuento * 0.7;
            }
            else {
                montoConDescuento = montoSinDescuento ;
            }
    
        function calcularMontoSin(precioPack, cantidad){
            return precioPack * cantidad
        }
        
    
        
        let precioConCuotas = 0;
        
        if (cuotas == 1){
            precioConCuotas = montoConDescuento / 3;
            precioFinal = precioConCuotas + "$ (3 Meses)";
        } else if (cuotas == 2){
            precioConCuotas = montoConDescuento / 6;
            precioFinal = precioConCuotas + "$ (6 Meses)";
        } else if (cuotas == 3){
            precioConCuotas = montoConDescuento / 9;
            precioFinal = precioConCuotas + "$ (9 Meses)";
        } else if (cuotas == 4){
            precioConCuotas = montoConDescuento / 12;
            precioFinal = precioConCuotas + "$ (12 Meses)";
        }
        
        console.log("Precio con descuento " + montoConDescuento);
        console.log("Precio final a pagar " + precioConCuotas);
        
        InformacionDeLaCompra(nombreUsuario, packElecto, cantidad, montoSinDescuento, montoConDescuento, precioFinal)
         nombreUsuario = prompt("Ingrese otro nombre completo: (ESC para salir)");
        }
         
            function InformacionDeLaCompra(nombre, pack, cantidad,  montoSinD, montoConD, precio){
                let textoPack;
            
                if (pack == 1) {
                    textoPack = "Pantalon y remera (1200$) " + " X " + cantidad + " Unidades";
                } else  if (pack == 2) {
                    textoPack = "Pantalon y Campera";
                } else if (pack == 3) {
                    textoPack = "Pantalon Remera y Campera";
                }
               alert ("Usuario: " + nombre + "\nPack: " + textoPack + "\nPrecio sin descuento: " + montoSinD + "\nPrecio con descuento: " + montoConD + "\nCuota a pagar: " + precio)       
            }