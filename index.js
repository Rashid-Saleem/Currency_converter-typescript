import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
let Pkrtousd = 0.004;
let Usdtopkr = 229.10;
let Dirhamtopkr = 62;
let Pkrtodirham = 0.016;
let Dirhamtousd = 0.272;
let Usdtodirham = 3.67;
const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    let b = chalkAnimation.rainbow('_____________CURRENCY CONVERTER____________');
    await sleep();
    b.stop();
    // await converter();
}
// await welcome();
async function converter() {
    var v = await inquirer.prompt([
        {
            type: "list",
            name: "CURRENCY_FROM",
            message: 'SELECT Currency from which you want to convert',
            choices: ["PKR", "DIRHAM", "USD"]
        },
        {
            type: "list",
            name: "CURRENCY_TO",
            message: 'SELECT Currency to which you want to convert',
            choices: ["PKR", "DIRHAM", "USD"]
        },
        {
            type: "number",
            name: "AMOUNT",
            message: 'Enter amount :',
        },
    ])
        .then((answers) => {
        if (answers.CURRENCY_FROM == "PKR") {
            if (answers.CURRENCY_TO == "Dirham") {
                let a = answers.AMOUNT * 0.016;
                console.log("The amount from PKR TO DIRHAM is" + a);
            }
            else if (answers.CURRENCY_TO == "USD") {
                let B = answers.AMOUNT * 3.67;
                console.log("The amount from USD TO DIRHAM is" + B);
            }
            else {
                console.log("The amount from PKR TO PKE is" + answers.AMOUNT);
            }
        }
        else if (answers.CURRENCY_FROM == "DIRHAM") {
            if (answers.CURRENCY_TO == "PKR") {
                let K = answers.AMOUNT * 62;
                console.log("The amount from Dirham to PKR  is" + K);
            }
            else if (answers.CURRENCY_TO == "USD") {
                let L = answers.AMOUNT * 0.272;
                console.log("The amount from Dirham TO USD is" + L);
            }
            else {
                console.log("The amount from DIRHAM TO DIRHAM is" + answers.AMOUNT);
            }
        }
        else {
            if (answers.CURRENCY_TO == "PKR") {
                let M = answers.AMOUNT * 229.10;
                console.log("The amount from USD to PKR  is" + M);
            }
            else if (answers.CURRENCY_TO == "Dirham") {
                let n = answers.AMOUNT * 3.67;
                console.log("The amount from   USD to Dirham is" + n);
            }
            else {
                console.log(("The amount from USD TO USD is" + answers.amount));
            }
        }
    });
}
async function startagain() {
    do {
        await welcome();
        await converter();
        var v = await inquirer.prompt([
            {
                type: "input",
                name: "select",
                message: "would you like to start again press y or n"
            }
        ]);
    } while (v.select == "y" || v.select == "Y");
}
await startagain();
