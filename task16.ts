//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.   
const guestList: string[] = [
    " Arsalan",
    "moiz khalid",
    "arish alvi",
  ];
for (let guest of guestList){
  console.log(`hello, ${guest} we just found bigger dinner table`)
}
//guest at begining
let newguestatBeigining:    string = "noor" 
guestList.unshift(newguestatBeigining)
//console.log(guestList)
//guest at middle
let newguestatmiddle: string = "ali"
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex,0,newguestatmiddle   )
//console.log(guestList)
//guest at end
let newGuestatend:string = "rohan"
guestList.push(newGuestatend);
console.log(guestList)
console.log("new set of invitation")
for (let guest of guestList){
    console.log(`dear ${guest} you are invited to dinner`)
}


