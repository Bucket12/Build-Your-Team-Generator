const Employee = require('./lib/Employee'); //not sure if i need this or not yet
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const { inherits } = require('util');
const path = require('path')
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');
const teamMember = []


// need to prompt user about creating a team

//start by asking about manager: need to ask name, id, email, and office number.

//resolve promise and save  manager object to an array.

//need to create team

//make a main menu with choices for engineer, intern, save to a new array

//create engineer function and then intern function 

//push to an array and save to file


function init() {
    function createManger() {
        console.log(`
    =====================
    Welcome to your team!
    =====================`)
        inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Manager's Name?"
            },

            {
                type: "input",
                name: "managerId",
                message: "What is the Manager's ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's email address ?"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the Manager's office phone number?"
            },
        ]).then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamMember.push(manager)
            //call create team function
            createTeam();
        }
    )}

    function createTeam() {
        inquirer
        .prompt([
            {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "No more Members. Create Teams"
            ]
            }
        ]).then((answer) => {
            switch(answer.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                 case "Intern":
                    addIntern();
                    break;

                    default: 
                    console.log("Enjoy!")
                    buildTeam()
            }
        })
    }
//add engineer here
    function addEngineer() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the Engineer's Name?"
            },

            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineer's ID number?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineer's email address ?"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is the Engineer's Github username?"
            },
        ]).then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            teamMember.push(engineer)
            createTeam()
        }
    )}
//add intern here
    function addIntern() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the Intern's Name?"
            },

            {
                type: "input",
                name: "internId",
                message: "What is the Intern's ID number?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the Intern's email address ?"
            },

            {
                type: "input",
                name: "internSchool",
                message: "What is the name of your Intern's School?"
            },
        ]).then((answers) => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            teamMember.push(intern)
            createTeam()
        }
    )}

function buildTeam() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    //fs.writeFileSync("team.html", render(teamMember), 'utf-8');
    fs.writeFileSync(distPath, render(teamMember), 'utf-8');
  }
createManger()
}



function appendFile(filename, data) {
    const contents = "#"(data);

    fs.appendFileSync(filename, contents)
}
// generate html function
//initialize app
init();


