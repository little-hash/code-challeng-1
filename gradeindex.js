function generateGrade(){
    let marks = parseInt(prompt("enter student marks (0 and 100):"));
    if(isNaN(marks) || marks < 0 || marks > 100){
        alert("please enter a grade btw 0 and 100.");
        return;
    }
    let grade;
    if (marks > 79){
        grade = "A"
        alert("Good job")
    }else if(marks >= 60){
        grade = "B"
        alert("Almost there")
    }else if(marks >= 50){
        grade = "C"
        alert("keep up")
    }else if(marks >= 40){
        grade = "D"
        alert("Work harder")
    }else if(marks < 40){
        grade = "E"
        alert("Extra classes for you")
    }
    
    alert("The grade for "  +marks+" marks is:"  +  grade)
}
