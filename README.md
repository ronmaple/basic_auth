# Basic authentication

## Features

### Routes

### Auth
1. POST `/auth/signup`
2. POST `/auth/login`

### Notes
1. POST `/`
2. GET `/:id`
3. PUT `/:id`
4. DELETE `/:id`

### Rate limit
1. TODO

### Tech
1. Typescript
2. MongoDB
3. `bcrypt`
4. `jsonwebtoken` - TODO
5. redis or in memory cache TODO (rate limit)

## Setup
1. If mongodb is already configured, run your own
2. Otherwise, this is dependent on docker `docker compose up -d`
3. You can view your tables on `localhost:8081`

