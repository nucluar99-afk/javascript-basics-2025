// This will be our first javascript file

console.log("hello world from java script")

// this is a string (text) varible
// strings are surronded by doubles "", single quotes '',
// or backtick ``
let username = "Nucluar";
// this varible name is camalCased
let favsong = "say what you want";

console.log(username, favsong);

// ressign the value
favsong = "sweet home alambama";
console.log(username, favsong);

//we concantenate and change numbers to strings
let whatHappens = username + favsong + 1000;

console.log(whatHappens)

// numbers are kinda for math stuff

let likes = -3.14159265365;
let subcribers = 3.1415926536;

//@ts-ignore I know what i am doing you stupid piece of code crap
whatHappens = likes / subcribers;
console.log(whatHappens)

// boleans are for true false

let noCap = true;
let cap = false;
let is2greaterThan3 = 2 > 3;

console.log(noCap, cap, is2greaterThan3);

// define a constant 
const DO_NOT_CHANGE_ME = "NOT ALLOWED!!!";

//this will fail as it is a constant
//DO_NOT_CHANGE_ME = "ALLOWED";

//Arrays - lists of stuff

let favSnacks = ["nutella", "oreos", "salsa chips"];
console.log(favSnacks, favSnacks[2]);
console.log("this is the number of snacks", favSnacks.length);

let squad = ["tall declan", "chris", "Sage", "colin", "sawyer", "cool declan"];

// objects - this grouped data/info

let profile = {
    username: "ineedsleep",
    favGame: "the legend of zelda",
    likes: 500000,
    subcribers: 1000000,
    friends: ["declan", "cool declan", "chris", "jesse", "lily"],
}
console.log(profile);

profile.likes = 999999;
console.log(profile);