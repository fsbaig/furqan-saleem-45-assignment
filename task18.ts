let places: string [] = ["swaat","islamabad","lahore","rawalpindi","gilgit"];
//console.log("orignal order:",places);
//console.log("Alphabetical order:",places);
//console.log("orignal order:",places);
//console.log("Reversed alphabetical order:",places);
//console.log("orignal order:",places);
//places.reverse();
//console.log("Reserved order",places);
//places.reverse();
//console.log("orignal order:",places);
//places.sort();
//console.log("Alphabetical order:",places);
//places.reverse();
//console.log("Reversed alphabetical order:",places);


console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);