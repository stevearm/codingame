/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = parseInt(readline());
var H = parseInt(readline());
var T = readline();
var letters = Array(27).fill(1).map(function(x){ return Array(H).fill(""); });
for (var i = 0; i < H; i++) {
    var ROW = readline();
    for (var j = 0; j < ROW.length; j++) {
        letter = Math.floor(j / L);
        letters[letter][i] += ROW[j]
    }
}
var lettersMap = letters.reduce(function(acc, value, index){
                            acc["ABCDEFGHIJKLMNOPQRSTUVWXYZ?"[index]] = value;
                            return acc;
                        }, {});

for (var i = 0; i < H; i++) {
    var line = "";
    for (var j = 0; j < T.length; j++) {
        var letter = T[j];
        if (/^[A-Za-z]$/.test(letter)) {
            letter = letter.toUpperCase();
        } else {
            letter = "?";
        }
        line += lettersMap[letter][i];
    }
    print(line);
}
