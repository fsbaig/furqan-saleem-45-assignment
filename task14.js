"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
// Define the guest list
const guestList = [
    " Arsalan",
    "moiz khalid",
    "arish alvi",
];
// Function to create an invitation message
function createInvitation(name) {
    return `Dear ${name},\n\nYou are cordially invited to a delightful dinner at my place.
     Let's share stories, laughter, and good food!\n\nDate: [3-march-2024]\nTime: [8:00 pm]\n
     Location: [north nazimabad karachi]\n\nPlease RSVP at your earliest convenience.\n\nBest regards,\n[furqan saleem]`;
}
// Send invitations
guestList.forEach((guest) => {
    const invitation = createInvitation(guest);
    console.log(invitation);
});
