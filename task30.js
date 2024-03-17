"use strict";
let username = ["admin", "user1", "user2", "user3", "user4", "user5",];
username.forEach(username => {
    if (username === "admin") {
        console.log("hello! admin you would like to see status report");
    }
    else {
        console.log(`hello ${username} ethankyou for loging in again`);
    }
});
