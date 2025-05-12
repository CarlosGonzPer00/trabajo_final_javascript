document.addEventListener("DOMContentLoaded", function(){

    //Funcion para cargar las noticias desde el archivo JSON
    fetch("./json/datos.json")
        .then(response => response.json())
        .then(data => {
            const contenedorNoticias = document.querySelector(".contenido-noticias");
            //Creacion de la caja de la noticia con los distintos elementos que hay en el JSON
            data.forEach(noticia => {
                contenedorNoticias.innerHTML += `
                <div class="contenedor-noticia">
                    <div class="contenedor-imagen-noticia">
                        <img class="imagen-noticia" src="${noticia.imagen}" alt="Imagen de la noticia">
                    </div>
                
                    <div class="contenido-noticia">
                        <div class="titular-noticia">
                            <h2>${noticia.titular}</h2>
                        </div>
                        <div class="fecha-noticia">
                            <p>${noticia.fechaPublicacion}</p>
                        </div>
                        <div class="subtitulo-noticia">
                            <p>${noticia.subtitulo}</p>
                        </div>
                        <div class="link-noticia">
                            <button><a href="${noticia.link}"> Leer más </a></button>
                        </div>
                    </div>
                </div>
            `
            });
        })
        //Opción para cuando de error la carga de datos
        .catch(error => console.error("Error al obtener los datos: ", error));
})