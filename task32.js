"use strict";
let current_User = ["user1", "admin", "user3", "user4", "user5",];
let new_user = ["user1", "user6", "user7", "admin", "user9",];
new_user.forEach(new_user => {
    if (current_User.some(current_User => current_User.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} will need to enter new username `);
    }
    else {
        console.log(`${new_user} is avaliable`);
    }
});
