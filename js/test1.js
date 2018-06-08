$.getJSON('data.json', function(data) {
    Highcharts.chart('container', {
        series: [{
            type: 'column',
            name: 'Column chart',
            data: data
        }]
    });
});

// $.getJSON('data.json', function(data) {
//             options.xAxis.categories = json[0]['logID']; //xAxis: {categories: []}
//     options.series[0] = json[1];
//     chart = new Highcharts.Chart(options);}
//     );


