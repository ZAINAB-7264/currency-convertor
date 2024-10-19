import inquirer from 'inquirer'


const currency:any = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    IMR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
        {
    
    name:'from',
    message:"enter from currency",
    type: 'list',
    choices: ['USD','EUR','GBP','IMR','PKR']
        },
        {





    name:'to',
    message:"enter to currency",
    type: 'list',
    choices: ['USD','EUR','GBP','IMR','PKR']
        },
          {
            name: 'amount',
            messag:"enter your Amount",
            type:'number'
          }
    ]
)


    let fromamount = currency[user_answer.from]
    let totalAmount = currency[user_answer.to]
    let amount = user_answer.amount
    let baseamount = amount / fromamount//USD base currency // 4
    let convertedAmount = baseamount * totalAmount
    console.log(convertedAmount)
    
     