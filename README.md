# TaskerTask
My first day's hands-on project for React TS. This web app is designed to save task and track the local users via their username. This web app uses *local storage* for storing the said username and tracking of tasks for the specific user. The implementation of this with a working API backend will be added soon (probably tommorow) in a separate repository.

Another purpose of this single-page app is to simulate local separation of access between users' data and ensuring the access is specifically only for the user account through the use of xor encryption (although yes, xor encryption is a weak encryption, I like to make it simple).

## Web App UI
login panel
![login panel](./public/loginpanel.png)

edit task
![edit task](./public/addtask.png)

preview tasks
![edit task](./public/tasks.png)

## Functionalities
- [x] Add task
- [x] Edit taks
- [x] Set date for each task
- [ ] Delete task

## Built using
- HTML
- CSS
- [Vite](https://vitejs.dev/)
- [React TS](https://react.dev/)

## Setup and Installation
Run the following commands to download and setup the web app:
```
git clone https://github.com/hubymeme22/taskertask.git
cd taskertask
npm install
npm run dev
```