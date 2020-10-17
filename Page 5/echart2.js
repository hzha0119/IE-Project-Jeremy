// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('symptomsData'));

var dataSource = [
    ['cases', 'name'],
    [294, 'Injection site reaction'],
    [316, 'Headache'],
    [214, 'Dizziness'],
    [237, 'Nausea'],
    [152, 'Fatigue and lethargy'],
    [148, 'Fever'],
    [134, 'Fainting'],
    [123, 'General feeling unwell'],
    [123, 'Vomiting']
];

// specify chart configuration item and data
option = {
    title: {
        text: 'Reports of Adverse Reactions',
        subtext: 'Types of Symbols',
        left: 'center'
    },
    dataset: {
        source: dataSource
    },
    grid: { containLabel: true },
    xAxis: { name: 'Cases', inverse: false},
    yAxis: { type: 'category' },
    visualMap: {
        type: 'continuous',
        dimension: 0,
        // orient: 'verticle',
        text: ['High', 'Low'],
        inverse: false,
        itemHeight: '110%',
        min: 100,
        max: 330,
        left: '93%',
        top: 'center',
        inRange: {
            color: ['blue'],
            colorLightness: [1, 0]
        },
        formatter: function (value) {
            return Math.round(value) + ' cases';
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'cases',
                // Map the "product" column to Y axis
                y: 'name'
            }
        }
    ]
};

// use configuration item and data specified to show chart
myChart.setOption(option);