$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();


    tabsInstance = M.Tabs.getInstance($('#tabsNav'));
    tabCount = $('.question-container').length;
    progressStep = 100 / (tabCount - 1);

    //Automatically continue to next page is enter is press while an input is focused
    $(this).keypress(function (event) {
        if (event.keyCode == 13) {
            if (event.target.nodeName === "INPUT") {
                nextTab();
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    try {
        let app = firebase.app();
        var database = firebase.database();
        // let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
        console.error(e);
        // document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
});