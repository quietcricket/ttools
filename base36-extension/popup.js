var field36 = document.querySelector('#base36');
var field10 = document.querySelector('#base10');
field36.addEventListener('keyup', convert36);
field10.addEventListener('keyup', convert10);

function convert36() {
    var separator = "\n";
    if (field36.value.indexOf(',') > -1) {
        separator = ",";
    }
    var values = [];
    var lines = field36.value.split(separator);
    for (var i = 0; i < lines.length; i++) {
        values.push(convert36to10(lines[i]));
    }
    field10.value = values.join(separator);
}

function convert10() {
    var separator = "\n";
    if (field10.value.indexOf(',') > -1) {
        separator = ",";
    }
    var values = [];
    var lines = field10.value.split(separator);
    for (var i = 0; i < lines.length; i++) {
        values.push(convert10to36(lines[i]));
    }
    field36.value = values.join(separator);

}

chrome.tabs.query({
    "active": true
}, function(tabs) {
    if (tabs[0].url.indexOf('ads-admin.local.twitter.com') > -1) {
        var parts = tabs[0].url.split('/');
        if (parts.length < 7) return;
        field36.value = parts[6];
        convert36();
    }
});