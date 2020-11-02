function myFunction() {
    var places = ["Albany, WA", "Shark Bay, WA", "Jeremy Freo"];

    var inputs = document.getElementById("myInput");
    var x = inputs.value.toUpperCase();
    var newList = places.filter(word => word.toUpperCase().indexOf(x) > -1);

    var ul = document.getElementById("myUL");
    ul.innerHTML = newList.map(item => {
        return `<li>${item}</li>`;
    }).join("");
    
    initMap()
}

function initMap() {
    // Map new
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 4,
        center: { lat: -25.3444, lng: 131.0369 }
    });

    /*
    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords: event.latLng});
    });
    */

    /*
    // Add marker
    var marker = new google.maps.Marker({
        position: {lat: 42.4668, lng:-70.9495},
        map: map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow ({
        content: '<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
    */

    // Array of markers
    var markers = [
        {
            coords: { lat: -35.0269, lng: 117.8837 },
            content: '<h1>Albany, WA</h1>'
        },
        {
            coords: { lat: -25.7834, lng: 113.2988 },
            content: '<h1>Shark Bay, WA</h1>'
        },
        {
            coords: { lat: -30.7490, lng: 121.4660 },
            content: '<h1>Jeremy, FREO</h1>'
        }
    ];

    // Loop through marks
    for (var i = 0; i < markers.length; i++) {
        
        var x = addMarker(markers[i], i);
        // x.setMap(null);
    }

    // Add Mark Function
    function addMarker(props, num) {
        var marker = new google.maps.Marker({
            position: props.coords,
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
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }

        return marker;
        //marker.setMap(null);
    }


}