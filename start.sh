#!/bin/bash

# Start the server.js script
node server.js &

# Wait for the server to start (adjust the sleep duration if needed)
sleep 2

# Start the HTTP server
http-server &

# Wait for the HTTP server to start (adjust the sleep duration if needed)
sleep 2

# Open Firefox in kiosk mode with the URL set to timer.html
firefox --kiosk http://localhost:8080/timer.html

exit 0
