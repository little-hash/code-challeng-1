const prompt = require("prompt-sync")();

function checkSpeeds() {
    const speeds = [90, 80, 100, 120, 200, 400, 300];  // Array of speeds to check
    const speedLimit = 70;  // The speed limit
    const suspensionLimit = 12;  // Demerit points limit for license suspension
    
    speeds.forEach(speed => {
        let result;
        if (speed <= speedLimit) {
            result = "Ok";  // Speed is within the limit
        } else {
            let overLimit = speed - speedLimit;  // How much the speed exceeds the limit
            let demeritPoints = Math.floor(overLimit / 5);  // Calculate demerit points
            
            if (demeritPoints > suspensionLimit) {
                result = "License suspended";  // If demerit points exceed limit, suspend license
            } else {
                result = "Total demerit points: " + demeritPoints;  // Otherwise, show the demerit points
            }
        }

        // Display the result for each speed
        console.log(`Speed: ${speed} km/h -> ${result}`);
    });
}

checkSpeeds();
