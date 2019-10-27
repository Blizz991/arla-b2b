function updateProgress(currProgress) {
    progressTrackerEl.set(currProgress);
}

function prevTab() {
    currProgress -= progressStep;
    currTabIndex--;
    switchTab()
}

function nextTab() {
    //TODO: Run validation for current tab
    //If validation success:
    currProgress += progressStep;
    currTabIndex++;
    switchTab()

    //else highlight invalid elements
}

function updateBtnStates() {
    //Prevent user from going to previous if at the start
    if (currTabIndex >= 1) {
        $('#prevTabBtn').removeClass('disabled');
    } else {
        $('#prevTabBtn').addClass('disabled');
    }

    //Prevent user from going to next if at the end
    if (currTabIndex === tabCount - 1) {
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
    tabsInstance.select(tabId);
}

function setInputValidationClass(inputEl, valid = false) { //Defaults to invalid
    if (valid) {
        $(inputEl).removeClass('valid').addClass('invalid');
    } else {
        $(inputEl).removeClass('invalid').addClass('valid');
    }
}