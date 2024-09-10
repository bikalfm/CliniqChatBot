# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

RUN CD ./simple-ai-chatbot-main/

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Define the command to run your app
CMD ["yarn", "dev"]
