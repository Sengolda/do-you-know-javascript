#!/usr/bin/env node

const colors = require('colors/safe');
const inquirer = require('inquirer');
const figlet = require('figlet');

console.log(colors.cyan('Hi and welcome to Do you know javascript?'));
console.log(colors.green('I am a program on your computer that will ask you questions about javascript to see if you know about javascript!'));
inquirer
    .prompt([
        {
            type: 'list',
            name: 'Accepted',
            message: 'Do you accept this challenge?',
            choices: ['YES!', 'No, I am a chicken 🐓']
        }
    ])
    .then(answers => {
        let a = answers.Accepted === 'YES!';
        if (a) {
            console.log(colors.rainbow('Hi and welcome to Do you know javascript!'))
            console.log('\n\n\n')
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'q_1',
                    message: 'What year was javascript made?',
                    choices: [1995, 1996, 2010, 2022]
                }
            ])
            .then(answers => {
                if (answers.q_1 === 1995) {
                    console.log(colors.green('You have passed the first question!'))
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'q_2',
                            message: 'How do you print something?',
                            choices: ['console.log', 'print']
                        }
                    ])
                    .then(answers => {
                        if (answers.q_2 === 'console.log') {
                            console.log(colors.green('Yep, this whole program uses console.log everywhere.'))
                            inquirer.prompt([
                                {
                                    type: 'list',
                                    name: 'q_3',
                                    message: 'Which one of these makes a constant?',
                                    choices: ['let', 'var', 'const']
                                }
                            ])
                            .then(answers => {
                                if (answers.q_3 === 'const') {
                                    console.log(colors.green('You are awesome, and the quiz is almost done just one question left!!'))
                                    inquirer.prompt([
                                        {
                                            type: 'list',
                                            name: 'q_4',
                                            message: 'Which brackets makes a list in javascript',
                                            choices: ['{}', '[]', '()']
                                        }
                                    ])
                                    .then(answers => {
                                        if (answers.q_4 === '[]') {
                                            console.log(colors.green('Awesome, you\'re really good!'))
                                            figlet('Awesome! You won the game!', function(err, data) {
                                                console.clear()
                                                console.log(colors.rainbow(data))
                                            });
                                        }
                                        else {
                                            console.log(colors.red('💀 Oops... it was []'))
                                        }
                                    })
                                }
                                else {
                                    console.log(colors.red('💀 Bro it legit says in the name, "const"'))
                                }
                            })
                        }
                        else {
                            console.log(colors.red('💀 Bruh, how did you not get that right?'))
                        }
                    })
                }
                else {
                    console.log(colors.red('💀 OOf rip ig you just don\'t know about javascript'))
                }
            })
        }
        else {
            console.log(colors.red('💀 Goodbye!'))
        }
    },
)
