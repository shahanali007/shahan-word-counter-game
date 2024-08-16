#!usr/bin/env node

import inquirer from "inquirer";
let answers=await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a sentence:"
    }

])
let words=answers.sentence.trim().split(" ")
console.log("sentence words");
console.log("word count:");
console.log(`${words.length}`);