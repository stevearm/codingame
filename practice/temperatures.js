/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

// n = 1;
// temps = "-273"

if (n === 0) {
    print("0");
} else {

printErr("Inputs:", temps);
var parts = temps.split(" ");
var best = Math.abs(parts[0]);
var bestNeg = parts[0] < 0;

for (var i = 1; i < parts.length; i++) {
    var abs = Math.abs(parts[i]);
    printErr("Does", parts[i], abs, "override", best, bestNeg);
    if (abs < best || (abs == best && parts[i] > 0)) {
        printErr("Keeping", parts[i], abs);
        best = abs;
        bestNeg = parts[i] < 0;
    }
}

if (bestNeg) { best = best * -1; }
print(best);

}
