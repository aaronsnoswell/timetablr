'use strict';

/* Controllers */


function RootController($scope) {
    //console.log($viewContentLoaded);
}
//RootController.$inject = [];


function HomeController($scope, $route) {

    var timetable = $scope.timetable = sample_timetable;

    $scope.addSubject = function() {
        timetable.subjects.push({
            color: randColor().toString(16),
            clazzes: []
        });
    }

    $scope.removeSubject = function(subject) {
        for(var i = 0, ii = timetable.subjects.length; i < ii; i++) {
            if(subject === timetable.subjects[i]) {
                $scope.timetable.subjects.splice(i, 1);
            }
        }
    }

    $scope.addClazz = function(subject) {
        subject.clazzes.push({
            sessions: []
        });
    }

    $scope.removeClazz = function(subject, clazz) {
        for(var i = 0, ii = subject.clazzes.length; i < ii; i++) {
            if(clazz === subject.clazzes[i]) {
                subject.clazzes.splice(i, 1);
            }
        }
    }

    $scope.addSession = function(clazz) {
        clazz.sessions.push({
            DOW: 0
        });
    }

    $scope.removeSession = function(clazz, session) {
        for(var i = 0, ii = clazz.sessions.length; i < ii; i++) {
            if(session === clazz.sessions[i]) {
                clazz.sessions.splice(i, 1);
            }
        }
    }

}
//HomeController.$inject = [];


function AboutController() {

}
//AboutController.$inject = [];

function ContactController() {

}
//AboutController.$inject = [];


/* Utility functions */

function randColor() {
    // Max value of a hex color code (0xffffff)
    var MAX_HEX = 16777215;

    return Math.floor(Math.random() * MAX_HEX);
}

function updateColorPickers() {

    $(".colorpick").colorpicker().on('changeColor', function(e) {
        console.log(e);
    });
}


var sample_timetable = {
    "name": "Semester 2, 2012",
    "school": "UQ",
    "subjects": [
        {
            "name": "MECH2100",
            "color": "#aaf3de",
            "clazzes": [
                {
                    "name": "L",
                    "sessions": [
                        {
                            "DOW": 2,
                            "start": "0900",
                            "end": "1000",
                            "location": "80-2.171",
                            "info": "Some addition information (1 line max)"
                        },
                        {
                            "DOW": 4,
                            "start": "0800",
                            "end": "0900",
                            "location": "80-2.171"
                        }
                    ]
                },
                {
                    "name": "T2",
                    "sessions": [
                        {
                            "DOW": 2,
                            "start": "1400",
                            "end": "1600",
                            "location": "50-C207"
                        }
                    ]
                }
            ]
        },
        {
            "name": "ENGG1500",
            "color": "#a900b4",
            "clazzes": [
                {
                    "name": "L1",
                    "sessions": [
                        {
                            "DOW": 2,
                            "start": "1000",
                            "end": "1100",
                            "location": "50-T203"
                        },
                        {
                            "DOW": 3,
                            "start": "1200",
                            "end": "1300",
                            "location": "27A-220"
                        },
                        {
                            "DOW": 5,
                            "start": "1100",
                            "end": "1200"
                        }
                    ]
                },
                {
                    "name": "T20",
                    "sessions": [
                        {
                            "DOW": 2,
                            "start": "1200",
                            "end": "1400",
                            "location": "78-420"
                        }
                    ]
                },
                {
                    "name": "S",
                    "sessions": [
                        {
                            "DOW": 5,
                            "start": "1100",
                            "end": "1200",
                            "intermittent": true
                        }
                    ]
                }
            ]
        }
    ]
};




