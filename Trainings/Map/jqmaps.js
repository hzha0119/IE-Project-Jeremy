var input = document.getElementById('myInput');
var ul = document.getElementById('myUL');
var markers;
let markersArray = [];
var map;

$(document).ready(function () {
    $.getJSON('locations.json', function (jsondata) {
        markers = jsondata;
        //console.log(markers)
    })
});

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 10,
        center: { lat: -37.8136, lng: 144.9631 },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl:false
    });
}

function myFunction() {
    //console.log(markers);
    var places = markers.map(x => x["General Practitioner (GP)"] + ' ' + x["Address"]);
    
    var newList = [];
    var x = input.value.toUpperCase();

    if (x.trim() != ""){
        newList = places.filter(word => word.toUpperCase().indexOf(x) > -1);
    }

    if(newList.length > 10) {
        newList = newList.slice(0,10);
    }

    ul.innerHTML = newList.map(item => {
        return `<li>${item}</li>`;
    }).join("");

    clearOverlays();

    for (var i = 0; i < newList.length; i++) {
        //console.log(i);
        var n = places.indexOf(newList[i]);
        //console.log(n);
        if(n > -1) {
            var m = addMarker(markers[n], i);
        }
    }

}


function addMarker(props, num) {
    var marker = new google.maps.Marker({
        position: props.Location,
        map: map,
        label: String(num + 1)

        //icon: props.iconImage
    });

    // Check for custom icon
    if (props.iconImage) {
        // Set icon image
        marker.setIcon(props.iconImage);
    }

    // Check content
    if (props.Address) {
        var infoWindow = new google.maps.InfoWindow({
            content: `<span style='text-align:center;font-weight:600'>${props['General Practitioner (GP)']}</span>` 
                    + `<br><b>Address</b>: ${props.Address}` 
                    + `<br><b>Phone</b>: ${props['Phone']}`
        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });
    }

    markersArray.push(marker);
    // return marker;
    //marker.setMap(null);
}

function clearOverlays() {
    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }