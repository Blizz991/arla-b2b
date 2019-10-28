//This emulates loading for the prototype
function initializeLoading() {
    // repeat with the interval of 0.5 seconds
    // let timerId = setInterval(() =>
    //     updateLoadingBar(),
    //     1000);

    updateLoadingBar();
    // after 5 seconds stop
    setTimeout(() => {
        // clearInterval(timerId);
        $('#initialView').slideUp('slow', function () {
            $('#loginView').removeClass('hide');
        });
    }, 500);
}

function updateLoadingBar() {
    // loadingBarProgress += 20;
    loadingBarProgress = 100;
    loadingBarEl.set(loadingBarProgress);

    //Reset loadingBarProgress
    loadingBarProgress = 0;
}

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
    switchTab();

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
        // $('#nextTabBtn').addClass('disabled');
        // $('#nextTabBtn span').text('Next');
        $('#nextTabBtn').hide();
        $('#advancedSubmitBtn').show();
    } else {
        let nextTabEl = $('#tab-' + (currTabIndex + 1));
        $('#nextTabBtn').removeClass('disabled');
        $('#nextTabBtn span').text(nextTabEl.find('h2').text());
        $('#nextTabBtn').show();
        $('#advancedSubmitBtn').hide();
    }
}

function switchTab() {
    updateBtnStates();
    updateProgress(currProgress);
    tabId = 'tab-' + currTabIndex;
    tabsInstance.select(tabId);
    if ($('#' + tabId).find('input').length > 0) {
        // console.log('Input found, setting focus');
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

function updateFarmSelect() {
    let regionSelect = $('#selectRegion');
    let farmSelect = $('#selectFarm');

    //Clear the select of previous options
    farmSelect.find('option').not(':first').remove();

    switch (regionSelect.val()) {
        case "north":
            northFarms.forEach(element => {
                farmSelect.append(`<option value="${element}"> 
                ${element}
           </option>`);
            });
            break;
        case "south":
                southFarms.forEach(element => {
                    farmSelect.append(`<option value="${element}"> 
                    ${element}
               </option>`);
                });
            break;
        case "zealand":
                zealandFarms.forEach(element => {
                    farmSelect.append(`<option value="${element}"> 
                    ${element}
               </option>`);
                });
            break;
        default:
            console.log("Farm selection broke");
            break;
    }

    farmSelect.removeAttr('disabled');
    farmSelect.parent().removeClass('disabled');

    //Set value to first option and reinitialize the select to update the view
    farmSelect.val($("#target option:first").val());

    farmSelect.formSelect();
}

function showAdvancedView() {
    $('#loginView').fadeOut("slow", function(){
        $('#advancedJourneyView').fadeIn("fast");
        $('#footerNav').removeClass('ld-bar-hack');
    });
}

function showSimpleView() {
    $('#loginView').fadeOut("slow", function(){
        $('#simpleJourneyView').fadeIn("fast");
    });
}