var currProgress = 0;
var currTabIndex = 0;
var tabCount = 0;
var tabsInstance;
var progressStep;
//Eventually everything should be handled as views, including the forms
var viewList = {
    "views": {
        "initialView": {
            "name": ""
        },
        "simpleJourneyView": {
            "name": ""
        },
        "advancedJourneyView": {
            "name": ""
        },
        "resultsView": {
            "name": ""
        }
    }
}
var currentView = viewList[0];
var progressTrackerEl = new ldBar("#progressTracker");

