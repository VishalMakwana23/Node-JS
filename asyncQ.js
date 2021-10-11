const readline = require("readline");

const rs = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chalk = require('chalk');
var playerName = "";
//var answer = "";


// global varibale to keep  socre
var score = 0;


console.log(chalk.green.bold('Welcome to The Game!!!\n'));

// user input
rs.question("Hey  What is your name? : ", function(pname){
    playerName = pname;    
    console.log(chalk.yellow(`Welcome ${playerName}\n`));

    // calling function
    callQuiz();
});



// creating qus answer objects
var firstQus = {
    qus: 'What is my fav  language : ',
    ans: 'js',
};
var secondQus = {
    qus: 'Are you reading this : ',
    ans: 'yes',
};
var thirdQus = {
    qus: 'Which year COVID widely spread : ',
    ans: '2020',
};
// list of all qus answer
qusArray = [firstQus, secondQus, thirdQus];


var callQuiz = () => {
    // calling function
    for (let i = 0; i < qusArray.length;i++) {


        

          var answer =  rs.question(chalk.cyanBright(qusArray[i].qus),function(ans){
                answer = ans;
            if ( qusArray[i].ans == answer) {
                console.log(chalk.green('\tcorrect'));
                score = score + 2;
               
            } else {
                console.log(chalk.red('\twrong'));
                console.log(chalk.greenBright('Correct Answer is: ' + answer));
                score = score - 1;
               
            }
            console.log(chalk.yellowBright('Your score is  :' + score));
            console.log(chalk.blue('\n----------------\n'));   
        });
        
    }
};

var finalScore = () => {
    console.log('Final score is  :' + score);
};












