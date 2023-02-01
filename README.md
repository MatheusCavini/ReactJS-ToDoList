# ReactJS-ToDoList
## Introduction
This project implements the Front-End for a simple To-Do List web application, using the React JS library, and also Styled Components replacing pure CSS.<br/>
It includes the login page and the general UI of the app. <br/>
The login authentication logic and the tasks database for each user are not implemented, since this project aims to be a Front-End study only.

## Demonstration


https://user-images.githubusercontent.com/122649188/214991561-d29b14eb-560a-4ba4-aa12-0656278d3fc8.mp4



## Inspiration
The login page was inspired in [this design](https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI/attachments/12710737?mode=media) by Jordan Hughes.
The home page was inspired in [this design](https://dribbble.com/shots/14440819-KosmoTime-Task-Manager/attachments/6121947?mode=media) by Mik Skuza.

## Functionalities
• Login page, including Sign In button, which redirects to the main application; <br/>
• Application UI with navigation sidebar and area for the to-do list; <br/>
• Add new task, setting name and categorie properties; <br/>
• Delete task, with a modal for confirming the action; <br/>
• Check task as done via checkbox; <br/>
• Filter tasks showing in the to-do list by "done", "not done" or "all"; <br/>
• Filter tasks showing in the to-do list by their categorie, via selecting on the sidebar; <br/>
• Authorization: user cannot access home page before login, neither login page after logged. <br/>

Obs.: currently, the "edit task" and adding or removing categories functionalities are not implemented, since I considered it wouldn't contribute that much to my personal learning, and would be very time consuming. Maybe I'll implement this later on.

## Usage
If you want to try this project yourself:
1. Install Node on your machine, via https://nodejs.org/en/.
2. Install Yarn on your machine via terminal command: `sudo npm install -g yarn`
3. Install Git on your machine, via https://git-scm.com/downloads.
4. Clone this repository to your machine. (more on how to do this [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
5. Run ```yarn install``` on the terminal, inside the folder where you downloaded the project, to install all used dependencies.
6. Run `yarn start` to run the project on your browser.




