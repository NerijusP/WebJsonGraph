var seriesOptions = [],
    seriesCounter = 0,
    names = ['Used DFR', 'Total DFR'];

/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {

    Highcharts.stockChart('container', {
        title: {
            text: 'Tekla DFR License Usage'
        },

        rangeSelector: {
            selected: 4
        },

        yAxis: {
            labels: {
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        plotOptions: {
            series: {
                // compare: 'percent',
                showInNavigator: true
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}',
            valueDecimals: 0,
            split: true
        },

        series: seriesOptions
    });
}

$.each(names, function (i, name) {

    $.getJSON('http://localhost:8080/rest/myProjectRest/DFR',  function (data) {

        seriesOptions[i] = {turboThreshold: 0,
            name: name,
            // data: data
            data: []
        };
        Highcharts.each(data, function(el){

            var k=0;
            var t=1;
            if (seriesCounter == 0) {
                k= el.ud;
            };
            if (seriesCounter == 1) {
                k= el.td;
            };
            seriesOptions[i].data.push({
                    x: el.to,
                     y: k,
                }
            );

        }),

        // As we're loading the data asynchronously, we don't know what order it will arrive. So
        // we keep a counter and create the chart when all the data is loaded.
        seriesCounter += 1;

        if (seriesCounter === names.length) {
            createChart();
        }
    });
});