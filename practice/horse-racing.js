/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
printErr("N", N);
var strengths = [];
for (var i = 0; i < N; i++) {
    var pi = parseInt(readline());
    printErr("Single", pi);
    strengths.push(pi);
}
strengths.sort(function(x,y){ return x - y; });
printErr(strengths);

var smallestGap = strengths[1] - strengths[0];
for (var i = 2; i < strengths.length; i++) {
    var gap = strengths[i] - strengths[i - 1];
    if (gap < smallestGap) smallestGap = gap;
}

print(smallestGap);
