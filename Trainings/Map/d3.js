var markers;

$(document).ready(function () {
    $.getJSON('locations.json', function (jsondata) {
        markers = jsondata;
        //console.log(markers)
    })
});

window.onload = function () {
    console.log(markers);
    let myChartSVG = d3.select('#d3').append('svg').attr('width', 400).attr('height', 500);

    let xscale = d3.scaleLinear().domain([0,20]).range([0,300]);
    let yscale = d3.scaleLinear().domain([0,40]).range([270,0]);

    let xAxis = d3.axisBottom(xscale);
    let yAxis = d3.axisLeft(yscale);

    myChartSVG.append('g').attr('class', 'xAxis').call(xAxis).attr('transform', 'translate(50, 300)'); // x: 50-50 = 0;
    myChartSVG.append('g').attr('class', 'yAxis').call(yAxis).attr('transform', 'translate(50, 30)'); // y: 300-30 = 270;

    //  new graph   
    let data = [2, 3, 6, 8, 10, 9 ,3, 3,4,5];
    let margin = {
        top: 30,
        left: 30,
        bottom: 30,
        right: 30,
        chartWidth: 500,
        chartHeight: 400
    };
    const barWidth = (margin.chartWidth - margin.left - margin.right) / (data.length + 1);

    let chartSVG = d3.select('#d3').append('svg').attr('width', margin.chartWidth).attr('height', margin.chartHeight);
    let chartXscale = d3.scaleLinear().domain([0, data.length + 0.5]).range([margin.left, margin.chartWidth - margin.right]);
    let chartYscale = d3.scaleLinear().domain([0, d3.max(data)]).range([margin.chartHeight - margin.bottom, margin.top]);
    let chartXAxis = d3.axisBottom(chartXscale);
    let chartYAxis = d3.axisLeft(chartYscale);

    chartSVG.append('g').attr('class', 'xAxis').call(chartXAxis).attr('transform', `translate(0, ${margin.chartHeight - margin.bottom})`);
    chartSVG.append('g').attr('class', 'yAxis').call(chartYAxis).attr('transform', `translate(${margin.left}, 0)`);

    // BAR CHART
    var barRatio = 0.8;
    var tooltip = d3.select('#d3').append("div").style('position', 'absolute');

    chartSVG.append('g').attr('class', 'rect').selectAll('rect')
    .data(data).enter().append('rect')
    .attr('width', barWidth * barRatio).attr('height', (d) => margin.chartHeight - margin.bottom - chartYscale(d))
    .attr('x', (d, i) => chartXscale(i + 1 - barRatio / 2)).attr('y', (d) => chartYscale(d))
    .attr('fill', 'lavender')
    .on('mouseover', function() {
        d3.select(this).attr("stroke-width", 3).attr("stroke", "red");
        return tooltip.style('visibility', 'hidden').html('hello');
    })
    .on('mouseout', function() {
        d3.select(this).attr("stroke", "none");
        //return tooltip.style('visibility', 'hidden');
        
    })
    .on('mousemove', function() {
        return tooltip.style('visibility', 'visible')
        .style("left", (event.pageX + 80) + "px")		
        .style("top", (event.pageY - 100) + "px");
        console.log(this.getAttribute('height'));
    })
}