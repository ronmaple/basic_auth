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
3. `jsonwebtoken`
4. basic rate limit

## Setup

### Requirements:
1. Local installation of MongoDB or Docker
2. Node `v20.7.0`, but `16 >=` will probably work the same for this purpose

Step #1:
1. If mongodb is running locally, then it's good to go.
2. Otherwise, this project was setup with Docker (I have a personal boilerplate that I re-used).
3. `docker compose up -d`
4. You can view your tables on `localhost:8081`


To run the (integration) test:
1. `npm run dev`
2. `npm run test`


### Improvements
- Global error handlers
- Separate databases for Users, Notes, cache
- Better handling of Roles and permissions
- Access control

### Decisions and tradeoffs
- No unit tests, in my opinion, there's not much to unit test here that's not already covered by integration

- I have a lot of time constraints, but if I had more time, I would re-consider these decisions:

1. Test-only endpoint `/auth/purge`
- Risky in a real application, but this simplifies development for a demo-type app

1. JWT Token issued only at login
- We can do it at registration as well, but here, I only did it at login. The decision depends on the frontend implementation and overall security consideraitons of having multiple sources.
  
1. Different method for ratelimit. Here, I'm using an express library. There's a lot more sophisticated designs for rate limiting such as using a dedicated db such as a distributed cache like Redis or DynamoDb. 

2. Incomplete `share` function. I would complete an `accessControl` pattern for the resource. Right now `author` is hard coded, but it can be added via the user from the middleware.
  
3. The keyword search is tricky -- it depends on the scale. This uses mongodb regex search which is low performant in comparison to ElasticSearch, which I can implement, but it'll require design changes
