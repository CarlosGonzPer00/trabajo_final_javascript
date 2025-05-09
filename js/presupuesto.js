const seccionPresupuesto = document.getElementById("seccion-formulario");
const selectorRaqueta = document.getElementById("seleccion-raqueta");
const checkboxExtra = document.querySelectorAll(".checkbox-extra");
const inputDescuento = document.getElementById("plazo");
const compraFinal = document.getElementById("compra-final");

//Funcion con la que pretendemos calcular el total de la compra en base a las opciones seleccionadas
function calcularTotal(){
    //Variables con la que recuperamos el valor de la raqueta seleccionada y se lo añadimos al valor de la compra final
    let valorSelectorRaqueta = parseFloat(selectorRaqueta.value) || 0;
    let totalCompra = 0;
    totalCompra += valorSelectorRaqueta;
    //Bucle con el que en función de los checkbox (extras) seleccionados vamos añadiendo su valor a la compra final, seleccionando todos los que queramos
    checkboxExtra.forEach((checkbox) => {
        if(checkbox.checked){
            totalCompra += parseFloat(checkbox.value);
        };
    });

    //Variable con la que recuperamos el valor del campo de texto del descuento
    let valorInputDescuento = parseFloat(inputDescuento.value) || 0;

    
    //Condicional que comprueba que si la primera opcion seleccionada (raqueta principal), si su valor es un numero reflejo en un texto el resultado de la compra con todos los productos seleccionados y procede al descuento. Si determina que no es numero su valor, deja el valor de la compra en 0
    if(!isNaN(valorSelectorRaqueta)){

        //Condicional que descuenta cierto porcentaje en base al numero(días) escrito en el campo de texto
        if(valorInputDescuento >= 1 && valorInputDescuento < 8){
            totalCompra = totalCompra - (totalCompra * 0.05);
        }else if(valorInputDescuento >= 8 && valorInputDescuento < 15){
            totalCompra = totalCompra - (totalCompra * 0.10);
        }else if(valorInputDescuento >= 15 && valorInputDescuento < 21){
            totalCompra = totalCompra - (totalCompra * 0.15);
        }else if(valorInputDescuento >= 21 && valorInputDescuento < 30){
            totalCompra = totalCompra - (totalCompra * 0.20);
        }else if(valorInputDescuento >= 30){
            totalCompra = totalCompra - (totalCompra * 0.25);
        } 
    
        compraFinal.textContent = `Precio de la compra final: ${totalCompra.toFixed(2)}€`;
    }else{
        compraFinal.textContent = `Precio de la compra final: 0€`;
    }
}

//Evento que calcula el total de la compra final en cuanto a cambios en los input y checkbox de la compra de ciertos productos
seccionPresupuesto.addEventListener("change", calcularTotal);


