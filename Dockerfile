# Use a Node.js base image (choose a suitable version)
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the entire codebase
COPY . .

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Install frontend dependencies
WORKDIR /app/frontend
RUN npm install

# Go back to root work directory
WORKDIR /app

# Make the script executable
RUN chmod +x start_processes.sh

# Expose ports
EXPOSE 3000
EXPOSE 4000

# Set the entrypoint to the shell script
ENTRYPOINT ["./start_processes.sh"]

# Ensure the container stays alive for debugging
CMD ["tail", "-f", "/dev/null"]
