"use strict";
function make_shirt(size = "large", message = "i love python") {
    console.log(`make shirt size ${size} with message print on front of t shirt ${message}`);
}
make_shirt(); //default large message
make_shirt("medium");
make_shirt("small", "dive into coding");
make_shirt("xl", "Ai");
