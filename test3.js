$.getJSON('test.json', function(data) {
    Highcharts.chart('container', {

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },




        series: [{
            type: 'column',
            name: 'Column chart',
            // data: data
            data:

            // [
            // [Date.UTC(1970, 10, 25), 0],
            // [Date.UTC(1970, 11,  6), 0.25]]

                // $.getJSON('data.json', function(data) {
                //     options.xAxis.categories = json[0]['logID']; //xAxis: {categories: []}
                //     options.series[0] = json[1];
                //     chart = new Highcharts.Chart(options);})

            $.getJSON('test.json', function(data) {
            options.series[0].data = data;
            var chart = new Highcharts.Chart(cOptions);
            })


        }]






    });
});

// $.getJSON('data.json', function(data) {
//             options.xAxis.categories = json[0]['logID']; //xAxis: {categories: []}
//     options.series[0] = json[1];
//     chart = new Highcharts.Chart(options);}
//     );


