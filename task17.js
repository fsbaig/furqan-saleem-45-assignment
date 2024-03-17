"use strict";
const guests = [
    " Arsalan",
    "moiz khalid",
    "arish alvi",
    "noor",
    "ali",
    "rohan",
];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`sorry${removedGuest}i cant invited uou to the dinner `);
}
guests.forEach(guests => {
    console.log(`dear ${guests}you are still invited for dinner`);
});
guests.splice(0, guests.length);
console.log(guests);
