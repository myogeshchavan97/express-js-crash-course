## Create Environment variables file

Create `.env` file in the `server` folder and add the following contents inside it:

```js
DB_CONNECTION_URL=your_db_connection_url
JWT_SECRET_KEY=your_jwt_secret_key
```

## How To Run The Application

- Open a terminal and execute the following commands in sequence
  - `cd server`
  - `yarn install` or `npm install`
  - `yarn start` or `npm start`
- Open another terminal, keeping the previous one running and execute the following commands in sequence
  - `cd client`
  - `yarn install` or `npm install`
  - `yarn run dev` or `npm run dev`
