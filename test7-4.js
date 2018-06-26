
var seriesOptions = [],
    seriesCounter = 0,
    names = ['up', 'tp'];

/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 4
        },

        yAxis: {
            labels: {
                // formatter: function () {
                //     return (this.value > 0 ? ' + ' : '') + this.value + '%';
                // }
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
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2,
            split: true
        },

        series: seriesOptions
    });
}

$.each(names, function (i, name) {

    //$.getJSON('https://www.highcharts.com/samples/data/' + name.toLowerCase() + '-c.json',  function (data) {
    $.getJSON('http://localhost:8080/rest/myProjectRest/logas3',  function (data) {

        seriesOptions[i] = {turboThreshold: 0,
            name: name,
            // data: data
            data: [


            ]
        };

        Highcharts.each(data, function(el){

            var k=0;
            var t=1;
            if (seriesCounter == 0) {
                k= el.up;
            };
            if (seriesCounter == 1) {
                k= el.tp;
            };


            seriesOptions[i].data.push({

                    x: el.to,

                // if (seriesCounter = 2) {
                //     k= el.tp;
                // },
                     y: k,





                }

            );


        }),


        // // var z=30;
        // // var k=i;
        // // console.log(k);
        // Highcharts.each(data, function(el) {
        //
        //     // if (k = 1) {
        //     //     z= el.up;
        //     // }
        //     // if (k = 2) {
        //     //     z= el.tp;
        //     // };
        //
        //
        //
        //     seriesOptions[i].data.push({
        //
        //
        //
        //
        //
        //
        //
        //     }
        //
        //     );
        //
        //
        //
        // });



        // As we're loading the data asynchronously, we don't know what order it will arrive. So
        // we keep a counter and create the chart when all the data is loaded.
        seriesCounter += 1;

        if (seriesCounter === names.length) {
            createChart();
        }
    });
});