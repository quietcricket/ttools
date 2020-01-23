//content script
var clickedElement = null;

document.addEventListener("mousedown", function (event) {
    if (event.button == 2) {
        clickedElement = event.target;
    }
}, true);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    clickedElement.innerHTML = request;
});