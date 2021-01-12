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
        },
        labels: {
            format: '{value}%'
        },
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
                    [0, '#48CAFF'],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            dataLabels:{
                enabled: true,
                style:{
                    fontWeight: '600',
                    color:'black'
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
            lineColor: '#48CAFF',
        },
    },
    credits: {
        enabled: false
    },

    series: [{
        data: [1, 3, 3, 2, 1, 4, 3],
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
            pointPadding: 0.01,
            maxPointWidth: 15,
            borderRadiusTopLeft: 10,
            borderRadiusTopRight: 10,
            borderWidth:0
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
        pointInterval: 3600 * 1000 * 24 * 7, // one week 
        dataLabels:{
            borderColor:'#B6CA51',
        },
        showInLegend: false
    },
    {
        data: [173, 134, 123, 102],
        color: '#48CAFF',
        pointStart: Date.UTC (2020, 9, 31),
        pointInterval: 3600 * 1000 * 24 * 7, // one week 
        dataLabels:{
            borderColor:'#48CAFF'
        },
    },
    // {
    //     data: [25, 10, 7, 5],
    //     color: '#898989',
    //     pointStart: Date.UTC (2020, 9, 31),
    //     pointInterval: 3600 * 1000 * 24 * 7, // one week 
    //     dataLabels:{
    //         borderColor:'#898989'
    //     },
    //     showInLegend: false
    // }
],

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
            format: '{y}%',
            y: -5
        },    
    }],

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
        style:{
            fontWeight:'bold',
            fontSize: '25'
        },
    },
    plotOptions:{
        pie:{
            dataLabels:{
                alignTo: 'plotEdges'
            },
        }
    },
    credits:{
    enabled: false
    },
    tooltip:{
        enabled: false
    },
    series: [{
        minPointSize: 10,
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
        gridLineWidth: 1,
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
                style:{
                    fontWeight:'300'
                }
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

function City(city, cityScore, infectedPopulation, testPositive, changePercentage, activeSick, place){
    this.city = city;
    this.cityScore = cityScore;
    this.infectedPopulation = infectedPopulation;
    this.testPositive = testPositive;
    this.changePercentage = changePercentage;
    this.activeSick = activeSick;
    this.place = place;
}
const cityList = new Array()
cityList[0] = new City("תל אביב", 4.2, 23.1, 9, 15, 1023,0)
cityList[1] = new City("חיפה", 5.2, 17.8, 8, 6, 436,1)
cityList[2] = new City("רמת השרון", 2.2, 10 ,2 ,6 ,103,2)
cityList[3] = new City("בני ברק", 7.2, 46.7, 11, 56, 609,3)
cityList[4] = new City("הרצליה", 5.4, 16.7, 10, 6, 305,4)
cityList[5] = new City("פתח תקווה", 3.9, 11.7 ,7 ,2 ,706,5)
cityList[6] = new City("חולון", 6.3, 32, 12, 26, 597,6)
cityList[7] = new City("חדרה", 5.9, 16.1, 6, 12, 249,7)

function createTable(){
    for(i = 0; i < cityList.length; i++)
    {
        let row = document.createElement("tr");
        let cityData = document.createElement("td");
        let citySquare = document.createElement("span");
        row.id = i;
        document.getElementById("cityTable").appendChild(row);
        cityData.innerHTML = cityList[i].city;
        cityData.className = "right-text";
        row.appendChild(cityData);

        cityData = document.createElement("td");
        cityData.className = "square";
        cityData.innerHTML = "";
        row.appendChild(cityData);  
        let square =  document.createElement("div");
        if(cityList[i].cityScore <= 4){
            square.className = "green-square";
        } else if (cityList[i].cityScore <= 5.5){
            square.className = "yellow-square";
        } else if (cityList[i].cityScore <= 7){
            square.className = "orange-square";
        } else {
            square.className = "red-square";
        }
        cityData.appendChild(square);

        cityData = document.createElement("td");
        cityData.className = "centre-text";
        row.appendChild(cityData);  
        citySquare.innerHTML = cityList[i].cityScore;
        if(cityList[i].cityScore <= 4){
            citySquare.className = "green";
        } else if (cityList[i].cityScore <= 5.5){
            citySquare.className = "yellow";
        } else if (cityList[i].cityScore <= 7){
            citySquare.className = "orange";
        } else {
            citySquare.className = "red";
        }
        cityData.appendChild(citySquare);
        
        cityData = document.createElement("td");
        cityData.className = "centre-text light-grey";
        cityData.innerHTML = cityList[i].infectedPopulation;
        row.appendChild(cityData); 

        cityData = document.createElement("td");
        cityData.className = "centre-text light-grey";
        cityData.innerHTML = cityList[i].testPositive +"%" ;
        row.appendChild(cityData);  

        cityData = document.createElement("td");
        cityData.className = "centre-text light-grey";
        cityData.innerHTML = cityList[i].changePercentage +"%";
        row.appendChild(cityData); 

        cityData = document.createElement("td");
        cityData.className = "centre-text";
        cityData.innerHTML = cityList[i].activeSick;
        row.appendChild(cityData); 
    }
    createTable2();
}
let cityNameOrder = new Array(cityList.length);
let cityScoreOrder = new Array(cityList.length);
let infectedPopulationOrder = new Array(cityList.length);
let testPositiveOrder = new Array(cityList.length);
let changePercentageOrder = new Array(cityList.length);
let activeSickOrder = new Array(cityList.length);

for (i=0 ; cityList.length > i; i++){
    cityNameOrder[i] = cityList[i].city;
    cityScoreOrder[i] = cityList[i].cityScore;
    infectedPopulationOrder[i] = cityList[i].infectedPopulation;
    testPositiveOrder[i] = cityList[i].testPositive;
    changePercentageOrder[i] = cityList[i].changePercentage;
    activeSickOrder[i] = cityList[i].activeSick;
}

let reverseOrder = false;
let order = new Array(cityList.length);
for ( i = 0 ; i < cityList.length ; i++){
    order[i] = i;
}

let citySorted = false;
function sortCity(){
    cityNameOrder.sort();
    if (citySorted){
        cityNameOrder.reverse();
    }
    for(i = 0; i < cityNameOrder.length; i++){
        for(y = 0 ; y < cityList.length ; y++){
            if (cityNameOrder[i] === cityList[y].city){
                order[i] = y;
                break;
            }
        }
    }
    citySorted = !citySorted;
    updateTable1();
}
function updateTable1(){
    for (i = 0 ; i < cityList.length; i++){
        let rowNodes = document.getElementById(i).childNodes;
        rowNodes[0].innerHTML = cityList[order[i]].city;
        
        if(cityList[order[i]].cityScore <= 4){
            rowNodes[1].childNodes[0].className = "green-square";
        } else if (cityList[order[i]].cityScore <= 5.5){
            rowNodes[1].childNodes[0].className = "yellow-square";
        } else if (cityList[order[i]].cityScore <= 7){
            rowNodes[1].childNodes[0].className = "orange-square";
        } else {
            rowNodes[1].childNodes[0].className = "red-square";
        }
        
        let spanHtml = rowNodes[2].childNodes;
        spanHtml[0].innerHTML = cityList[order[i]].cityScore;

        if(cityList[order[i]].cityScore <= 4){
            spanHtml[0].className = "green";
        } else if (cityList[order[i]].cityScore <= 5.5){
            spanHtml[0].className = "yellow";
        } else if (cityList[order[i]].cityScore <= 7){
            spanHtml[0].className = "orange";
        } else {
            spanHtml[0].className = "red";
        }
        rowNodes[3].innerHTML = cityList[order[i]].infectedPopulation;
        rowNodes[4].innerHTML = cityList[order[i]].testPositive +"%";
        rowNodes[5].innerHTML = cityList[order[i]].changePercentage +"%";
        rowNodes[6].innerHTML = cityList[order[i]].activeSick;
    }
}
let scoreSorted = false;
function sortScore(){
    cityScoreOrder.sort((a, b) => a - b)
    if(scoreSorted){
        cityScoreOrder.reverse();
    }
    for(i = 0; i < cityScoreOrder.length; i++){
        for(y = 0 ; y < cityList.length ; y++){
            if (cityScoreOrder[i] === cityList[y].cityScore){
                order[i] = y;
                break;
            }
        }
    }
    scoreSorted = !scoreSorted;
    updateTable1();
}
let populationSorted = false;
function sortPopulation(){
    infectedPopulationOrder.sort((a, b) => a - b)
    if(populationSorted){
        infectedPopulationOrder.reverse();
    }
    for(i = 0; i < infectedPopulationOrder.length; i++){
        for(y = 0 ; y < cityList.length ; y++){
            if (infectedPopulationOrder[i] === cityList[y].infectedPopulation){
                order[i] = y;
                break;
            }
        }
    }
    populationSorted = !populationSorted;
    updateTable1();
}
let positiveOrderSorted = false;
function sortPositive(){
    testPositiveOrder.sort((a, b) => a - b)
    if(positiveOrderSorted){
        testPositiveOrder.reverse();
    }
    for(i = 0; i < testPositiveOrder.length; i++){
        for(y = 0 ; y < cityList.length ; y++){
            if (testPositiveOrder[i] === cityList[y].testPositive){
                order[i] = y;
                break;
            }
        }
    }
    positiveOrderSorted = !positiveOrderSorted;
    updateTable1();
}
let percentageOrderOrder = false;
function sortPercentage(){
    changePercentageOrder.sort((a, b) => a - b)
    if(percentageOrderOrder){
        changePercentageOrder.reverse();
    }
    for(i = 0; i < changePercentageOrder.length; i++){
        for(y = 0 ; y < cityList.length ; y++){
            if (changePercentageOrder[i] === cityList[y].changePercentage){
                order[i] = y;
                break;
            }
        }
    }
    percentageOrderOrder =!percentageOrderOrder;
    updateTable1();
}
let activeSorted = false;
function sortActive(){
    activeSickOrder.sort((a, b) => a - b)
    if(activeSorted){
        activeSickOrder.reverse();
    }
    for(i = 0; i < activeSickOrder.length; i++){
        for(y = 0 ; y < cityList.length ; y++){
            if (activeSickOrder[i] === cityList[y].activeSick){
                order[i] = y;
                break;
            }
        }
    }
    activeSorted = !activeSorted;
    updateTable1();
}

function Hospital(name, generalCapacity, coronaCapacity, stuffInfected){
    this.name = name;
    this.generalCapacity = generalCapacity;
    this.coronaCapacity = coronaCapacity;
    this.stuffInfected = stuffInfected;
}

const hospitalList = new Array();
hospitalList[0] = new Hospital("יוספטל", 65.3, 48.6, 10)
hospitalList[1] = new Hospital("שיבא", 98.2, 72.6, 46)
hospitalList[2] = new Hospital("שמיר", 60.1, 28.1, 15)
hospitalList[3] = new Hospital("וולפסון", 71.6, 68.6, 19)
hospitalList[4] = new Hospital("זיו צפת", 41.3, 39.5, 8)
hospitalList[5] = new Hospital("נהריה", 64.3, 51.6, 42)
hospitalList[6] = new Hospital("ברזילי", 68.9, 54.3, 34)
hospitalList[7] = new Hospital("פוריה", 83.8, 80.4, 27)

function createTable2(){
    for(i = 0; i < hospitalList.length; i++)
    {
        let row = document.createElement("tr");
        let hospitalData = document.createElement("td");
        row.id = i + "a";
        document.getElementById("hospitalTable").appendChild(row);
        hospitalData.innerHTML = hospitalList[i].name;
        hospitalData.className = "right-text";
        row.appendChild(hospitalData);

        let barDiv = document.createElement("div");
        let innerBarDiv = document.createElement("div");
        let hospitalSpan = document.createElement("span");
        // create td
        hospitalData = document.createElement("td");
        hospitalData.className = "centre-text light-grey";
        hospitalData.style.backgroundColor = "white";
        hospitalData.style.padding = "1rem 0rem"
        row.appendChild(hospitalData); 
        // add main div
        barDiv.className = "bar";
        hospitalData.appendChild(barDiv);
        //add inner div and span
        innerBarDiv.className="bar-shell"
        barDiv.appendChild(innerBarDiv);
        let width = hospitalList[i].generalCapacity / 2 +"px";
        hospitalSpan.style.width = width;
        innerBarDiv.appendChild(hospitalSpan);
        // add span to bar div
        let hospitalSpan1 = document.createElement("span");
        hospitalSpan1.className = "bar-value"
        hospitalSpan1.innerHTML = hospitalList[i].generalCapacity +"%";
        barDiv.appendChild(hospitalSpan1);

        barDiv = document.createElement("div");
        innerBarDiv = document.createElement("div");
        hospitalSpan = document.createElement("span");
        // create td
        hospitalData = document.createElement("td");
        hospitalData.className = "centre-text light-grey";
        hospitalData.style.backgroundColor = "white";
        hospitalData.style.padding = "1rem 0rem"
        row.appendChild(hospitalData); 
        // add main div
        barDiv.className = "bar";
        hospitalData.appendChild(barDiv);
        //add inner div and span
        innerBarDiv.className="bar-shell"
        barDiv.appendChild(innerBarDiv);
        width = hospitalList[i].coronaCapacity / 2 +"px";
        hospitalSpan.style.width = width;
        innerBarDiv.appendChild(hospitalSpan);
        // add span to bar div
        hospitalSpan1 = document.createElement("span");
        hospitalSpan1.className = "bar-value"
        hospitalSpan1.innerHTML = hospitalList[i].coronaCapacity +"%";
        barDiv.appendChild(hospitalSpan1);

        // hospitalData = document.createElement("td");
        // hospitalData.className = "centre-text light-grey";
        // hospitalData.innerHTML = hospitalList[i].coronaCapacity +"%" ;
        // hospitalData.style.backgroundColor = "white";
        // row.appendChild(hospitalData);  

        hospitalData = document.createElement("td");
        hospitalData.className = "centre-text light-grey";
        hospitalData.innerHTML = hospitalList[i].stuffInfected;
        hospitalData.style.backgroundColor = "white";

        row.appendChild(hospitalData); 

    }
}

let hospitalNameOrder = new Array(hospitalList.length)
let hospitalGeneralOrder = new Array(hospitalList.length)
let hospitalCapacityOrder = new Array(hospitalList.length)
let hospitalInfectedOrder = new Array(hospitalList.length)
let order1 = new Array(hospitalList.length);

for (i=0 ; hospitalList.length > i; i++){
    hospitalNameOrder[i] = hospitalList[i].name;
    hospitalGeneralOrder[i] = hospitalList[i].generalCapacity;
    hospitalCapacityOrder[i] = hospitalList[i].coronaCapacity;
    hospitalInfectedOrder[i] = hospitalList[i].stuffInfected;
}

let InfectedOrderSorted= false;
function sortHospitalInfected(){
    hospitalInfectedOrder.sort((a, b) => a - b)
    if (InfectedOrderSorted){
        hospitalInfectedOrder.reverse();
    }
    for(i = 0; i < hospitalInfectedOrder.length; i++){
        for(y = 0 ; y < hospitalList.length ; y++){
            if (hospitalInfectedOrder[i] === hospitalList[y].stuffInfected){
                order1[i] = y;
                break;
            }
        }
    }
    InfectedOrderSorted = !InfectedOrderSorted;
    updateTable2();
}

let capacityOrderSorted= false;
function sortHospitalCapacity(){
    hospitalCapacityOrder.sort((a, b) => a - b)
    if (capacityOrderSorted){
        hospitalCapacityOrder.reverse();
    }
    for(i = 0; i < hospitalCapacityOrder.length; i++){
        for(y = 0 ; y < hospitalList.length ; y++){
            if (hospitalCapacityOrder[i] === hospitalList[y].coronaCapacity){
                order1[i] = y;
                break;
            }
        }
    }
    capacityOrderSorted = !capacityOrderSorted;
    updateTable2();
}

let generalOrderSorted= false;
function sortHospitalGeneral(){
    hospitalGeneralOrder.sort((a, b) => a - b);
    if (generalOrderSorted){
        hospitalGeneralOrder.reverse();
    }
    for(i = 0; i < hospitalGeneralOrder.length; i++){
        for(y = 0 ; y < hospitalList.length ; y++){
            if (hospitalGeneralOrder[i] === hospitalList[y].generalCapacity){
                order1[i] = y;
                break;
            }
        }
    }
    generalOrderSorted = !generalOrderSorted;
    updateTable2();
}

let hospitalNameSorted = false;
function sortHospitalName(){
    hospitalNameOrder.sort();
    if (hospitalNameSorted){
        hospitalNameOrder.reverse();
    }
    for(i = 0; i < hospitalNameOrder.length; i++){
        for(y = 0 ; y < hospitalList.length ; y++){
            if (hospitalNameOrder[i] === hospitalList[y].name){
                order1[i] = y;
                break;
            }
        }
    }
    hospitalNameSorted = !hospitalNameSorted;
    updateTable2();
}
function updateTable2(){
    for (i = 0 ; i < hospitalList.length; i++){
        let rowNodes = document.getElementById(i +"a").childNodes;
        rowNodes[0].innerHTML = hospitalList[order1[i]].name;
        let width = hospitalList[order1[i]].generalCapacity / 2 +"px";
        let span1 = rowNodes[1].childNodes[0].childNodes[0].childNodes[0];
        span1.style.width = width;
        rowNodes[1].childNodes[0].childNodes[1].innerHTML = hospitalList[order1[i]].generalCapacity +"%";
        width = hospitalList[order1[i]].coronaCapacity / 2 +"px";
        span1 = rowNodes[2].childNodes[0].childNodes[0].childNodes[0];
        span1.style.width = width;
        rowNodes[2].childNodes[0].childNodes[1].innerHTML = hospitalList[order1[i]].coronaCapacity +"%";
        rowNodes[3].innerHTML = hospitalList[order1[i]].stuffInfected;
    }
}
let isInverted = false;
let el = document.getElementById("main");
function invertColor(){
    if (!isInverted){
        el.className = "invert-main";
    }else{
        el.className = "regular";
    }
    isInverted = !isInverted;
}
 function searchCity(){
     let input = document.getElementById("city-search").value;
     let city = document.getElementsByClassName("city");
     let cityList = document.getElementById("cityList");
     let isVisible = 0;
     for (i = 0; i < city.length; i++){
         if (city[i].innerHTML.includes(input) && input.length > 0){
             city[i].style.display="list-item";
             isVisible = true;
         }else{
             city[i].style.display="none"
         }
     }
     if(isVisible){
        cityList.style.display="initial";
     }else{
         cityList.style.display="none";
     }
}
for(i = 0; i < cityList.length ; i++){
    let cityTable = document.getElementById("cityList");
    let city = document.createElement("li");
    city.innerHTML = cityList[i].city;
    city.className = "city";
    cityTable.appendChild(city);
}
