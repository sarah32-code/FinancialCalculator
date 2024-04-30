function calculateFutureValue() {
    let deposit = parseFloat(document.getElementById("deposit").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 100; 
    let years = parseInt(document.getElementById("years").value);

    let futureValue = deposit * Math.pow(1 + interestRate, years);
    let totalInterest = futureValue - deposit;

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Future Value: $${futureValue.toFixed(2)}</p>
        <p>Total Interest Earned: $${totalInterest.toFixed(2)}</p>
    `;
}
