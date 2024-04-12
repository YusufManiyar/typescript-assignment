var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var numResult = [];
var textResult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj);
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    numResult.push(result);
    var stringResult = add(num1, num2);
    textResult.push(stringResult);
    console.log(numResult, textResult);
    printResult({ val: result, timestamp: new Date() });
});
var myPromise = new Promise(function (res, rej) {
    setTimeout(function () {
        res('It worked!');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
