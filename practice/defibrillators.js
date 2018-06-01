/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
function degToRad(brokenString) {
    return parseFloat(brokenString.replace(",", ".")) * Math.PI / 180;
}

var LON = degToRad(readline());
var LAT = degToRad(readline());

printErr("Me", LAT, LON);
var N = parseInt(readline());

function distance(lon, lat) {
    var latFix = degToRad(lat);
    var lonFix = degToRad(lon);
    printErr("Converted", latFix, lonFix);
    var x = (lonFix - LON) * Math.cos((latFix + LAT) / 2);
    var y = latFix - LAT;
    return Math.sqrt(x*x + y*y) * 6371;
}

var minDistance = -1;
var name = null;
for (var i = 0; i < N; i++) {
    var DEFIB = readline();
    printErr("Checking", DEFIB);
    var parts = DEFIB.split(";");
    var dist = distance(parts[parts.length - 2], parts[parts.length - 1]);
    if (minDistance == -1 || minDistance > dist) {
        minDistance = dist;
        name = parts[1];
    }
}

print(name);
