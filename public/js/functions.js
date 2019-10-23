function updateProgress(currProgress) {
    progressTrackerEl.set(currProgress);
}

function prevTab() {
    currProgress-=10;
    updateProgress(currProgress);
}

function nextTab() {
    currProgress+=10;
    updateProgress(currProgress);
}