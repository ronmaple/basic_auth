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

### Requirements:
1. Local installation of MongoDB or Docker
2. Node `v20.7.0`, but `16 >=` will probably work the same for this purpose

Step #1:
1. If mongodb is running locally, then it's good to go.
2. Otherwise, this project was setup with Docker (I have a personal boilerplate that I re-used).
3. `docker compose up -d`
4. You can view your tables on `localhost:8081`



### Decisions and tradeoffs

1. Test-only endpoint `/auth/purge`
- Risky in a real application, but this simplifies development for a demo-type app

2. JWT Token issued only at login
- We can do it at registration as well, but here, I only did it at login. The decision depends on the frontend implementation and overall security consideraitons of having multiple sources.
