"use strict";
let guestList = [
    " Arsalan",
    "moiz khalid",
    "arish alvi",
];
let guesthowcantMakeit = "arsalan";
console.log(`${guesthowcantMakeit}"can't make it to dinner"`);
//step 2 replace guest with new guest
let newguest = "rohan";
let indexOfguesthocanmakeit = guestList.indexOf(guesthowcantMakeit);
//console.log(indexOfguesthocanmakeit);
if (indexOfguesthocanmakeit !== -1) {
    guestList[indexOfguesthocanmakeit] = newguest;
}
//console.log(guestList[2])
console.log("second set of invitation message");
guestList.forEach((guest) => {
    console.log(`dear ${guest},you are invited for dinner`);
});
