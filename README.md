# Task Manager
Task Manager web application built with NodeJS, following [this course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2)

## Overview
Developed with Express, it's a REST API to manage daily tasks.

## Features
- CRUD endpoints for user management
- CRUD endpoints for tasks management
- Send email on account creation using SendGrid API
- Implements Authentication with JWT Tokens
- Uses MongoDB to store tasks and users credentials

## Run

### Development
Create /config/dev.env with the keys:
```
PORT
SENDGRID_API_KEY
JWT_SECRET
MONGODB_URL
```

Run `npm run dev`

### Test
Create /config/test.env with keys:
```
PORT
SENDGRID_API_KEY
JWT_SECRET
MONGODB_URL
```

Run `npm run test`
