var map;
  function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7891, lng: -73.135},
    zoom: 9,
    streetViewControl: false
  });
  let markers = stations.features;
//  console.log(markers);
  for(var x = 0; x < markers.length; x++){
    let stationName = markers[x].properties.stopname;
    let latitude = markers[x].geometry.coordinates[1];
    let longitude = markers[x].geometry.coordinates[0];
    //console.log(stationName + ": " + latitude + " " + longitude);
    dropMarker(latitude, longitude, stationName);
  }
}

function dropMarker(lat,lng, stationName){
  var location = {lat: lat, lng: lng};
  var contentString = "<h4>" + stationName + "</h4>";
  var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
  var marker = new google.maps.Marker({position: location, map: map, title: stationName});
  marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}
