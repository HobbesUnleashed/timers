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

// Function to hide the welcome section and show the options section
function cont() {
    welcome.style.display = "none";
    options.style.display = "grid";
}


// Function to replace options section with clock and assign values to the variables needed for countdown
function setTimer(time) {
    options.style.display = "none";
    clocks.style.display = "grid";
    timeLeft = time;
    initialsetTime = time;
    document.getElementById("timer").innerHTML = time+1;
}

// Function to start, pause or resume the countdown - based upon whichever option was chosen as a timer
function startPause() {
    if (!isRunning) {

        countdown = setInterval(function() {
            timer.innerHTML = timeLeft+1;
            timeLeft--;

            // If time is less than or equal to 5 on screen - change text to red
            if (timeLeft < 4) {
                timer.style.color = "red";
            }

            // If timer reaches 0, replace numbers with an 'x'
            if (timeLeft < -1) {
                clearInterval(countdown);
                timer.innerHTML = "X";
            }
        }, 1000);
        startPauseBtn.innerHTML = "Pause";
    } else {
        clearInterval(countdown);
        startPauseBtn.innerHTML = "Resume"
    }

    isRunning = !isRunning;
}

// Function to add an extension to the countdown - one per player per frame
function addTime(buttonPressed) {
    if(buttonPressed == "red") {
        redcount++;
        timeLeft += 15;
        timer.innerHTML = timeLeft;
        timer.style.color = "white";
        redExtUsed =true;
        timeLeft--;
    } else {
        yellcount++;
        timeLeft += 15;
        timer.innerHTML = timeLeft;
        timer.style.color = "white";
        yellowExtUsed = true;
        timeLeft--;
    }
    red.disabled = true;
    yellow.disabled = true;
}

// Function to limit the amount of uses to one per frame
function showDisabled() {
    if(redcount > 0 && yellcount > 0) {
        console.log("both used");
        return;
    }
    if(redcount > 0) {
        yellow.disabled = false;
    }
    if(yellcount > 0) {
        red.disabled = false;
    }
}

// Function to reset the timer, but not the extensions used - Frames are made up of multiple visits usually
function reset() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = initialsetTime;
    timer.innerHTML = initialsetTime+1;
    startPauseBtn.innerHTML = "Start";
    timer.style.color = "white";
    showDisabled();
}

// Function to reset the frame - everything to be restored to seletions made in the options screen
function resetFrame() {
    reset();
    yellcount = 0;
    redcount = 0;
    redExtUsed = false;
    yellowExtUsed = false;
    red.disabled = false;
    yellow.disabled = false;
}

// Add an event listener for the color mode
document.getElementById("modeBtn").addEventListener("click", function() {
    if (!dark) {
        // Set the attributes to be changed to variables
        document.querySelector('img[name="primaryLogo"]').src="assets/images/wo-glasses.svg";
        document.querySelector('img[name="secondaryLogo"]').src="assets/images/Cousins-logo.webp";
        document.body.style.backgroundImage = "url(assets/images/Cousins.webp"
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.getElementById("header").style.backgroundImage = "linear-gradient(135deg, green, blue)";
        dark=true;
        this.innerHTML = `Dark mode`
    } else {
        document.querySelector('img[name="primaryLogo"]').src="assets/images/wo-glasses-bw.svg";
        document.querySelector('img[name="secondaryLogo"]').src="assets/images/Cousins-logo-bw.webp";
        document.body.style.backgroundImage = "url(assets/images/Cousins-bw.webp"
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.getElementById("header").style.backgroundImage = "linear-gradient(135deg, black, darkgrey)";
        dark=false;
        this.innerHTML = `Colour mode`
    }
});

// Function to retrun to the options screen and update which timer you require
function beginning() {
    clock.style.display = "none";
    welcome.style.display = "none";
    options.style.display = "grid";
    resetFrame();
}