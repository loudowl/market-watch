# Tech News Aggregator

Tech News Aggregator is a web application that scrapes and displays the latest tech news from popular sources. The site updates every 15 minutes and presents users with an easily digestible format of sources, headlines, descriptions, summaries, and links to full articles.

The project is split into two parts:

- **`backend/`** – an Express + MongoDB API that scrapes news on a schedule and serves it at `/api/news`.
- **`frontend/`** – a React (Create React App) single-page app that fetches and displays the news.

## Prerequisites

- [Node.js](https://nodejs.org/) v18.17.0
- [MongoDB](https://www.mongodb.com/) v6.0 (running locally or a hosted connection string)
- [Git](https://git-scm.com/)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/loudowl/market-watch.git
cd market-watch
```

### 2. Start MongoDB

Make sure a MongoDB instance is running and reachable. If you have MongoDB installed locally, you can start it with:

```bash
mongod
```

By default it listens on `mongodb://localhost:27017`.

### 3. Backend

From the project root:

```bash
cd backend
npm install
```

Create a `.env` file from the provided example and fill in your values:

```bash
cp .env.example .env
```

`backend/.env`:

```env
MONGODB_URI=mongodb://localhost:27017/tech-news-aggregator
PORT=5000
```

Start the backend server:

```bash
npm start
```

The API will be available at `http://localhost:5000`, with news served from `http://localhost:5000/api/news`. On startup the server connects to MongoDB and begins scraping news every 15 minutes.

### 4. Frontend

In a new terminal, from the project root:

```bash
cd frontend
npm install
```

Create a `.env` file from the provided example:

```bash
cp .env.example .env
```

`frontend/.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000` and proxy data requests to the backend API.

## Running the App

Once both servers are running:

1. Backend API: `http://localhost:5000`
2. Frontend UI: `http://localhost:3000`

Open `http://localhost:3000` in your browser to view the aggregated tech news. The list refreshes as the backend scrapes new articles (every 15 minutes).

## Available Scripts

### Backend (`backend/`)

| Command | Description |
| --- | --- |
| `npm start` | Start the Express API server |

### Frontend (`frontend/`)

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode |
| `npm run build` | Build the app for production into `build/` |
| `npm test` | Run the test runner |

## Project Structure

```
market-watch/
├── backend/          # Express API, MongoDB models, scraper, cron job
│   ├── app.js
│   ├── server.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── frontend/         # React (Create React App) client
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       └── pages/
└── docs/             # PRD, architecture, and design docs
```

## Troubleshooting

- **MongoDB connection error on backend startup** – confirm MongoDB is running and that `MONGODB_URI` in `backend/.env` is correct.
- **Frontend shows no news / network errors** – ensure the backend is running on the port referenced by `REACT_APP_API_URL` in `frontend/.env`.
- **Port already in use** – change `PORT` in `backend/.env` (and update `REACT_APP_API_URL` to match), or stop the process using the port.
