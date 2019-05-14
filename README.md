# My To Do List Application

This project was created during my attendance of the TechReturners course in 
Manchester during April - June 2019.

## Application Overview

The web-based application allows a users to setup, view and manage a to-do
list of tasks. The tasks are stored in a database and displayed each time 
the application is loaded.

New tasks can be added in the add tasks section, with a task due date and the option 
to set a task as high priority.

The number of tasks in the to-do list is displayed with a list showing details of each
task. High priority tasks are marked in the list. Overdue tasks, which have not 
been completed, have their due dates highlighted in red.

The task list can be filtered e.g. to only show outstanding or high priority tasks
or a combination of both.

The user can mark tasks as completed and delete tasks from the list.  

## Application Components

App - main component, handling webpage display using React and application events.

ToDoListHeader - displays heading and image on the To Do List webpage

AddItem - allows new tasks to be added to the list of to-do tasks.  The due date of the task 
must be specified and must be set to either today's date or a future date.  The default priority of each task is standard but the task priority can, optionally, be set to high priority.

NumberTasks - shows the number of tasks currently in the To Do list.  The number is updated each time a new task is added or a task is deleted.

TaskList and RowItem - handle the display of the To Do tasks in a list.  The list
can be filtered to show outstanding or high priority tasks only or a combination
of filters can be used.  High priority tasks are flagged in the list and any overdue
tasks that have not been completed have their due dates highlighted in red. 
Tasks in the list can be marked as completed or deleted from the task list and 
task list database.

Footer - footer information for the webpage

mySQL database - details to be added here

## Application Development

The project was created using html, css, Javascript, Bootstrap and using the React framework to develop the front-end application.  The task data is stored in a mySQL database hosted by AWS cloud services.

This project was bootstrapped with 
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
