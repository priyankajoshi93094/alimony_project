document.getElementById('calculate').addEventListener('click', () => {
    const incomeHigher = Number(document.getElementById('incomeHigher').value);
    const incomeLower = Number(document.getElementById('incomeLower').value);
    const marriageYears = Number(document.getElementById('marriageYears').value);
    const children = Number(document.getElementById('children').value);

    
    if (incomeHigher <= 0 || incomeLower < 0 || marriageYears <= 0 || children < 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }

    const incomeDifference = incomeHigher - incomeLower;

    
    const alimonyBase = incomeDifference * 0.2 * marriageYears;
    const alimony = alimonyBase + (alimonyBase * 0.05 * children);

    const result = document.getElementById('result');
    result.textContent = `Estimated Alimony: ₹${alimony.toFixed(2)}`;
});
