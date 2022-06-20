mapboxgl.accessToken = 'pk.eyJ1IjoibWlzaGF2YWlkIiwiYSI6ImNsM3U4bHR3bjI4ZWUzaW9leGlrbXN2ZmcifQ.JA7tcQL3G1x8i7fZuWw2nA';
var map = new mapboxgl.Map({
  container: "map",
  projection: 'naturalEarth',
  style:  "mapbox://styles/mishavaid/cl4irdogp003815nyyybwxmjc",
  zoom: 0.6,
  center: [0, 0]

})

const size = 200;

map.on("load", function () {
    map.addLayer({
      id: "election_day",
      type: "fill",
      source: {
        type: "geojson",
        data: "https://raw.githubusercontent.com/mishavaid7/mapping-datasets/main/countriesHoliday_main.geojson",
      },
      paint: {
        "fill-color": [
          "match",
          ["get", "public_holiday"],
          "Weekend", "#377eb8",
          "Public holiday", "#4daf4a",
          "Public Holiday", "#4daf4a",
          "Not a public holiday", "#e41a1c",
          "No direct elections", "#ff7f00",
          "No data available", "#c4c4c4",
          "#ffffff",
        ],
        "fill-outline-color": "#ffffff",
      },
    },
      "waterway-label"
      ); 

      
  });



  // Create the popup
map.on('click', 'election_day', function (e) {
    var countryName = e.features[0].properties.ADMIN;
    var description = e.features[0].properties.desc.toLocaleString();
    
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<p>' + countryName +  description + '</p>'
            )
        .addTo(map);
    });
    map.on('mouseenter', 'election_day', function () {
    map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'election_day', function () {
    map.getCanvas().style.cursor = '';
    });