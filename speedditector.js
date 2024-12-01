function checkSpeeds() {
    const speeds = [90, 80, 100, 120, 200, 400, 300];
    const speedLimit = 70;
    const suspensionLimit = 12; 
    speeds.forEach(speed => {
        let result;
        if (speed <= speedLimit) {
            result = "Ok";
        } else {
            let overLimit = speed - speedLimit;
            let demeritPoints = Math.floor(overLimit / 5);
            
            if (demeritPoints > suspensionLimit) {
                result = "License suspended";
            } else {
                result = "Total demerit points: " + demeritPoints;
            }
        }

        // Display the result for each speed
        alert(`Speed: ${speed} km/h -> ${result}`);
    });
}