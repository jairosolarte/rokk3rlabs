
var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {

    $routeProvider
            .when('/', {
        templateUrl: 'pages/analytics.html',
        controller: 'mailController'
    })

            .when('/new', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })

});
app.controller('mailController', function($scope, $timeout) {
    $scope.data = [];
    $scope.index = [];
    callAtTimeout = function() {
        console.info($scope.data);
        $scope.data.push(getData());
        showGrafica();
        $timeout(callAtTimeout, 3000);
    }

    $timeout(callAtTimeout, 3000);
    getData = function() {
        var timeStamp = new Date().getTime();
        var data = [
            {"zoneId": "Calle 85", "data": {"count": 1, "speed": Math.floor(Math.random() * 80) + 1, "time": timeStamp}},
            {"zoneId": "Salitre plaza", "data": {"count": 2, "speed": Math.floor(Math.random() * 80) + 1, "time": timeStamp}},
            {"zoneId": "Parque 93", "data": {"count": 4, "speed": Math.floor(Math.random() * 80) + 1, "time": timeStamp}},
            {"zoneId": "Calle 80", "data": {"count": 3, "speed": Math.floor(Math.random() * 80) + 1, "time": timeStamp}},
            {"zoneId": "Centro", "data": {"count": 1, "speed": Math.floor(Math.random() * 80) + 1, "time": timeStamp}}
        ];
        return data;
    }

    showGrafica = function() {

        var xAxis = [];
        var Serial = [];
        $scope.index = [];
        for (j = 0; j < $scope.data.length; j++) {
            var temp1 = $scope.data[j];
            for (i = 0; i < temp1.length; i++) {
                var temp = temp1[i];
                if ($scope.index.indexOf(temp.zoneId) < 0) {
                    $scope.index.push(temp.zoneId)
                    Serial.push({data: []});
                }

                Serial[$scope.index.indexOf(temp.zoneId)].data.push([temp.data.time, temp.data.speed])
            }
        }

        Highcharts.chart('container', {
            title: {
                text: ''
            },
            plotOptions: {
                series: {
                    animation: false
                },
                labels: {
                    enabled: false
                }
            },
            legend: {
                enabled: false,
            },
            animation: false,
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Hours of the Day'
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    hour: '%I %p',
                    minute: '%I:%M %p'
                }
            },
            yAxis: {
                title: {
                    enabled: false,
                    text: ''
                },
                labels: {
                    format: '{value}Km',
                }
            },
            series: Serial
        });

        Highcharts.chart('container2', {
            title: {
                text: ''
            },
            chart: {
                type: 'column'
            },
            plotOptions: {
                series: {
                    animation: false
                },
                labels: {
                    enabled: false
                }
            },
            legend: {
                enabled: false,
            },
            animation: false,
            xAxis: {
                title: {
                    enabled: false,
                    text: 'Hours of the Day'
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    hour: '%I %p',
                    minute: '%I:%M %p'
                }
            },
            yAxis: {
                title: {
                    enabled: false,
                    text: ''
                },
                labels: {
                    format: '{value}Km',
                }
            },
            series: Serial
        });
    }

    $scope.data.push(getData());
    showGrafica();
});
app.controller('contactController', function($scope) {


});