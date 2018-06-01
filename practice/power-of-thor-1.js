/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

var x = initialTX;
var y = initialTY;

// game loop
while (true) {
    // The remaining amount of turns Thor can move. Do not remove this line.]
    var remainingTurns = parseInt(readline());

    function getY() {
        if (y > lightY) {
            y--;
            return "N";
        }
        if (y < lightY) {
            y++;
            return "S";
        }
        return "";
    }

    if (x > lightX) {
        x--;
        print(getY() + "W");
    } else if (x < lightX) {
        x++;
        print(getY() + "E");
    } else {
        print(getY());
    }
    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
}
