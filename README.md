TODO FANCY APP
=============

Demo make todo fancy using server API and server client. Using login fitur with Facebook

List of users routes:

| Routes | HTTP | Description |
|---------------|-------------|---------------|
|`/users/sigin`| POST | User sign in and get acces token using JWT |
|`/users/signup`| POST | User sign up and save their data |
|`/users/`| GET | Get all users data (admin only) |
|`/users/:id`| GET | Get a spesific user (admin only) |
|`/users/`| GET | Add a new admin or user (admin only) |
|`/users/:id`| PUT | Edit a spesific user |
|`/users/:id`| DELETE | Remove a user (admin only) |
|`/todos`| GET | Get all todos |
|`/todos`| POST | Adding a new todo |
|`/todos/:id`| PUT | Edit a spesific todo |
|`/todos/:id`| DELETE | Delete a spesific todo |

USAGE
-----

With only npm
> `npm install`

> `npm start`

> `npm run dev`

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`