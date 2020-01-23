var mapping = {};
for (var i = 0; i < 10; i++) {
    mapping[i + ''] = i;
}
for (var i = 0; i < 26; i++) {
    mapping[String.fromCharCode(97 + i)] = 10 + i;
}
var reverse_mapping = {};
for (var key in mapping) {
    reverse_mapping[mapping[key]] = key;
}

function convert36to10(input) {
    var value = 0;
    for (var i = 0; i < input.length; i++) {
        value += mapping[input[input.length - i - 1]] * Math.pow(36, i);
    }
    return value;
}

function convert10to36(input) {
    var value = '';
    var n = parseInt(input);

    while (n > 0) {
        var remainder = n % 36;
        value = reverse_mapping[remainder] + value;
        n = Math.floor(n / 36);
    }
    return value;
}