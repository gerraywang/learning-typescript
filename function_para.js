function sum() {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, vals_1 = vals; _a < vals_1.length; _a++) {
        var val = vals_1[_a];
        result += val;
    }
    return result;
}
console.log(sum(1, 2, 3));
