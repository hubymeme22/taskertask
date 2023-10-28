/*
    This file will serve as saver and loader to localstorage and saving the task state.
*/

import TaskInterface from "../components/interface/Task.interface"

interface responseFormat {
    userdata: Array<TaskInterface>,
    message: string,
    valid: boolean
}

// local encryption/decryption method for user access
// this simulates basic authentication in the server-side
const encryptUserData = function(username: string, key: string, parsedString: string): string {
    const keyLength = key.length;
    let encryptedData = '';

    for (let i = 0; i < parsedString.length; i++)
        encryptedData += String.fromCharCode(parsedString.charCodeAt(i) ^ key.charCodeAt(i % keyLength));

    encryptedData += '[&&]';
    for (let i = 0; i < username.length; i++)
        encryptedData += String.fromCharCode(username.charCodeAt(i) ^ key.charCodeAt(i % keyLength));

    return encryptedData;
}

// checks if the username and key provided is a valid pair
export const authenticateUser = function(username: string, key: string): responseFormat {
    const taskerTask = localStorage.getItem('taskertask');
    const currentTaskState = (taskerTask != null) ? JSON.parse(taskerTask) : {};

    if (!(username in currentTaskState))
        return {
            userdata: [],
            message: 'username does not exist',
            valid: false
        };

    const userEncryptedTasklist = currentTaskState[username].split('[&&]');
    const validator = userEncryptedTasklist.pop();
    const encryptedTasklist = userEncryptedTasklist.join('[&&]');

    let encryptedData = '';
    for (let i = 0; i < validator.length; i++)
        encryptedData += String.fromCharCode(validator.charCodeAt(i) ^ key.charCodeAt(i % key.length));

    if (encryptedData == username) {
        let decryptedTaskData = '';
        for (let i = 0; i < encryptedTasklist.length; i++)
            decryptedTaskData += String.fromCharCode(encryptedTasklist.charCodeAt(i) ^ key.charCodeAt(i % key.length));

        return {
            userdata: JSON.parse(decryptedTaskData),
            message: 'user logged in!',
            valid: true
        };
    }

    return {
        userdata: [],
        message: 'invalid username and key pair',
        valid: false
    };
}

// adds a new task for a new user
export const registerUser = function(username: string, key: string): boolean {
    const taskerTask = localStorage.getItem('taskertask');
    const currentTaskState = (taskerTask != null) ? JSON.parse(taskerTask) : {};

    if (!(username in currentTaskState)) {
        currentTaskState[username] = encryptUserData(username, key, '[]');
        localStorage.setItem('taskertask', JSON.stringify(currentTaskState));
        return true;
    }

    return false;
}

// saves the task progress to the pointed username
export const saveTaskState = function(username: string, key: string, taskState: Array<TaskInterface>) {
    const taskerTask = localStorage.getItem('taskertask');
    const currentTaskState = (taskerTask != null) ? JSON.parse(taskerTask) : {};

    if (username in currentTaskState) {
        currentTaskState[username] = encryptUserData(username, key, JSON.stringify(taskState));
        localStorage.setItem('taskertask', JSON.stringify(currentTaskState));
        return true;
    }

    return false;
}

// checks and initializes the localstorage format
export const initializeLocalDB = function() {
    const taskerTask = localStorage.getItem('taskertask');
    if (taskerTask == null)
        localStorage.setItem('taskertask', '{}');
}