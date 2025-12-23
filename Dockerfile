# Use Node.js LTS version
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock* ./

# Install dependencies (ignore engine checks for compatibility)
RUN yarn install --frozen-lockfile --production --ignore-engines

# Copy application code
COPY . .

# Expose the port the app runs on
EXPOSE 1337

# Start the application
CMD ["yarn", "build"]
