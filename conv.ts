#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

const currency : any = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR  : 74.57,
    PKR : 280
    

};

let user_answer = await inquirer.prompt([
{
    name: 'from',
    message : chalk.yellow('Enter From Currency'),
    type : 'list',
    choices : ['USD' , 'EUR', 'GBP', 'INR', 'PKR']
},
{
    name: 'to',
    message : chalk.yellow('Enter To Currency'),
    type : 'list',
    choices : ['USD' , 'EUR', 'GBP', 'INR', 'PKR']
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
console.log(chalk.green(convertedamount))

