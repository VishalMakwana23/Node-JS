const rs = require("readline-sync");
const chalk = require('chalk');

// global varibale to keep  socre
var score = 0;

console.log(chalk.green.bold('\n Welcome to The Money heist Quiz Game!!!\n'));

// user input
var playerName = rs.question("Hey  What is your name? : ")   
console.log(chalk.yellow(`Welcome ${playerName}\n`));


// creating qus answer objects
var firstQus = {
    qus: "What was the Professor's real name? : ",
    a: 'Ricardo Ramos',
    b: 'Sergio Marquina',
    c: 'Andres de Fonollosa',
    d: 'Agustin Ramos',
    ans: 'Sergio Marquina',
};
var secondQus = {
    qus: 'Who planned the Bank of Spain heist?',
    a: "The Professor's father",
    b: 'The Professor',
    c: 'Berlin',
    d: 'Palermo',
    ans: 'Berlin',
};
var thirdQus = {
    qus: 'What was the relation between Berlin and The Professor?',
    a: 'Best Friend',
    b: "Friend's Brother",
    c: 'Real Brother',
    d: 'Lovers',
    ans: 'Real Brother',
};
var fourthQus = {
    qus: 'Where did Raquel find The Professor after the first heist?',
    a: 'Sri Lanka',
    b: 'Maldives',
    c: 'Indonesia',
    d: 'Thailand',
    ans: 'Thailand',
};
var fifthQus = {
    qus: 'Who was Gandia?',
    a: 'Hostage',
    b: 'Robber',
    c: 'S.W.A.T',
    d: 'Personal Security Guard',
    ans: 'Personal Security Guard',
};
var sixthQus = {
    qus: 'With whom does Berlin get married?',
    a: 'Nairobi',
    b: 'Tatiana',
    c: 'Ariadna',
    d: 'Palermo',
    ans: 'Tatiana',
};
var seventhQus = {
    qus: "What was the name of Stockholm's son?",
    a: 'Ohio',
    b: 'Miami',
    c: 'Cincinnati',
    d: 'Lisbon',
    ans: 'Cincinnati',
};
var eightQus = {
    qus: 'How many robbers died till the 2nd heist?',
    a: 'Three',
    b: 'Four',
    c: 'Five',
    d: 'Six',
    ans: 'Four',
};
var ninethQus = {
    qus: 'How many people did the professor recruit to help him carry out his plan?',
    a: 'Nine',
    b: 'Ten',
    c: 'Seven',
    d: 'Eight',
    ans: 'Eight',
};
var tenthQus = {
    qus: 'How long did the professor take to prepare for the robbery?',
    a: 'Years',
    b: 'Weeks',
    c: 'Months',
    d: 'Days',
    ans: 'Years',
};


// list of all qus answer
qusArray = [firstQus, secondQus, thirdQus,fourthQus,fifthQus,sixthQus,seventhQus,eightQus,ninethQus];

// calling function
for (let i = 0; i < qusArray.length; i++) {
    gamePlay(qusArray[i].qus, qusArray[i].ans,qusArray[i].a,qusArray[i].b,qusArray[i].c,qusArray[i].d);
}
console.log('Final score is  :' + score);



function gamePlay(questions, correctAnswer,aa,bb,cc,dd) {
    console.log(chalk.cyanBright(questions));
    console.log("\t - " + aa);
    console.log("\t - " + bb);
    console.log("\t - " + cc);
    console.log("\t - " + dd);

    var answer = rs.question("Enter your Answer : ");
    if (answer.toLowerCase() == correctAnswer.toLowerCase()) {
        console.log(chalk.green('\t 😊 Correct! Bravo'));
        score = score + 5;
    } else {
        console.log(chalk.red('\t 🙁 Incorrect! Keep trying'));
        console.log(chalk.greenBright(' Correct Answer is: ' + correctAnswer));
        score = score - 2;
    }
    console.log(chalk.yellowBright('Your score is  :' + score));
    console.log(chalk.blue('\n----------------\n'));
}















