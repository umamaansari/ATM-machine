import inquirer from "inquirer";
let myBalance = 100000; // Dollar
let myPin = 1234;
// Print welcome message
console.log("Welcome to Code with Umama ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, login successfully!");
    console.log(`Current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["withdraw amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount:",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdrawn successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your account balance is ${myBalance}`);
    }
}
else {
    console.log("Pin is incorrect, try again!");
}
