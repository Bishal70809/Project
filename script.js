const calculate = () => { 
    // Getting input from user
    let webTech = document.querySelector("#webTech").value; 
    let dsa = document.querySelector("#dsa").value; 
    let coa = document.querySelector("#coa").value; 
    let math = document.querySelector("#math").value; 
    let lp = document.querySelector("#lp").value; 
    let cs21 = document.querySelector("#cs21").value; 
    let grades = ""; 
    
    // Input is string so typecasting is necessary. 
    let totalgrades = 
        parseFloat(webTech) + 
        parseFloat(dsa) + 
        parseFloat(coa) + 
        parseFloat(math) + 
        parseFloat(lp) + 
        parseFloat(cs21); 
    
    // Checking the condition for providing the grade to student based on percentage 
    let percentage = (totalgrades / 600) * 100; 
    if (percentage <= 100 && percentage >= 80) { 
        grades = "A"; 
    } else if (percentage <= 79 && percentage >= 60) { 
        grades = "B"; 
    } else if (percentage <= 59 && percentage >= 40) { 
        grades = "C"; 
    } else { 
        grades = "F"; 
    } 
    
    // Checking if the values are empty, if empty then show "please fill them"
    if (webTech == "" || dsa == "" || coa == "" || math == "" || lp == "" || cs21 == "") { 
        document.querySelector("#showdata").innerHTML = "Please enter all the fields"; 
    } else { 
        // Checking the condition for fail and pass 
        if (percentage >= 40) { 
            document.querySelector("#showdata").innerHTML = 
                `Out of 600 your total is ${totalgrades} and percentage is ${percentage}%.<br> 
                Your grade is ${grades}. You are Pass.`; 
        } else { 
            document.querySelector("#showdata").innerHTML = 
                `Out of 600 your total is ${totalgrades} and percentage is ${percentage}%.<br> 
                Your grade is ${grades}. You are Fail.`; 
        } 
    } 
}; 
