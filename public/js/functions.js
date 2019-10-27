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
        let prevTabEl = $('#tab-' + (currTabIndex - 1));
        $('#prevTabBtn').removeClass('disabled');
        $('#prevTabBtn span').text(prevTabEl.find('h2').text())
    } else { //User can't go back
        $('#prevTabBtn').addClass('disabled');
        $('#prevTabBtn span').text('Prev');
    }

    //Prevent user from going to next if at the end
    if (currTabIndex === tabCount - 1) {
        $('#nextTabBtn').addClass('disabled');
        $('#nextTabBtn span').text('Next')
        //TODO: Add 'hand in' button that takes you to the data overview
    } else { //User can't continue
        let nextTabEl = $('#tab-' + (currTabIndex + 1));
        $('#nextTabBtn').removeClass('disabled');
        $('#nextTabBtn span').text(nextTabEl.find('h2').text());
    }
}

function switchTab() {
    updateBtnStates();
    updateProgress(currProgress);
    tabId = 'tab-' + currTabIndex;
    tabsInstance.select(tabId);
    if ($('#' + tabId).find('input').length > 0) {
        console.log('Input found, setting focus');
        $('#' + tabId).find('input:first').focus();
    }


}

function setInputValidationClass(inputEl, valid = false) { //Defaults to invalid
    if (valid) {
        $(inputEl).removeClass('valid').addClass('invalid');
    } else {
        $(inputEl).removeClass('invalid').addClass('valid');
    }
}