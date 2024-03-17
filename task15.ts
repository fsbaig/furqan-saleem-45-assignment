let guestList: string[] = [
    " Arsalan",
    "moiz khalid",
    "arish alvi",
  ];

    
  let guesthowcantMakeit: string= "arsalan";
console.log(`${guesthowcantMakeit}"can't make it to dinner"`)
//step 2 replace guest with new guest
let newguest: string= "rohan"
let indexOfguesthocanmakeit: number = guestList.indexOf(guesthowcantMakeit);
//console.log(indexOfguesthocanmakeit);
if (indexOfguesthocanmakeit !== -1)
{
    guestList[indexOfguesthocanmakeit]=newguest
}
//console.log(guestList[2])
console.log("second set of invitation message");
guestList.forEach((guest:string)=>
{
    console.log(`dear ${guest},you are invited for dinner`)
}

)