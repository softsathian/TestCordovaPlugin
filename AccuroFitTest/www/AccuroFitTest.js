var exec = require('cordova/exec');

exports.add = function (arg0, success, error) {
    exec(success, error, 'AccuroFitTest', 'add', [arg0]);
};

exports.subtract = function (arg0, success, error) {
    exec(success, error, 'AccuroFitTest', 'subtract', [arg0]);
};
