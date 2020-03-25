<h1 align="center">
	<img alt="Be The Hero" src="./frontend/src/assets/logogit.png" />
</h1>
<p align="center">
	The application helps people to find NGOs to make donations in cases of need. Each NGO can register and insert cases so that donors can help quickly and easily, by directly contacting the NGO responsible for the case, through Whatsapp or email.
</p>

<hr />

<h1>Technologies used in this application:</h1>

### SQLite (Database)
- Knex.js (Query Builder) 
### Node.js (Back-end)
- Express (Routes)
### React.js (WebClient)
- Axios (HTTP Client)
### ReactNative (MobileClient)
### CORS (for safely share with anothers devs)

<h1>Server and Query Builder commands:</h1>

- To start the server:

		npm start

- To make Knex migrations from DB:

		npx knex migrate:latest

- To undo the last migration:

		npx knex migrate:rollback
