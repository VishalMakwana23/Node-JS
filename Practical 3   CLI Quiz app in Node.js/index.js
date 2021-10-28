const readline = require("readline");
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const data = require("./data")
var i = 0;
var score = 0;
var correctans = "";
var username = "";



var que = () => {
    if (i < data.length) {
        console.log(chalk.blue('\n-----------------------------------------\n'));
        console.log("\nQ - " + (i + 1) + "." + data[i].question);
        console.log("A : " + data[i].a);
        console.log("B : " + data[i].b);
        console.log("C : " + data[i].c);
        console.log("D : " + data[i].d);
        correctans = data[i].ans;

        if (correctans == data[i].a) {
            correctans = "A";
        }
        else if (correctans == data[i].b) {
            correctans = "B";
        }
        else if (correctans == data[i].c) {
            correctans = "C";
        }
        else if (correctans == data[i].d) {
            correctans = "D";
        }

    }
};


var inputans = () => {
    if (i == data.length) {
        console.log("\n");
        console.log("Game Over 😊😊😊 ");
        console.log(username + " Your Final Score is : ", score);
        console.log("");
        rl.close();
        return;
    }
    rl.question("\nEnter your Answer : ", (q) => {
        q = q.toUpperCase();
        if (q == "A" || q == "B" || q == "C" || q == "D") {
            if (q === correctans) {
                score += 5;
                console.log(chalk.green('\t 😊 Correct! Bravo'));
                console.log(chalk.yellowBright('Your score is  : ' + score));
               // console.log(chalk.blue('\n-----------------------------------------\n'));

            } else {
                console.log(chalk.red('\t 🙁 Incorrect! Keep trying'));
                console.log(chalk.greenBright(' Correct Answer is: ' + data[i].ans));
                score -= 2;
                console.log(chalk.yellowBright('Your score is  : ' + score));
               // console.log(chalk.blue('\n-----------------------------------------\n'));
            }
            i++;
            repeat();
        } else {
            console.log(chalk.red.bold("Please enter your answer in  A,B,C,D"));
            console.log(chalk.red.bold("Please try Again"));
            inputans();
        }
    });
};

var instruction = () => {
    console.log("------------------------------------------------------");
    console.log(chalk.green.bold('Welcome to The Money Heist Quiz!!!\n'));
    console.log("Total 10 Questions\n");
    console.log("If Correct Answer then get +5 point\n");
    console.log("If Wrong Answer then get -2 Point\n");
};

var name = () => {
    username = rl.question("\nEnter Your Name : ", (ans) => {
        username = ans;
        instruction();
        repeat();
    });
};


var repeat = () => {
    que();
    inputans();
};
name();