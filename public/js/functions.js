function updateProgress(currProgress) {
    progressTrackerEl.set(currProgress);
}

function prevTab() {
    currProgress -= progressStep;
    currTabIndex--;
    switchTab()
}

function nextTab() {
    currProgress += progressStep;
    currTabIndex++;
    console.log('Tab index is:' + currTabIndex);    
    switchTab()
}

function updateBtnStates() {
    //Prevent user from going to previous if at the start
    if (currTabIndex >= 1) {
        $('#prevTabBtn').removeClass('disabled');
    } else {
        $('#prevTabBtn').addClass('disabled');
    }

console.log('Tab index is:' + currTabIndex);

    //Prevent user from going to next if at the end
    if (currTabIndex === tabCount-1) {
        $('#nextTabBtn').addClass('disabled');
        //TODO: Add 'hand in' button that takes you to the data overview
    } else {
        $('#nextTabBtn').removeClass('disabled');
    }
}

function switchTab() {
    updateBtnStates();
    updateProgress(currProgress);
    tabId = 'tab-' + currTabIndex;
    console.log(tabId);
    tabsInstance.select(tabId);
    console.log('Tab index is:' + currTabIndex);  
}