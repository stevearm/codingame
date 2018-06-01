/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var MESSAGE = readline();
printErr("Message", MESSAGE);
var binary = "";
for (var i = 0; i < MESSAGE.length; i++) {
    var value = MESSAGE.codePointAt(i);
    printErr("Appending letter", MESSAGE[i], value);
    binary += (value >>> 0).toString(2).padStart(7, "0");
}
printErr("Binary", binary);
var block = binary[0];

function encode(x) {
    if (x == "1") return "0 ";
    return "00 ";
}

var norris = encode(block) + "0";
for (var i = 1; i < binary.length; i++) {
    if (binary[i] != block) {
        norris += " " + encode(binary[i]);
    }
    block = binary[i];
    norris += "0";
}
print(norris);
