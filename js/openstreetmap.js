
//Objeto con los parametros de precision de la posicion, tiempo en conseguir las coordenadas y el maximo tiempo para utilizar las coordenadas de caché
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
};

//Consulta al navegador para que geolocalice nuestra ubicacion. Si no funciona, que nos muestre un mensaje
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );
}else{
    alert("Los servicios de geolocalizacion no funcionan");
}

//Funcion con la que creamos el mapa, creando variables de la latitud y longitud de nuestra ubicacion, y el zoom que se quiere
function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map("map", {
        center:[latitude, longitude],
            zoom: 14
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: "Mi mapa"}).addTo(map);
    
    
    //Definición de iconos personalizados que queremos de inicio y final de la ruta
    let inicio = L.icon({
        iconUrl: "../images/icono-ubi.png",
        iconSize: [55, 70],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    let final = L.icon({
        iconUrl: "../images/icono-ubi.png",
        iconSize: [60, 75],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    //Calculo de la ruta con el inicio de nuestra posicion y el final de la ubicación de la empresa añadiendolo mapa
    let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(41.3902278,2.1260703,17)
        ],
        language: "es",

        //Creacion de las marcas del inicio y final de la ruta

        createMarker: function(i, wp, Nwps){
            switch(i){
                case 0: 
                    return L.marker(wp.latLng,{icon:inicio, draggable:true}).bindPopup("Inicio");
                case Nwps -1: 
                    return L.marker(wp.latLng,{icon:final, draggable:true}).bindPopup("Final");
                };
        }

    }).addTo(map);
}


//Funcion para cuando de error la carga del mapa con la ubicacion de la empresa
function error(){
    let map = L.map("map", {
        center:[37.17059, -3.60552],
            zoom: 14
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: "Mi mapa"}).addTo(map);

};