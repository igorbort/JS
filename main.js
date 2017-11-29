// First task
function sum(a, b) {
    if (b > a) {
        var result = 0;
        for (var i = a; i <= b; i++) {
            if (i % 2 === 0 && i % 3 === 0) {
                result += i;
            }
        }
        return result;
    } else {
        return false;
    }
}

var test = sum(20, 0);
console.log(test);

// Second task

var second = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++)
        sum += arguments[i]
    return sum
};

var s = second(20, 10, 30);
console.log(s);

// Third task

var recursion = function (i, max) {
    if (i < max) {
        return i + recursion(i + 1, max);
    } else {
        return i;
    }
};

var ss = recursion(0, 100);
console.log(ss);