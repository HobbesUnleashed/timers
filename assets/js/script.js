// Variables for the various screen views by ID
const options = document.getElementById("home");
const clock = document.getElementById("clocks");
const welcome = document.getElementById("welcome");
// Set the timer id to a variable
const timer = document.getElementById("timer");
//startPause button
const startPauseBtn = document.getElementById("startPause");
// Set constants for the elements to call regularly
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
// Initialize the countdown time in seconds
let timeLeft;
let initialsetTime;
// Variable to store the interval ID
let countdown;
// Flag to check if the timer is running
let isRunning = false;
// Flag to check if the add time button has been used
let yellowExtUsed = false;
// Flag to check if the add time button has been used
let redExtUsed = false;
// Flag to check if dark mode already active
let dark = false;
// Counters to track if the extension buttons have been pressed
var redcount = 0;
var yellcount = 0;