function calculateSalary(basicSalary, benefits) {
    const TAX_RATE = 0.1;
    const NHIF_DEDUCTION = 0.02;  
    const NSSF_DEDUCTION = 0.06;  

    // 1. Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    // 2. Calculate Payee (Tax) Deduction
    let taxDeduction = grossSalary * TAX_RATE;

    // 3. Calculate NHIF Deduction
    let nhifDeduction = grossSalary * NHIF_DEDUCTION;

    // 4. Calculate NSSF Deduction
    let nssfDeduction = grossSalary * NSSF_DEDUCTION;

    // 5. Calculate Total Deductions
    let totalDeductions = taxDeduction + nhifDeduction + nssfDeduction;

    // 6. Calculate Net Salary
    let netSalary = grossSalary - totalDeductions;

    // Return the results
    return {
        grossSalary,
        taxDeduction,
        nhifDeduction,
        nssfDeduction,
        totalDeductions,
        netSalary
    };
}

n
document.getElementById("salaryForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let basicSalary = parseFloat(document.getElementById("basicSalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary <= 0 || benefits < 0) {
        alert("Please enter valid values for salary and benefits.");
        return;
    }
    let salaryDetails = calculateSalary(basicSalary, benefits);
    document.getElementById("result").innerHTML = `
        <h3>Salary Breakdown:</h3>
        <p><strong>Basic Salary:</strong> ${salaryDetails.grossSalary - benefits}</p>
        <p><strong>Benefits:</strong> ${benefits}</p>
        <p><strong>Gross Salary:</strong> ${salaryDetails.grossSalary.toFixed(2)}</p>
        <p><strong>Payee (Tax):</strong> ${salaryDetails.taxDeduction.toFixed(2)}</p>
        <p><strong>NHIF Deduction:</strong> ${salaryDetails.nhifDeduction.toFixed(2)}</p>
        <p><strong>NSSF Deduction:</strong> ${salaryDetails.nssfDeduction.toFixed(2)}</p>
        <p><strong>Total Deductions:</strong> ${salaryDetails.totalDeductions.toFixed(2)}</p>
        <p><strong>Net Salary:</strong> ${salaryDetails.netSalary.toFixed(2)}</p>
    `;
});