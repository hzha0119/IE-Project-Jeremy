var input = document.getElementById('myInput');
var markers;
let markersArray = [];
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 10,
        center: { lat: -37.8136, lng: 144.9631 },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
}

$(document).ready(function () {
    initMap()
    $.getJSON('locations.json', function (jsondata) {
        markers = jsondata;
        //console.log(markers)
    })
});

//autocomplete(document.getElementById("myInput"), countries);

function myFunction() {
    //console.log(markers);
    var places = markers.map(x => x["General Practitioner (GP)"] + `*` + x["Address"]);
    autocomplete(document.getElementById("myInput"), places);
}


function addMarker(props, num) {
    var marker = new google.maps.Marker({
        position: props.Location,
        map: map,
        label: String(num)
    });

    // Check content
    if (props.Address) {
        var infoWindow = new google.maps.InfoWindow({
            maxWidth: 180,
            content: `<span style='text-align:center;font-weight:600'>${props['General Practitioner (GP)']}</span>`
                + `<br><strong>Address</strong>: ${props.Address}`
                + `<br><strong>Phone</strong>: ${props['Phone']}`,

        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });
    }

    markersArray.push(marker);
}

function clearOverlays() {
    for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray.length = 0;
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if ((!val) || (val.trim() == "")) {
            clearOverlays();
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);

        /*for each item in the array...*/
        clearOverlays();
        var tempCounter = 0;

        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if ((arr[i].toUpperCase().indexOf(val.trim().toUpperCase()) > -1) && (tempCounter < 10)) {
                tempCounter += 1;
                /*create a DIV element for each matching element:*/
                b = document.createElement("div");
                /*make the matching letters bold:*/
                var num1 = arr[i].toUpperCase().indexOf(val.toUpperCase());
                var num2 = num1 + val.length;

                var textString = "";
                textString += arr[i].substr(0, num1);
                textString += `<strong>${arr[i].substring(num1, num2)}</strong>`;
                textString += arr[i].substr(num2);

                var num3 = textString.indexOf("*");
                b.innerHTML += `${tempCounter}. `
                b.innerHTML += `<span style="font-size:14px;">${textString.substring(0, num3)}</span>`
                b.innerHTML += "<br>"
                b.innerHTML += `<span style="font-size:12px;font-style:italic">${textString.substring(num3 + 1)}</span>`

                b.innerHTML += `<input type='hidden' value="${arr[i]}">`

                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    var tempSting = this.getElementsByTagName("input")[0].value;

                    inp.value = tempSting.replace("*", " ");
                    clearOverlays();
                    addMarker(markers[arr.indexOf(tempSting)], '');

                    closeAllLists();
                });
                a.appendChild(b);
                addMarker(markers[i], tempCounter);
            }
        }
    });

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document, except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    /*execute a function when someone clicks in the document:*/
    // document.addEventListener("click", function (e) {
    //     closeAllLists(e.target);
    // });

    input.addEventListener("click", function (e) {
        closeAllLists();
    });
}