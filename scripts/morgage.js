function calculateMortgage() {
    let principal = parseFloat(document.getElementById("principal").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    let loanLength = parseInt(document.getElementById("loanLength").value);

    let monthlyInterestRate = interestRate / 12;
    let numberOfPayments = loanLength * 12;
    let monthlyPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    let totalInterest = monthlyPayment * numberOfPayments - principal;

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
        <p>Total Interest Paid: $${totalInterest.toFixed(2)}</p>
    `;
}

