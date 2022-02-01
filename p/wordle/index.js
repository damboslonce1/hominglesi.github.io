const fs = require("fs");
const prompt = require('prompt-sync')();

var file = __dirname + "/words/5_words_unprocessed.txt";
var goodFile = __dirname + "/words/5_words_good.txt";
var badFile = __dirname + "/words/5_words_bad.txt";
var unknownFile = __dirname + "/words/5_words_maybe.txt";


var words = fs.readFileSync(file).toString().split('\n');
words = [...new Set(words)];

while(words.length>0){
    var word = words[0];
    var validCommands = ["y","n","?","exit"];
    console.log("Word: " +word);
    do{
        var input = prompt("Is this word Valid? (y/n/?/exit): ");
    }
    while(validCommands.includes(input) == false);

    switch(input){
        case "y": WriteLine(goodFile, word);
            RemoveFirst();
            break;
        case "n": WriteLine(badFile, word);
            RemoveFirst();
            break;
        case "?": WriteLine(unknownFile, word);
            RemoveFirst();
            break;
        case "exit": console.log("exited  ");
            ExitProgram();
            break;
    }
    


}
if(words.length>0) console.log("all_done");

function RemoveFirst(){
    words.shift();
}

function ExitProgram(){
    fs.writeFileSync(file, words.join("\n"))

    process.exit();
}

function WriteLine(filepath, line){
    try {
        fs.writeFileSync(filepath, line + "\n", { flag: 'a+' })
    } catch (err) {
        console.error(err)
    }
}