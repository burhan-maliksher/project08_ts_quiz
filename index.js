#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { titleTimer } from "./src/_title.js";
class Quiz {
    result;
    constructor() {
        this.result = 0;
    }
    // run the app
    async Run() {
        await this.AppTitle();
        await this.App();
    }
    // autor watermark on app at the begening
    async AppTitle() {
        const title = chalkAnimation.neon(`__________________Welcome to M.B Quiz App__________________`);
        await titleTimer();
        title.stop();
        console.log(chalk.bgRed.italic(`                                                             Autor:"M.B"`));
        // return;
    }
    //   app
    async App() {
        //mcqs 
        let question = [
            {
                Q: "what is the meaning of meta ?",
                MC: ["Multiple", "Many", "Two", "One"],
                ANS: "Two",
            },
            {
                Q: `From where the word "verse" has been derived ?`,
                MC: ["world", "globe", "universe", "earth"],
                ANS: "universe",
            },
            {
                Q: "How many days are there in a week ?",
                MC: ["Seven", "Ten", "Two", "One"],
                ANS: "Seven",
            }
        ];
        if (question.length == 0) {
            console.log('# no Mcqs loaded yet !');
        }
        else {
            // loop for displaying quizses
            for (let index = 0; index < question.length; index++) {
                // displaying mcqs
                const showQuiz = await inquirer.prompt([{
                        type: "checkbox",
                        name: "mcqs",
                        message: question[index].Q,
                        choices: question[index].MC,
                    }]);
                // add 1 to result if true
                if (showQuiz.mcqs == question[index].ANS) {
                    this.result++;
                }
            }
            // displaying result
            console.log(chalk.cyanBright(chalk.bgCyan(`#       Result : ${this.result}`)));
            console.log(chalk.green(`Thanks for using M.B Quiz App`));
        }
        // end of app method
    }
}
let run = new Quiz();
run.Run();
