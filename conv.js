import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
    // RIYAL :
    // TAKA :
    // YUAN: 
    // LIRA :
    // AFGHANI :
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter To Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number'
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedamount = baseAmount * toAmount;
// console.log(` ${fromAmount} \n ${toAmount} \n ${amount} `);
console.log(chalk.green(convertedamount));
let exitContinue = await inquirer.prompt({
    name: 'exist',
    message: 'Do you want to exist or continue',
    type: 'list',
    choices: ['Continue', 'Exist']
});
while (exitContinue.exist != 'Exit')
    ;
