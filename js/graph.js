
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Snow depth at Vikjafjellet, Norway'
    },
    subtitle: {
        text: 'Irregular time data in Highcharts JS'
    },
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
    yAxis: {
        title: {
            text: 'Snow depth (m)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    // series:[{
    //     data:[
    //
    //
    //                 // [Date.UTC(1970, 10, 25), 0],
    //                 // [Date.UTC(1970, 11,  6), 0.25],
    //                 // [Date.UTC(1970, 11, 20), 1.41],
    //                 // [Date.UTC(1970, 11, 25), 1.64],
    //                 // [Date.UTC(1971, 0,  4), 1.6],
    //                 // [Date.UTC(1971, 0, 17), 2.55],
    //       //  [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    //         // [{"all_cm":3,"all_dfr":14,"all_fud":3,"all_pcd":45,"all_vie":24,"logID":1,"totalLicExist":"2018-04-12T07:02:24+03:00"},{"all_cm":3,"all_dfr":14,"all_fud":3,"all_pcd":45,"all_vie":24,"logID":2,"totalLicExist":"2018-04-12T07:07:22+03:00"},{"all_cm":3,"all_dfr":14,"all_fud":3,"all_pcd":45,"all_vie":24,"logID":3,"totalLicExist":"2018-04-12T07:12:18+03:00"},{"all_cm":3,"all_dfr":14,"all_fud":3,"all_pcd":45,"all_vie":24,"logID":4,"totalLicExist":"2018-04-12T07:17:18+03:00"},{"all_cm":3,"all_dfr":14,"all_fud":3,"all_pcd":45,"all_vie":24,"logID":5,"totalLicExist":"2018-04-12T07:22:18+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":3,"all_pcd":45,"all_vie":25,"logID":6,"totalLicExist":"2018-05-01T09:00:02+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":3,"all_pcd":45,"all_vie":25,"logID":7,"totalLicExist":"2018-05-01T09:05:02+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":3,"all_pcd":45,"all_vie":25,"logID":8,"totalLicExist":"2018-05-01T09:10:07+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":3,"all_pcd":45,"all_vie":25,"logID":9,"totalLicExist":"2018-05-01T09:15:13+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":3,"all_pcd":45,"all_vie":25,"logID":10,"totalLicExist":"2018-05-01T09:20:48+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":4,"all_pcd":45,"all_vie":25,"logID":11,"totalLicExist":"2018-05-01T09:25:48+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":4,"all_pcd":45,"all_vie":25,"logID":12,"totalLicExist":"2018-05-01T09:30:31+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":4,"all_pcd":45,"all_vie":25,"logID":13,"totalLicExist":"2018-05-01T09:35:30+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":4,"all_pcd":44,"all_vie":25,"logID":14,"totalLicExist":"2018-05-01T09:40:30+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":4,"all_pcd":44,"all_vie":25,"logID":15,"totalLicExist":"2018-05-01T09:45:30+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":4,"all_pcd":44,"all_vie":25,"logID":16,"totalLicExist":"2018-05-01T09:50:34+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":4,"all_pcd":44,"all_vie":25,"logID":17,"totalLicExist":"2018-05-01T09:55:34+03:00"},{"all_cm":3,"all_dfr":13,"all_fud":4,"all_pcd":44,"all_vie":25,"logID":18,"totalLicExist":"2018-05-01T10:00:04+03:00"}]
    //
    //
    //     ]
    // }
    //
    // ]



    series: [{
        name: "Winter 2014-2015",
        data: [
            [Date.UTC(1970, 10, 25), 0],
            [Date.UTC(1970, 11,  6), 0.25],
            [Date.UTC(1970, 11, 20), 1.41],
            [Date.UTC(1970, 11, 25), 1.64],
            [Date.UTC(1971, 0,  4), 1.6],
            [Date.UTC(1971, 0, 17), 2.55],
            [Date.UTC(1971, 0, 24), 2.62],
            [Date.UTC(1971, 1,  4), 2.5],
            [Date.UTC(1971, 1, 14), 2.42],
            [Date.UTC(1971, 2,  6), 2.74],
            [Date.UTC(1971, 2, 14), 2.62],
            [Date.UTC(1971, 2, 24), 2.6],
            [Date.UTC(1971, 3,  1), 2.81],
            [Date.UTC(1971, 3, 11), 2.63],
            [Date.UTC(1971, 3, 27), 2.77],
            [Date.UTC(1971, 4,  4), 2.68],
            [Date.UTC(1971, 4,  9), 2.56],
            [Date.UTC(1971, 4, 14), 2.39],
            [Date.UTC(1971, 4, 19), 2.3],
            [Date.UTC(1971, 5,  4), 2],
            [Date.UTC(1971, 5,  9), 1.85],
            [Date.UTC(1971, 5, 14), 1.49],
            [Date.UTC(1971, 5, 19), 1.27],
            [Date.UTC(1971, 5, 24), 0.99],
            [Date.UTC(1971, 5, 29), 0.67],
            [Date.UTC(1971, 6,  3), 0.18],
            [Date.UTC(1971, 6,  4), 0]
        ]
    }, {
        name: "Winter 2015-2016",
        data: [
            [Date.UTC(1970, 10,  9), 0],
            [Date.UTC(1970, 10, 15), 0.23],
            [Date.UTC(1970, 10, 20), 0.25],
            [Date.UTC(1970, 10, 25), 0.23],
            [Date.UTC(1970, 10, 30), 0.39],
            [Date.UTC(1970, 11,  5), 0.41],
            [Date.UTC(1970, 11, 10), 0.59],
            [Date.UTC(1970, 11, 15), 0.73],
            [Date.UTC(1970, 11, 20), 0.41],
            [Date.UTC(1970, 11, 25), 1.07],
            [Date.UTC(1970, 11, 30), 0.88],
            [Date.UTC(1971, 0,  5), 0.85],
            [Date.UTC(1971, 0, 11), 0.89],
            [Date.UTC(1971, 0, 17), 1.04],
            [Date.UTC(1971, 0, 20), 1.02],
            [Date.UTC(1971, 0, 25), 1.03],
            [Date.UTC(1971, 0, 30), 1.39],
            [Date.UTC(1971, 1,  5), 1.77],
            [Date.UTC(1971, 1, 26), 2.12],
            [Date.UTC(1971, 3, 19), 2.1],
            [Date.UTC(1971, 4,  1), 1.7],
            [Date.UTC(1971, 4,  9), 1.7],
            [Date.UTC(1971, 4, 29), 0.85],
            [Date.UTC(1971, 5,  7), 0]
        ]
    }, {
        name: "Winter 2016-2017",
        data: [
            [Date.UTC(1970, 9, 15), 0],
            [Date.UTC(1970, 9, 31), 0.09],
            [Date.UTC(1970, 10,  7), 0.17],
            [Date.UTC(1970, 10, 10), 0.1],
            [Date.UTC(1970, 11, 10), 0.1],
            [Date.UTC(1970, 11, 13), 0.1],
            [Date.UTC(1970, 11, 16), 0.11],
            [Date.UTC(1970, 11, 19), 0.11],
            [Date.UTC(1970, 11, 22), 0.08],
            [Date.UTC(1970, 11, 25), 0.23],
            [Date.UTC(1970, 11, 28), 0.37],
            [Date.UTC(1971, 0, 16), 0.68],
            [Date.UTC(1971, 0, 19), 0.55],
            [Date.UTC(1971, 0, 22), 0.4],
            [Date.UTC(1971, 0, 25), 0.4],
            [Date.UTC(1971, 0, 28), 0.37],
            [Date.UTC(1971, 0, 31), 0.43],
            [Date.UTC(1971, 1,  4), 0.42],
            [Date.UTC(1971, 1,  7), 0.39],
            [Date.UTC(1971, 1, 10), 0.39],
            [Date.UTC(1971, 1, 13), 0.39],
            [Date.UTC(1971, 1, 16), 0.39],
            [Date.UTC(1971, 1, 19), 0.35],
            [Date.UTC(1971, 1, 22), 0.45],
            [Date.UTC(1971, 1, 25), 0.62],
            [Date.UTC(1971, 1, 28), 0.68],
            [Date.UTC(1971, 2,  4), 0.68],
            [Date.UTC(1971, 2,  7), 0.65],
            [Date.UTC(1971, 2, 10), 0.65],
            [Date.UTC(1971, 2, 13), 0.75],
            [Date.UTC(1971, 2, 16), 0.86],
            [Date.UTC(1971, 2, 19), 1.14],
            [Date.UTC(1971, 2, 22), 1.2],
            [Date.UTC(1971, 2, 25), 1.27],
            [Date.UTC(1971, 2, 27), 1.12],
            [Date.UTC(1971, 2, 30), 0.98],
            [Date.UTC(1971, 3,  3), 0.85],
            [Date.UTC(1971, 3,  6), 1.04],
            [Date.UTC(1971, 3,  9), 0.92],
            [Date.UTC(1971, 3, 12), 0.96],
            [Date.UTC(1971, 3, 15), 0.94],
            [Date.UTC(1971, 3, 18), 0.99],
            [Date.UTC(1971, 3, 21), 0.96],
            [Date.UTC(1971, 3, 24), 1.15],
            [Date.UTC(1971, 3, 27), 1.18],
            [Date.UTC(1971, 3, 30), 1.12],
            [Date.UTC(1971, 4,  3), 1.06],
            [Date.UTC(1971, 4,  6), 0.96],
            [Date.UTC(1971, 4,  9), 0.87],
            [Date.UTC(1971, 4, 12), 0.88],
            [Date.UTC(1971, 4, 15), 0.79],
            [Date.UTC(1971, 4, 18), 0.54],
            [Date.UTC(1971, 4, 21), 0.34],
            [Date.UTC(1971, 4, 25), 0]
        ]
    }]





});
