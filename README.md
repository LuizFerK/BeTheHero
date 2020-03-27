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
- Axios and Expo
### CORS (for safely share with anothers devs)

<h1>Get started (WebClient)</h1>

- To start the project, you'll need to run the following code in every folder (backend, frontend and mobile):

		npm start
		
- After you run the code in the backend folder, the backend will start himself.

- After you run the code in the frontend folder, the frontend will start himself and a page will open in your browser.

- After you run the code in the mobile folder, a page will open in your browser. Use the Expo app in your smartphone to read the QR Code and open the mobile project.

<h1>Query Builder commands:</h1>

<h4>OBS: To do any migration to database using the Query Builder, you'll need to go be in './backend' folder of the project with your terminal and the server needs to be up, as demonstraded the "Get started" guide.</h4>

- To make Knex migrations from DB:

		npx knex migrate:latest

- To undo the last migration:

		npx knex migrate:rollback