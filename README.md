# **Server Start Instructions**

## **Prerequisites**
- Node.js and NPM should be installed on your system.
- The `http-server` package should be installed globally. If not installed, you can install it using NPM: `
  npm install -g http-server`


## **Getting Started**
1. Clone the repository to your local machine or download the files.
   
2. Open a terminal (command prompt) and navigate to the project directory.


## **Adding New Timers**
To add new timers to the application, follow these steps:

1. Open the `timers.json` file located in the project directory.

2. In the JSON file, you will see a list of existing timers. Each timer is represented by an object with `id` and `name` properties.

3. To add a new timer, add a new object to the JSON array with the desired `id` and `name`. For example: `{ "id": "NewTimer", "name": "New Timer" }`
   
4. Save the `timers.json` file after adding the new timer.

5. If the server is already running, you will need to restart it for the new timer to take effect. Stop the server by pressing `Ctrl + C` in the terminal, and then start it again using the appropriate method mentioned above.

6. Once the server is running again, open the Timer application in the Firefox browser, and the new timer should now be visible.

### **! Note: Remember to clear you browsers cache in order to see the new timer !**


## **Starting the Server**
You have two options to start the server:

### ***Option 1: Using the provided shell script (Recommended)***
1. Before starting the server, make sure to install the necessary Node.js dependencies: `npm install`

2. To start the server and launch the web application, run the following command in the terminal: `start.sh`


3. The script will start the `server.js` file, which will host the server locally, and then it will launch an HTTP server to serve the `timer.html` file.

4. After a few seconds, the default web browser (Firefox) will automatically open in kiosk mode, displaying the Timer application.


### ***Option 2: Manual Server Start***
1. Before starting the server, make sure to install the necessary Node.js dependencies: `npm install`

2. To start the logging server, run the following command in the terminal: `node server.js`


3. Once the server is running, open a new terminal window (or a new tab) without stopping the server.

4. In the new terminal window, start the HTTP server to serve the `timer.html` file by running the following command: `http-server -p 8080`

5. After starting the HTTP server, open a new Firefox browser window and enter the following URL in the address bar: http://localhost:8080/timer.html


6. The Timer application will now be displayed in the Firefox browser window in kiosk mode.


## **Stopping the Server**
To stop the server and close the web application, use the following steps:
1. Press `Ctrl + C` in the terminal where the server was started. This will stop the `server.js` script.
2. Close the Firefox browser window that was opened in kiosk mode.
   Note: you can not click the close button in firefox kiosk mode

**Note: The server can be started and accessed on the same machine where it is running. If you want to access the Timer application from another device on the same network, replace `localhost` in the URL with the server's IP address or hostname.**
