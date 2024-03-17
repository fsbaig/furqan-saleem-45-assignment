// Store a person's name with whitespace characters
let Name : string = "\t \n John Doe \t \n";

// Print the name with whitespace
console.log("Name with whitespace:");
console.log(Name);

// Print the name after stripping whitespace
let strippedName: string = Name.trim();
console.log("\nName after stripping whitespace:");
console.log(strippedName);
