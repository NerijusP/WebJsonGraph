function getData() {
    $.ajax({
        // url: 'https://api.myjson.com/bins/13nore',
        url: 'test2.json',
        type: 'GET',
        success: function(data) {
            var series = [{
                data: []
            }];

            Highcharts.each(data, function(el) {
                series[0].data.push({
                    x: el.ts,
                    y: el.val.I1
                });
            });

            series[0].data.sort(function(a, b) {
                return a.x - b.x
            });

            createChart(series);
        }
    });
}

function createChart(series) {
    Highcharts.chart('container', {
        series: series,
        chart: {
            type: 'area'
        },
        xAxis: {
            type: 'datetime'
        }
    });
}

getData();
