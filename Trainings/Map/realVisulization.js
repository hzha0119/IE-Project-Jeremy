var firebaseConfig = {
    apiKey: "AIzaSyCvHXFp8UacIuaKJxY-o1fTsrnojfydSRY",
    authDomain: "tutorial-503bc.firebaseapp.com",
    databaseURL: "https://tutorial-503bc.firebaseio.com",
    projectId: "tutorial-503bc",
    storageBucket: "tutorial-503bc.appspot.com",
    messagingSenderId: "893460198749",
    appId: "1:893460198749:web:ee25ebd56130174f9224b4",
    measurementId: "G-XMKCMG5RXB"
};
firebase.initializeApp(firebaseConfig);

var database;
var datas = getData();

function getData() {
    firebase.database().ref('/').once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            //var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            database = childData['records'];
            //console.log(database);
            DrawData();
        })
    });
}

function setCategory(valueNum) {
    var pinPoint1 = 42, pinPoint2 = 50;
    if (valueNum < pinPoint1) {
        return "Low";
    }
    else if (valueNum >= pinPoint1 && valueNum < pinPoint2) {
        return "Medium";
    }
    else {
        return "High";
    }
}

function DrawData() {
    console.log(database);
    // var datas = database.slice(1).map(function(x) {
    //     return {category: setCategory(x['score']), value: x['score']};
    // });
    // console.log(datas);
    var medium = database.filter(x => setCategory(x['score']) == "Medium").length;
    var low = database.filter(x => setCategory(x['score']) == "Low").length;
    var high = database.filter(x => setCategory(x['score']) == "High").length;
    var dataset = [{ label: "Low", count: low }, { label: "Medium", count: medium }, { label: "High", count: high }];
    console.log(dataset);


    // chart dimensions
    var width = 800;
    var height = 400;
    var radius = Math.min(width, height) / 2;

    // legend dimensions
    var legendRectSize = 12;
    var legendSpacing = 5;

    // define color scale
    var color = d3.scaleOrdinal().domain(dataset).range(["red", "green", "yellow"]);

    var svg = d3.select('#pie')
        .append('svg')
        .attr('width', width)
        .attr('height', height) 
        .append('g') 
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    var arc = d3.arc().innerRadius(0).outerRadius(radius);
    var pie = d3.pie().value(function (d) { return d.count; });
 
    // define tooltip
    var tooltip = d3.select('#pie').append('div').attr('class', 'tooltip');

    tooltip.append('div').attr('class', 'label');
    tooltip.append('div').attr('class', 'count');
    tooltip.append('div').attr('class', 'percent');


    dataset.forEach(function (d) {
        d.count = +d.count; // calculate count as we iterate through the data
        d.enabled = true; // add enabled property to track which entries are checked
    });



    // creating the chart
    var path = svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function (d) { return color(d.data.label); })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)
        .each(function (d) { this._current - d; });


    // mouse event handlers are attached to path so they need to come after its definition
    path.on('mouseover', function (d) {
        var total = d3.sum(dataset.map(function (d) {
            return (d.enabled) ? d.count : 0;
        }));
        var percent = Math.round(1000 * d.data.count / total) / 10;
        tooltip.select('.label').html(`<b>${d.data.label}</b>`);
        tooltip.select('.count').html('Count: ' + d.data.count);
        tooltip.select('.percent').html(percent + '%');
        tooltip.style('font-size', 16)
        tooltip.style('display', 'block');
    });

    path.on('mouseout', function () {              
        tooltip.style('display', 'none');
    });

    path.on('mousemove', function (d) {             
        tooltip.style('top', (d3.event.layerY + 10) + 'px')
            .style('left', (d3.event.layerX + 10) + 'px');
    });


    svg
        .selectAll('SLICE')
        .data(pie(dataset))
        .enter()
        .append('text')
        .text(function (d) { return d.data.label })
        .attr("transform", function (d) { return `translate(${arc.centroid(d)})`; })
        .style("text-anchor", "middle")
        .style("font-size", 17)


    // define legend
    var legend = svg.selectAll('legend')
        .data(color.domain().slice(1,)) 
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function (d, i) {
            if(i == 0){
                var height = legendRectSize + legendSpacing; 
                var offset = height * color.domain().length / 2; 
                var horz = 18 * legendRectSize;
                var vert = i * height - offset;
                return `translate(${horz}, ${vert})`;
            } else {
                var height = legendRectSize + legendSpacing; 
                var offset = height * color.domain().length / 2; 
                var horz = 18 * legendRectSize;
                var vert = i * height - offset;
                return `translate(${horz}, ${vert})`;
            }
        });

    // adding colored squares to legend
    legend.append('rect')                         
        .attr('width', legendRectSize)                       
        .attr('height', legendRectSize)                       
        .style('fill', color) 
        .style('stroke', color) 
        .on('click', function (label) {
            var rect = d3.select(this); 
            var enabled = true; 
            var totalEnabled = d3.sum(dataset.map(function (d) { 
                return (d.enabled) ? 1 : 0;
            }));

            if (rect.attr('class') === 'disabled') { 
                rect.attr('class', '');
            } else { // else
                if (totalEnabled < 2) return; 
                rect.attr('class', 'disabled'); 
                enabled = false; 
            }

            pie.value(function (d) {
                if (d.label === label) d.enabled = enabled; 
                return (d.enabled) ? d.count : 0; 
            });

            path = path.data(pie(dataset));

            path.transition() 
                .duration(800)
                .attrTween('d', function (d) { 
                    var interpolate = d3.interpolate(this._current, d); 
                    this._current = interpolate(0);
                    return function (t) {
                        return arc(interpolate(t));
                    };
                });
        });



    // adding text to legend
    legend.append('text')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing)
        .text(function (d) { return d; }); // return label


}
