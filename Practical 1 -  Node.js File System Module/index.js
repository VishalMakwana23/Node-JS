/*
Write a Node.js program to do the following:

   - Create Directory ( Hint: fs.mkdir )
   - Remove Directory ( Hint: fs.rmdir )
   - Write File 
   - Read File 
   - Delete File
   - Append data to file
   - Update / Replace file with new data
   - Rename File

*/


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
var fileName = "";
var content = "";
var renameFile = "";
var fdirectory = "";




// implementation of function
var createDir = () =>{
    fs.mkdir(fdirectory, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log(" Directory created successfully");
        }
        reapeat();
    });
};

var removeDir = () => {
    fs.rmdir(fdirectory, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log(" Directory Removed successfully");
        }
        reapeat();
    });
};

var createFile = () => {
    fs.writeFile(fileName,content, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log( fileName + " saved successfully");
        }
        reapeat();
    });
};

var readFile = () => {

    fs.readFile(fileName, "utf8", function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
        reapeat();
    });
};

var deleteFile = () => {

    fs.unlink(fileName, function (err,result) {
        if (err){
            console.log(err)
        } else {
            console.log(fileName + "File deleted!");
        }
        reapeat();
      });
};

var appendFile = () => {
    fs.appendFile(fileName,content, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log( fileName + " Append data successfully");
        }
        reapeat();
    });
};

var updateFile = () => {
    fs.appendFile(fileName,content, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log( fileName + " Update data successfully");
        }
        reapeat();
    });
};

var reFile = () => {
    
    fs.rename(fileName, renameFile, function (err,result) {
        if (err){
            console.log(err)
        } else {
            console.log(renameFile + "File renamed successfully!");
        }
        reapeat();
      });
};



//All menu function 
var createDirectory = () => {

    console.log("Directory Creation Wizard")

    rl.question("Enter the directory name : ", function(dname){
        fdirectory = dname;
        createDir();
    });
};

var  removeDirectory = () => {

    console.log("Directory Remove Wizard")

    rl.question("Enter the directory name : ", function(dname){
        fdirectory = dname;
        removeDir();
    });
};

var createFileWizard = () => {

    console.log("File Creation Wizard")

    rl.question("Enter the file name : ", function(fname){
        fileName = fname + ".txt";

        rl.question("Enter the contents of file : ", function(fcon){
            content =  fcon;
            createFile();
            
        });
       
    });
    
};

var readFileWizard = () => {

    console.log("File Reading Wizard")

    rl.question("Enter the file name : ", function(fname){
        fileName = fname + ".txt"; 
        readFile();
    });
};

var deleteFileWizard = () => {

    console.log("File Delete Wizard")

    rl.question("Enter the file name : ", function(fname){
        fileName = fname + ".txt"; 
        deleteFile();
    });
};

var appendFileWizard = () => {

    console.log("Append File Wizard")

    rl.question("Enter the file name : ", function(fname){
        fileName = fname + ".txt";

        rl.question("Enter the contents of file : ", function(fcon){
            content = "\n" + fcon;
            appendFile();
            
        });
       
    });
};

var updateFileWizard = () => {

    console.log("Update File Wizard")

    rl.question("Enter the file name : ", function(fname){
        fileName = fname + ".txt";

        rl.question("Enter the contents of file : ", function(fcon){
            content = "\n" + fcon;
            updateFile();
            
        });
       
    });
};

var renameFileWizard = () => {

    console.log("File Rename Wizard")

    rl.question("Enter the current file name : ", function(fname){
        fileName = fname + ".txt";

        rl.question("Enter the new  file name: ", function(nfname){
            renameFile = nfname + ".txt";
            reFile();
        });
       
    });
};


//case 

var instruction = () => {
console.log("\n1 : Create Directory");
console.log("2 : Remove Directory");
console.log("3 : Create File");
console.log("4 : reade File");
console.log("5 : Delete File");
console.log("6 : Append into File");
console.log("7 : Update / Replace file with new data");
console.log("8 : Rename File");
console.log("9 : Exit");
};

var start = () => {

    rl.question("\n Please Enter your Choice : ", function(answer){
        if (answer == "1"){
            createDirectory();
        }else if (answer == "2"){
            removeDirectory();
        } else if (answer == "3"){
            createFileWizard();
        } else if (answer == "4"){
            readFileWizard();
        } else if (answer == "5"){
            deleteFileWizard();
        } else if (answer == "6"){
            appendFileWizard();
        } else if (answer == "7"){
            updateFileWizard();
        } else if (answer == "8"){
            renameFileWizard();
        } else if (answer == "9"){
            rl.close();
        } else {
            console.log("Wrong Choice Please Enter a Valid Choice ")
            start();
        }
    });
};

var reapeat = () => {
    instruction();
    start();
};


console.log();
console.log("Welcome to Node JS File System :");
reapeat();


