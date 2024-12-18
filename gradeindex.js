const prompt = require("prompt-sync")();

function generateGrade() {
    let marks = parseInt(prompt("Enter student marks (0 to 100):"));
    

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Please enter a grade between 0 and 100.");
        return;
    }

    let grade;
    
    if (marks > 79) {
        grade = "A";
        console.log("Good job");
    } else if (marks >= 60) {
        grade = "B";
        console.log("Almost there");
    } else if (marks >= 50) {
        grade = "C";
        console.log("Keep up");
    } else if (marks >= 40) {
        grade = "D";
        console.log("Work harder");
    } else {
        grade = "E";
        console.log("Extra classes for you");
    }
    
    // Output the final grade
    console.log(`The grade for ${marks} marks is: ${grade}`);
}

generateGrade();
