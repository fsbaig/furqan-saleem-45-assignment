"use strict";
let magician = ["aiman", "rohan", "mariyam"];
function show_magician(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
//show_magician(magician);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magician); // Modifies the original array
show_magician(magician);
