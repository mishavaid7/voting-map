mapboxgl.accessToken = 'pk.eyJ1IjoibWlzaGF2YWlkIiwiYSI6ImNsM3U4bHR3bjI4ZWUzaW9leGlrbXN2ZmcifQ.JA7tcQL3G1x8i7fZuWw2nA';
var map2 = new mapboxgl.Map({
  container: "map2",
  projection: 'naturalEarth',
  style:  "mapbox://styles/mishavaid/cl4irdogp003815nyyybwxmjc",
  zoom: 0.6,
  center: [0, 0]

})

map2.on("load", function () {
    let layers = map2.getStyle().layers;
        for (var i=0; i<layers.length; i++) {
        console.log(layers[i].id)}; 
        
    map2.addLayer(
            {
              id: "voter_turnout_fill",
              type: "fill",
              source: {
                type: "geojson",
                data: "https://raw.githubusercontent.com/mishavaid7/mapping-datasets/main/countriesTurnoutFinal.geojson",
              },
              paint: {
                "fill-color": "#333",
                "fill-outline-color": "#ffffff",
                "fill-opacity": [
                  "step",
                  ["get", "voter_turnout"],
                  0, 
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                  80,
                  90,
                  "#ffffff"
                 ,
                ],
              },
            },
           "waterway-label"
          );
      
  });