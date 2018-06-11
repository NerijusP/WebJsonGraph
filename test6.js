function getData() {
    $.ajax({
        // url: 'https://api.myjson.com/bins/13nore',
        url: 'data.json',
        type: 'GET',
        success: function(data) {
            var series = [{
                data: []
            }];

            Highcharts.each(data, function(el) {
                series[0].data.push({
                    x: Date.parse(el.totalLicExist.substr(0,10)+'T'+el.totalLicExist.substr(11,8)),
                    y: el.all_fud,
                });

                // series[1].data.push({
                //
                //     x: Date.parse(el.totalLicExist.substr(0,10)+'T'+el.totalLicExist.substr(11,8)),
                //     y: el.all_cm,
                // });

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
