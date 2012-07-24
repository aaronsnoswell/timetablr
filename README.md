# Timetable app spec

## Intro

Need a simple web app for generating pretty timetables, suitable for printing. Output should
be of a format similar to http://jack.valmadre.net/timetable/tutorials/01.php. Users should
be able to save timetables to a .tbl text file that can be drag-dropped back into the web
app for further editing.

Nice to have's:
 - Share to facebook, twitter
 - User preferences stored to localstorage / cookies
 - Snazzy .er or .lr domain? timetab.lr? timetab.er?
 - ASCII-art easter egg in saved files

Proposed approach:
 - Twitter Bootstrap for html, css (http://twitter.github.com/bootstrap/)
 - AngularJS for js (http://angularjs.org/)
 - Minimal ?php? or Node.js for server-side stuff (nodejitsu for cloud hosting?)

NB: Input fields such as session location and subject name should auto-complete with a
list of data tied to the entered school that is built up gradually from data entered by users.


## Timetable JSON spec

"timetable" : {
    "name": "Semester 2, 2012",
    "school": "UQ",
    "subjects": [
        {
            "name": "MECH2100",
            "color": "aa03de",
            "classes": [
                {
                    "name": "L",
                    "sessions": [
                        {
                            "DOW": 2,
                            "start": "0900"
                            "end": "1000",
                            "location": "80-2.171",
                            "info": "Some addition information (1 line max)"
                        },
                        {
                            "DOW": 4,
                            "start": "0800"
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
                            "start": "1400"
                            "end": "1600",
                            "location": "50-C207"
                        }
                    ]
                }
            ]
        },
        {
            "name": "ENGG1500",
            "color": "a900b4",
            "classes": [
                {
                    "name": "L1",
                    "sessions": [
                        {
                            "DOW": 2,
                            "start": "1000"
                            "end": "1100",
                            "location": "50-T203"
                        },
                        {
                            "DOW": 3,
                            "start": "1200"
                            "end": "1300",
                            "location": "27A-220"
                        },
                        {
                            "DOW": 5,
                            "start": "1100"
                            "end": "1200"
                        }
                    ]
                },
                {
                    "name": "T20",
                    "sessions": [
                        {
                            "DOW": 2,
                            "start": "1200"
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
                            "start": "1100"
                            "end": "1200",
                            "intermittent": true
                        }
                    ]
                }
            ]
        }
    ]
}


## Sample of generated html markup

<div class="timetable">

    <div class="rowlabel 0">4am</div>
    <div class="rowlabel 1">5am</div>
    <div class="rowlabel 2">6am</div>
    <div class="rowlabel 3">7am</div>
    <div class="rowlabel 4">8am</div>
    <div class="rowlabel 5">9am</div>
    <div class="rowlabel 6">10am</div>
    <div class="rowlabel 7">11am</div>
    <div class="rowlabel 8">12am</div>
    <div class="rowlabel 9">1pm</div>
    <div class="rowlabel 10">2pm</div>
    <div class="rowlabel 11">3pm</div>
    <div class="rowlabel 12">4pm</div>
    <div class="rowlabel 13">5pm</div>
    <div class="rowlabel 14">6pm</div>
    <div class="rowlabel 15">7pm</div>
    <div class="rowlabel 16">8pm</div>
    <div class="rowlabel 17">9pm</div>
    <div class="rowlabel 18">10pm</div>
    <div class="rowlabel 19">11pm</div>

    <table>
        <thead>
            <tr class="header">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Saturday</td>
                <td class="hidden">Sunday</td>
            </tr>
        </thead>
        <tbody>
            <!-- 4-5am row -->
            <tr class="dim">
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 5-6am row -->
            <tr class="dim">
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 6-7am row -->
            <tr class="dim">
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 7-8am row -->
            <tr class="dim">
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 8-9am row -->
            <tr class="dim">
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 9-10am row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 10-11am row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 11am-12pm row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 12-1pm row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 1-2pm row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 2-3pm row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 3-4pm row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 4-5pm row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 5-6pm row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 6-7pm row -->
            <tr>
                <td class="dim"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="dim"></td>
                <td class="dim"></td>
            </tr>
            <!-- 7-8pm row -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <!-- 8-9pm row -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <!-- 9-10pm row -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <!-- 10-11pm row -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>

## User-configurable options

##  Formatting Options
First day of week: *Monday, Sunday
Timetable Start time: 4, 5, 6, *7, 8, 9, 10
Timetable Stop time: 4, 5, *6, 7, 8, 9, 10, 11
Weeday Label Format: *Sunday, Sun, SUN, S, Hidden
Time Label Format: *6pm, 9PM, 6p, 1800, 18:00, Hidden

### Display Options
*Show / Hide title
*Show / Hide Saturday
*Show / Hide Sunday
Page orientation: *Landscape / Portrait
Shade weekends: *T / F
Shade hours outside 9-5: *T / F
1/2 Hour Marks: On / *Off



