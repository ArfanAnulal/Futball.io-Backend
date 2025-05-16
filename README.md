# futball.io Backend

This is the backend server for **futball.io**, a football data viewer app. It acts as a secure proxy between the frontend and the [API-Football](https://www.api-football.com/) service, hiding the API key and handling request forwarding.

The frontend of this project is available at [here](https://github.com/ArfanAnulal/futball.io-frontend).

## 📚 Table of Contents

- [🚀 Features](#features)
- [📦 Tech Stack](#tech-stack)
- [🔧 Setup & Development](#setup--development)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Install dependencies](#2-install-dependencies)
  - [3. Configure environment variables](#3-configure-environment-variables)
  - [4. Run the server](#4-run-the-server)
  - [5. Deployment](#5-deployment)
- [📄 License](#license)

## 🚀 Features

- Acts as a secure proxy to the API-Football service
- Hides API key from the client
- Handles request routing for match and standings data
- Configurable via environment variables

## 📦 Tech Stack

- **Node.js** with **Express.js**
- **Axios** for outbound API requests
- **dotenv** for environment management
- **CORS** for cross-origin support

## 🔧 Setup & Development

### 1. Clone the repository

```bash
git clone https://github.com/your-username/futball.io-backend.git
cd futball.io-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file 
in the root of the project and add:
```bash
RAPIDAPI_KEY=your_api_football_key
```

- You can get your key by registering at https://www.api-football.com/.

### 4. Run the development server
```bash
node index.js
```

### 5. Deployment
You can deploy this backend to any Node.js-compatible hosting platform such as:

- Render
- Railway
- Heroku
- VPS (e.g., DigitalOcean)

Make sure to add the `RAPIDAPI_KEY` as an environment variable in the production environment.

## License
This project is open-source and available under the MIT License.
