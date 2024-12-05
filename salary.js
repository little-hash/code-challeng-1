function calculateSalary(basicSalary, benefits) {
    const TAX_RATE = 0.1;
    const NHIF_DEDUCTION = 0.02;  
    const NSSF_DEDUCTION = 0.06;  
    let grossSalary = basicSalary + benefits;
    let taxDeduction = grossSalary * TAX_RATE
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
document.getElementById("salaryForm").addEventListener("submit", function(event) {
    event.preventDefault();   
});