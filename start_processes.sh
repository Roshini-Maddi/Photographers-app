#!/bin/sh

# Start Node.js server in background
npm start --prefix backend > backend-output.log 2> backend-error.log &

# Start npm start in background
npm start --prefix frontend &

tail -f /dev/null