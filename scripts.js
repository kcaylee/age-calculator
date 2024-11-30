document.getElementById('calculateButton').addEventListener('click', () => {
    const ageInput = document.getElementById('ageInput').value.trim(); // Get the input value
    const currentAge = parseInt(ageInput); // Convert input to an integer

    if (isNaN(currentAge) || currentAge < 0) {
        alert("⛔ Please enter a valid age greater than or equal to 0!"); // Show alert for invalid input
        return;
    }

    const targetAge = 90;
    const remainingYears = targetAge - currentAge;
    const remainingWeeks = remainingYears * 52;

    if (remainingYears > 0) {
        alert(`✨ You have ${remainingWeeks} weeks left until age 90. ✨`);
    } else if (remainingYears === 0) {
        alert("🎉 You're 90 years old! Enjoy your milestone! 🎉");
    } else {
        alert(`🎉 You've surpassed 90 years! Keep enjoying life! 🎉`);
    }
});
