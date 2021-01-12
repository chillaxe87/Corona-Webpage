Highcharts.chart('area-Chart-1', {
    chart: {
        type: 'area'
    },
    title: {
        text: null,
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%d.%m',this.value);
            },
        },
        tickWidth: 0,
        lineWidth: 0,
    },
    yAxis:{
        gridLineWidth: 0,
        title: {
            text:'אחוז שינוי יומי'
        }
    },
    legend: {
        enabled: false
    },
    tooltip:{
        pointFormatter: function(){
            return this.y + '% <br>' + '(' + 300/(this.y+1) + ')';
        },
        shared: true,
        enabled:false
    },
    plotOptions: {
        series: {
            fillColor: {
                linearGradient: [0, 0, 0, 200],
                stops: [
                    [0, Highcharts.getOptions().colors[4]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            dataLabels:{
                enabled: true,
                style:{
                    fontWeight: '100'
                },
                format: '{y}% <br> ({y})',
            },
            marker:{
                fillColor: 'white',
                lineWidth: 2,
                radius: 2.5,
                lineColor: Highcharts.getOptions().colors[4],
            },
        },
        area:{
            lineWidth:2,
            lineColor: Highcharts.getOptions().colors[4],
        },
    },
    credits: {
        enabled: false
    },

    series: [{
        data: [1, 3, 3, 2, 0, 5, 3],
        pointStart: Date.UTC (2020, 10, 21),
        pointInterval: 3600 * 1000 * 24 // one day 
    }],

});
Highcharts.chart('area-Chart-2', {
    chart: {
        type: 'area'
    },
    title: {
        text: null,
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%d.%m',this.value);
            },
        },
        tickWidth: 0,
        lineWidth: 0,
    },
    yAxis:{
        gridLineWidth: 0,
        title: {
            text:''
        }
    },
    legend: {
        enabled: false
    },
    tooltip:{
        enabled: false,
    },
    plotOptions: {
        series: {
            fillColor: {
                linearGradient: [0, 0, 0, 200],
                stops: [
                    [0, Highcharts.getOptions().colors[7]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            dataLabels:{
                enabled: true,
                style:{
                    fontWeight: '100'
                },
            },
            marker:{
                fillColor: 'white',
                lineWidth: 2,
                radius: 2.5,
                lineColor: Highcharts.getOptions().colors[7],
            },
        },
        area:{
            lineColor: Highcharts.getOptions().colors[7],
        },
    },
    credits: {
        enabled: false
    },

    series: [{
        data: [311, 310, 289, 283, 294, 279, 309],
        pointStart: Date.UTC (2020, 10, 21),
        pointInterval: 3600 * 1000 * 24 // one day 
    }],

});
Highcharts.chart('column-Chart-1', {
    chart: {
        type: 'column'
    },
    title: {
        text: null,
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%d.%m',this.value);
            },
        },
        tickWidth: 0,
        lineWidth: 0,
    },
    yAxis:{
        gridLineWidth: 0,
        title: {
            text:''
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            dataLabels:{
                enabled: true,
                style:{
                    fontWeight: '100'
                },
            },
        },
        column: {
            pointPadding: 0.4,
            borderRadiusTopLeft: 10,
            borderRadiusTopRight: 10,
        }
    },
    credits: {
        enabled: false
    },
    tooltip:{
        enabled:false
    },

    series: [{
        data: [616, 829, 705, 901, 954, 904, 471],
        color: '#B6CA51',
        pointStart: Date.UTC (2020, 10, 21),
        pointInterval: 3600 * 1000 * 24 // one day 
    }],

});
Highcharts.chart('area-Column-chart', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: null,
    },
    xAxis: [{
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%d.%m',this.value);
            },
        },
        tickWidth: 0,
        lineWidth: 0,
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: '#48CAFF'
            }
        },
        title: {
            text: 'מספר מקרים מצטבר',
            style: {
                color: '#1C7D7E',
            }
        },
    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            rotation: 270,
            text:'מספר מקרים חדשים',
            style: {
                color: '#1C7D7E',
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: '#1C7D7E',
            }
        },
        opposite: true
    }],
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderRadiusTopLeft: 10,
            borderRadiusTopRight: 10,
        }
    },
    tooltip: {
        shared: true,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 0,
    },
    legend: {
        symbolPadding: 0.1,
        symbolWidth: 0.1,
        symbolHeight: 0.1,
        labelFormatter: function () {
            return 'תאריך הבדיקה';
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name:'מאומתים מצטבר',
        type: 'area',
        data: [316000, 316000, 316000, 316000, 316000, 316000, 316000, 316000, 316000, 316000, 316000, 316000.6],
        color: '#48CAFF',
        pointStart: Date.UTC (2020, 10, 16),
        showInLegend: false,
        pointInterval: 3600 * 1000 * 24, // one day 
        fillColor: {
            linearGradient: [0, 0, 0, 200],
            stops: [
                [0, Highcharts.getOptions().colors[9]],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
        },

    },
    {
        name:'מחלימים חדשים',
        type: 'column',
        yAxis: 1,
        data: [873, 829, 797, 770, 820, 410, 813, 930, 850, 1064, 572, 260],
        color: '#898989',
        pointStart: Date.UTC (2020, 10, 16),
        pointInterval: 3600 * 1000 * 24 // one day 

    },{

        name: 'מאומתים חדשים',
        type: 'column',
        yAxis: 1,
        data: [575, 534, 737, 693, 702, 430, 915, 510, 435, 840, 381, 270],
        color: '#1C7D7E',
        pointStart: Date.UTC (2020, 10, 16),
        showInLegend: false,
        pointInterval: 3600 * 1000 * 24 // one day 
    }],
});
Highcharts.chart('line-chart', {
    chart: {
        type: 'spline',
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%d.%m',this.value);
            },
        },
        tickWidth:0,
        lineWidth:0,
    },
    yAxis:{
        gridLineWidth: 1,
        title: {
            text:''
        },
        min: 0,
        title: {
            text: 'מספר מקרים ',
            style: {
                color: '#1C7D7E',
            }
        },
    },
    legend: {
        symbolPadding: 0,
        symbolWidth: 0,
        symbolHeight: 0,
        labelFormatter: function () {
            return 'תאריך';
        }
    },
    tooltip:{
        enabled: false,
    },
    plotOptions: {
        series: {
            dataLabels:{
                enabled: true,
                y: 10,
                borderRadius: 5,
                backgroundColor: 'white',
                borderWidth: 3,
            },
            marker:{
                enabled: false,
            },
        },
        area:{
            lineColor: Highcharts.getOptions().colors[7],
        },
    },
    credits: {
        enabled: false
    },

    series: [{
        data: [413, 309, 319, 263],
        color:'#B6CA51',
        pointStart: Date.UTC (2020, 9, 31),
        pointInterval: 3600 * 1000 * 24, // one day 
        dataLabels:{
            borderColor:'#B6CA51',
        },
        showInLegend: false
    },
    {
        data: [173, 134, 123, 102],
        color: '#48CAFF',
        pointStart: Date.UTC (2020, 9, 31),
        pointInterval: 3600 * 1000 * 24, // one day 
        dataLabels:{
            borderColor:'#48CAFF'
        },
    },
    {
        data: [25, 10, 7, 5],
        color: '#898989',
        pointStart: Date.UTC (2020, 9, 31),
        pointInterval: 3600 * 1000 * 24, // one day 
        dataLabels:{
            borderColor:'#898989'
        },
        showInLegend: false
    }],

});

const categories = [
    '0-9', '10-19', '20-29', '30-39',
    '40-49', '50-59', '60-69', '70-79', '80-89',
    '+90'
];

Highcharts.chart('stack-chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: null
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
        }
    },
    xAxis: [{
        title:{
            text:'קבוצת גיל'
        },
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        },
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        },
    }],
    yAxis: {
        title: {
            text: 'סה"כ %'
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        },
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels:{
                enabled: true,
                formatter: function () {
                    return Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
                },
            },
        },
    },
    credits:{
        enabled:false
    },
    tooltip: {
        formatter: function () {
            return '<b>'+ this.series.name + this.point.category + ' <br/>' +
              Highcharts.numberFormat(Math.abs(this.point.y), 1) + '% </b>';
        }
    },

    series: [{
        name: 'נשים',
        data: [
            -5.4, -8.8, -9.6, -7, -6.5,
            -5, -3.1, -1.6, -0.9, -0.4, 
        ],
        color: '#B6CA51',
        dataLabels:{
            align:'left',
            x: -40,
        },
        borderRadiusBottomRight: 10,
        borderRadiusBottomLeft: 10
    }, {
        name: 'גברים',
        data: [
            5.4, 12.1, 10.4, 7, 6.1,
            4.8, 3.5, 1.7, 0.7, 0.2,
        ],
        color: '#48CAFF',
        dataLabels:{
            align:'right',
            x: 40,
            color: 'black'
        },
        borderRadiusTopRight: 10,
        borderRadiusTopLeft: 10
    }]
});

const nurse = 235;
const doctors = 129;
const other = 521;
const total = (nurse + doctors + other) + '<br> סה"כ';

Highcharts.chart('pie-chart', {
    chart: {
        type: 'pie',
    },
    title: {
        text: total,
        align: 'center',
        verticalAlign: 'middle',
    },
    credits:{
    enabled: false
    },
    tooltip:{
        enabled: false
    },
    series: [{
        minPointSize: 15,
        innerSize: '80%',
        data: [{
            name: 'אחים/ות' + ' ' + nurse,
            y: 235,
            color:'#B6CA51',
        }, {
            name: 'רופאים/ות' + ' ' + doctors,
            y: 129,
            color: '#48CAFF',
        }, {
            name: 'מקצועות אחרים' + ' ' + other,
            y: 521,
            color: '#898989',
        }]
    }]
});
Highcharts.chart('column-Chart-2', {
    chart: {
        type: 'column'
    },
    title: {
        text: null,
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%d.%m',this.value);
            },
        },
        tickWidth: 0,
        lineWidth: 0,
    },
    yAxis:{
        gridLineWidth: 0,
        title: {
            text:'מספר בדיקות'
        }
    },
    legend: {
        symbolPadding: 0.1,
        symbolWidth: 0.1,
        symbolHeight: 0.1,
        labelFormatter: function () {
            return 'תאריך הבדיקה';
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.4,
            borderRadiusTopLeft: 10,
            borderRadiusTopRight: 10,
            stacking: 'normal',
            dataLabels: {
                verticalAlign: 'top',
                y: -25,
                enabled: true,
                color:'black'
            },
        }
    },
    credits: {
        enabled: false
    },
    tooltip:{
        enabled:false
    },

    series: [{
        data: [59399, 52901, 47711, 17180, 38986, 56433, 43201],
        color: '#48CAFF',
        pointStart: Date.UTC (2020, 10, 21),
        pointInterval: 3600 * 1000 * 24, // one day 
        showInLegend: false,
    },
    {
        data: [1.8, 2, 2.2, 3.4, 2.6, 2.2, 1.8],
        color: '#898989',
        pointStart: Date.UTC (2020, 10, 21),
        pointInterval: 3600 * 1000 * 24, // one day 
        dataLabels:{
            borderRadius: 5,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#898989',
            color:'#898989',
            format: '{y}%'
        },    
    }],

});
