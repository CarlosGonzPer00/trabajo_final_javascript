
flechaIzquierda = document.getElementById("fizq");
flechaDerecha = document.getElementById("fder");

//Función para mover el carrusel a la izquierda teniendo en cuenta la posicion de cada imagen 
function moverIzquierda(){
    var imagen5;
    imagen5 = document.getElementById("imagen5").src;

    var imagenCentroIzq;
    imagenCentroIzq = document.getElementById("imagen4").src;

    document.getElementById("imagen5").src = document.getElementById("imagen1").src;
    document.getElementById("imagen1").src = document.getElementById("imagen2").src;
    document.getElementById("imagen2").src = document.getElementById("imagen3").src;
    document.getElementById("imagen3").src = document.getElementById("imagen4").src;
    document.getElementById("imagen4").src = imagen5;
    document.getElementById("imagen").src = imagenCentroIzq;

    //Condicional para comprobar segun la imagen central grande que sea. ponerle un texto a cada una de ellas

    if(document.getElementById("imagen").src.includes("images/rolandgarros.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>Roland Garros</h2>";
    }else if(document.getElementById("imagen").src.includes("images/openaustralia.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>Open Australia</h2>";
    }else if(document.getElementById("imagen").src.includes("images/usopen.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>US Open</h2>";
    }else if(document.getElementById("imagen").src.includes("images/wimbledon.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>Wimbledon</h2>";
    }else if(document.getElementById("imagen").src.includes("images/copadavis.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>Copa Davis</h2>";
    }
}


//Función para mover el carrusel a la derecha teniendo en cuenta la posicion de cada imagen 

function moverDerecha(){
    var imagen1;
    imagen1 = document.getElementById("imagen1").src;

    var imagenCentroDer;
    imagenCentroDer = document.getElementById("imagen2").src;

    document.getElementById("imagen1").src = document.getElementById("imagen5").src;
    document.getElementById("imagen5").src = document.getElementById("imagen4").src;
    document.getElementById("imagen4").src = document.getElementById("imagen3").src;
    document.getElementById("imagen3").src = document.getElementById("imagen2").src; 
    document.getElementById("imagen2").src = imagen1;
    document.getElementById("imagen").src = imagenCentroDer;

    //Condicional para comprobar segun la imagen central grande que sea. ponerle un texto a cada una de ellas
    if(document.getElementById("imagen").src.includes("images/rolandgarros.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>Roland Garros</h2>";
    }else if(document.getElementById("imagen").src.includes("images/openaustralia.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>Open Australia</h2>";
    }else if(document.getElementById("imagen").src.includes("images/usopen.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>US Open</h2>";
    }else if(document.getElementById("imagen").src.includes("images/wimbledon.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>Wimbledon</h2>";
    }else if(document.getElementById("imagen").src.includes("images/copadavis.jpg")){
        document.getElementById("texto-imagengrande").innerHTML = "<h2>Copa Davis</h2>";
    }
}

//Evento que al pulsar en las fechas, hagan los movimientos de izquierda o derecha
flechaIzquierda.addEventListener("click", moverIzquierda);
flechaDerecha.addEventListener("click", moverDerecha);


