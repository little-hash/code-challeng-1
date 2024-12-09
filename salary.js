const prompt = require("prompt-sync")();

function calculateSalary(basicSalary, benefits) {
    const TAX_RATE = 0.1;
    const NHIF_DEDUCTION = 0.02;
    const NSSF_DEDUCTION = 0.06;
    let grossSalary = basicSalary + benefits;
    let taxDeduction = grossSalary * TAX_RATE;
    let nhifDeduction = grossSalary * NHIF_DEDUCTION;
    let nssfDeduction = grossSalary * NSSF_DEDUCTION;
    let totalDeductions = taxDeduction + nhifDeduction + nssfDeduction;
    let netSalary = grossSalary - totalDeductions;

    return {
        grossSalary,
        taxDeduction,
        nhifDeduction,
        nssfDeduction,
        totalDeductions,
        netSalary
    };
}

// Collect user input using prompt-sync
let basicSalary = parseFloat(prompt("Enter basic salary: "));
let benefits = parseFloat(prompt("Enter benefits: "));

// Validate input
if (isNaN(basicSalary) || basicSalary < 0 || isNaN(benefits) || benefits < 0) {
    console.log("Please enter valid positive numbers for both salary and benefits.");
} else {
    const salaryDetails = calculateSalary(basicSalary, benefits);

    console.log("\nSalary Breakdown:");
    console.log(`Gross Salary: Ksh ${salaryDetails.grossSalary.toFixed(2)}`);
    console.log(`Tax Deduction (10%): Ksh ${salaryDetails.taxDeduction.toFixed(2)}`);
    console.log(`NHIF Deduction (2%): Ksh ${salaryDetails.nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deduction (6%): Ksh ${salaryDetails.nssfDeduction.toFixed(2)}`);
    console.log(`Total Deductions: Ksh ${salaryDetails.totalDeductions.toFixed(2)}`);
    console.log(`Net Salary: Ksh ${salaryDetails.netSalary.toFixed(2)}`);
}
