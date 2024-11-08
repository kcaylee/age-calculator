const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your current age: ", (currentAge) => {
    currentAge = parseInt(currentAge);
    const targetAge = 90;
    const remainingYears = targetAge - currentAge;
    const remainingWeeks = remainingYears * 52;
    console.log(`You have ${remainingWeeks} weeks left.`);
    readline.close();
});

