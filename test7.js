function getData() {
    $.ajax({
        // url: 'https://api.myjson.com/bins/13nore',
         //  url: 'http://localhost:8080/rest/myProjectRest/logas3',
        url: 'data6.json',
        type: 'GET',
        success: function(data) {
            var series = [{   turboThreshold: 0,
                data: []
            }];

            Highcharts.each(data, function(el) {
                console.log(el);
                series[0].data.push({
                    x: el.to,
                    y: el.up,

                });

            });


            createChart(series);
        }
    });
}

function createChart(series) {
    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },
        // turboThreshold:999,
        title: {
            text: 'Tekla Precast Concrete Detailing License Usage'
        },
        series: series,
    });
}







Date.createFromMysql = function(mysql_string)
{
    var t, result = null;

    if( typeof mysql_string === 'string' )
    {
        t = mysql_string.split(/[- :]/);

        //when t[3], t[4] and t[5] are missing they defaults to zero
        result = new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0);
    }

    return result;
}

getData();


