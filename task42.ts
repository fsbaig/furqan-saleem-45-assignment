let magician : string [] = ["aiman","rohan","mariyam"];
function show_magician(magician: string[]){
magician.forEach(magician => {
 console.log(magician);    
});
}
//show_magician(magician);

function make_great(magicians: string[])  {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magician); // Modifies the original array
show_magician(magician)