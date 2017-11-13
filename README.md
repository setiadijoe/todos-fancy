TODO FANCY APP
=============

Demo make todo fancy using server API and server client. Using login fitur with Facebook

List of users routes:

| Routes | HTTP | Description |
|---------------|-------------|---------------|
|`/api/sigin`| POST | User sign in and get acces token using JWT |
|`/api/signup`| POST | User sign up and save their data |
|`/api/todos`| GET | Get all todos |
|`/api/todos`| POST | Adding a new todo |
|`/api/todos/:id`| PUT | Edit a spesific todo |
|`/api/todos/:id`| DELETE | Delete a spesific todo |

USAGE
-----

With only npm
> `npm install`

> `npm start`

> `npm run dev`

Access the website via `http://localhost:3000` od API via `http://localhost:3000/api`