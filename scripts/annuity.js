function calculatePresentValue() {
    let monthlyPayout = parseFloat(document.getElementById("monthlyPayout").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 100; // Convert to decimal
    let years = parseInt(document.getElementById("years").value);

    let monthlyInterestRate = interestRate / 12;
    let numberOfPayments = years * 12;
    let presentValue = monthlyPayout * (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) / monthlyInterestRate;

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Present Value: $${presentValue.toFixed(2)}</p>
    `;
}
