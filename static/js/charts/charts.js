/**
 * Created by danielsiker on 10/11/14.
 */

// There is not much for me to code review on this project since it's mostly in cartodb
// The project was supposed to include Django & Ajax to create a single page app. 
// If you have the time you should try to think about how you could incorporate some features that
// would involve the SF crime data but also make use of Django and a database.
$(function () {
    $('#chart1').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Crime By Day, Summer 2014'
        },
        subtitle: {
            text: 'Not As You\'d Think'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45,
                backgroundColor: null,
                plotBorderWidth: null

            }
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        series: [{
            name: 'Total Incidents: ',
            data: [
                ['Monday', 4351],
                ['Tuesday', 4830],
                ['Wednesday', 4493],
                ['Thursday', 4542],
                ['Friday', 4987],
                ['Saturday', 4945],
                ['Sunday', 4426]
              ]
        }]
    });
     $('#chart2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Crime per Police District'
        },
        subtitle: {
            text: 'The Usual Suspects are Usual'
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false
         },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Crime Incidents'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Total Events: <b>{point.y}</b>'
        },
        series: [{
            name: 'Crime Events',
            data: [
                ['Central', 4015],
                ['Southern', 6711],
                ['Bayview', 2989],
                ['Mission', 4098],
                ['Northern', 3731],
                ['Park', 1963],
                ['Richmond', 1750],
                ['Ingleside', 2854],
                ['Taraval', 2169],
                ['Tenderloin', 2474]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '16px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });
        $('#chart3').highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: 'Crime Funnel',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
               credits: {
          enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Events',
            data: [
                ['larceny/theft',   10076],
                ['other offenses',       4228],
                ['non-criminal', 3828],
                ['assault',   2681],
                ['drug/narcotics',    1382],
                ['burglary',    1317],
                ['missing person',    1140],
                ['robbery',    888],
                ['suspicious occ',    732],
                ['weapons laws',    306],
                ['drunkenness',    142],
                ['extortion',    5],
            ]
        }]
    });
});
//     var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
//
//    chart = new Highcharts.Chart({
//        chart: {
//
//            backgroundColor: null,
//            plotBorderWidth: null,
//            plotShadow: false,
//            spacingLeft: 1,
//            spacingRight: 1
//
//        },
//        credits: {
//          enabled: false
//        },
//        exporting: {
//          enabled: false


//var chart;
//$(document).ready(function () {
//
//    /* PIE CHART THEME */
//    Highcharts.theme = {
//        /* LINE/BAR/COLUMN/SLICE COLORS - only used for slices for Plex, if we add multiple data sets in future releases, these colors will work with the rendering of other sets */
//        colors: ['#395C9B', '#923532', '#7B972E', '#6A538D', '#3B83A1', '#CB7221', '#F2E200'],
//
//        /* CHART TITLE */
//        title: {
//            style: {
//                color: '#ffffff',
//                font: 'bold 19px "Lucida Grande", Helvetica, Arial, sans-serif'
//            }
//        },
//
//        /* CHART SUBTITLE */
//        subtitle: {
//            style: {
//                color: '#ffffff',
//                font: 'bold 15px "Lucida Grande", Helvetica, Arial, sans-serif'
//            }
//        },
//
//        /* CHART X-AXIS */
//        xAxis: {
//            lineColor: '#000',
//            tickColor: '#000',
//            labels: {
//                style: {
//                    color: '#ffffff',
//                    font: '14px "Lucida Grande", Helvetica, Arial, sans-serif'
//                }
//            },
//            title: {
//                style: {
//                    color: '#ffffff',
//                    font: 'bold 14px "Lucida Grande", Helvetica, Arial, sans-serif'
//                }
//            }
//        },
//
//        /* CHART Y-AXIS */
//        yAxis: {
//            minorTickInterval: 'false', /* OPTIONAL PARAMETER - SHOWS HORIZONTAL LINES in between tick values */
//            lineColor: '#000',
//            lineWidth: 1,
//            tickWidth: 1,
//            tickColor: '#000',
//            labels: {
//                style: {
//                    color: '#ffffff',
//                    font: '14px "Lucida Grande", Helvetica, Arial, sans-serif'
//                }
//            },
//            title: {
//                style: {
//                    color: '#ffffff',
//                    font: 'bold 15px "Lucida Grande", Helvetica, Arial, sans-serif'
//                }
//            }
//        },
//
//        /* LINE CHART COLORS */
//        plotOptions: {
//            line: {
//                lineWidth: 3,
//                shadow: false,
//                marker: {
//                    fillColor: '#ffffff', /* LINE POINT COLOR */
//                    lineWidth: 2,
//                    radius: 7,
//                    symbol: 'circle', /* "circle", "square", "diamond", "triangle" and "triangle-down" */
//                    lineColor: null // inherit from above defined colors
//                }
//            },
//            column: {
//                cursor: 'pointer',
//                borderColor: '#333',
//                borderWidth: 1,
//                shadow: false
//            },
//            bar: {
//                cursor: 'pointer',
//                borderColor: '#333',
//                borderWidth: 1,
//                shadow: false
//            },
//            pie: {
//                cursor: 'pointer',
//                borderColor: '#666',
//                borderWidth: 1,
//                shadow: false
//            }
//        }
//    };
//
//// Apply the theme
//    var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
//
//    chart = new Highcharts.Chart({
//        chart: {
//            renderTo: 'chart1',
//            backgroundColor: null,
//            plotBorderWidth: null,
//            plotShadow: false,
//            spacingLeft: 1,
//            spacingRight: 1
//
//        },
//        credits: {
//          enabled: false
//        },
//        exporting: {
//          enabled: false
//        },
//        title: {
//            text: 'Crime Sorted by Weekday, Summer 2014'
//        },
//        subtitle: {
//            text: 'Not What You\'d Expect'
//        },
//        series: [
//            {
//                type: 'pie',
//                name: 'Crime Sorted By Day of the Week',
//                data: [
//                    ['Monday', 4531],
//                    ['Tuesday', 4830],
//                    ['Wednesday', 4493],
//                    ['Thursday', 4542],
//                    ['Friday', 4987],
//                    ['Saturday', 4945],
//                    ['Sunday', 4426]
//
//                ]
//            }
//        ]
//    });
//});
