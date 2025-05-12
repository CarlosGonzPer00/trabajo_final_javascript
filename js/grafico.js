//Lllamada con la que cargamos el paquete de graficos e idiomas que deesemos
google.charts.load("current", {
    "packages":["corechart"], 
    "language" : "es"
});
//Funcion para cargar el grafico una vez cargada la web
google.charts.setOnLoadCallback(dibujaGrafico);

//Funcion con la que definimos los diferentes elementos y contenido del gráico,  además de decirle de qúe tipo queremos(de barras) y su tamaño
function dibujaGrafico() {
    var data = new google.visualization.DataTable();
    data.addColumn ("string", "Tenista");
    data.addColumn ("number", "Grand Slams ganados");
        data.addRows ([
           ["Djokovic", 24],
           ["Nadal", 22],
           ["Federer", 20],
           ["Sampras", 14],
           ["Borg", 11],
           ["Lendl", 8],
           ["Connors", 8],
           ["Agassi", 8],
           ["McEnroe", 7],
           ["Wilander", 7],
         ]);
    var opciones = {"width":650,"height":400};
    var chart = new google.visualization.BarChart(document.getElementById("grafico-toptenistas"));
    chart.draw(data, opciones);
 }