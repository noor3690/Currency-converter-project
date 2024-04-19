#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.blue.bold("WELCOME TO CURRENCY CONVERTER"))
const currency : any = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR  : 74.57,
    PKR : 280,
    RiYAL : 3.75,
    TAKA : 109.81,
    YUAN : 7.23,
    LIRA : 32.03,
    AFGANI : 71.37

};
let condition = true;
while (condition)
{let user_answer = await inquirer.prompt([
{
    name: 'from',
    message : chalk.yellow('Enter From Currency'),
    type : 'list',
    choices : ['USD' , 'EUR', 'GBP', 'INR', 'PKR' ,'RiYAL' , 'TAKA', 'YUAN', 'LIRA', 'AFGANI']
},
{
    name: 'to',
    message : chalk.yellow('Enter To Currency'),
    type : 'list',
    choices : ['USD' , 'EUR', 'GBP', 'INR', 'PKR','RiYAL' , 'TAKA', 'YUAN', 'LIRA', 'AFGANI']
},
{
    name: 'amount',
    message : chalk.yellow('Enter Your Amount'),
    type : 'number'
},
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedamount = baseAmount * toAmount
// console.log(` ${fromAmount} \n ${toAmount} \n ${amount} `);
console.log(chalk.red.bold(convertedamount))

let answer = await inquirer.prompt({
    name : 'exit',
    type : 'confirm',
     message : chalk.green ('Do you want to exchange more currency'),
     default : 'true'
})
condition = (answer.exit)
}
console.log("Thank You!")
