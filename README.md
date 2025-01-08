# 🛒 MERN E-Commerce Platform 🌐

An advanced **ecommerce platform** built with the MERN stack, leveraging third-party APIs for an engaging user experience. This application provides three distinct workflows:

1. **👩‍💻 Buyers**: Browse categories, products, and brands.
2. **🏬 Sellers**: Manage their own brand components.
3. **🛡️ Admins**: Oversee and control all store components.


--
## ✨ Arcitecture Diagram

![alt text](c:/Users/vagha/Downloads/r/SVG2.drawio.svg)


---

## ✨ Features

- **Backend**: Built with Node.js and Express for a seamless API.
- **Frontend**: React.js for a dynamic and modern user interface.
- **State Management**: Redux with Redux Thunk for asynchronous actions.
- **Database**: MongoDB managed through Mongoose schemas.
- **Deployment**: Vercel for both frontend and backend hosting.
- **Docker Support**: Easy local setup with Docker Compose.
- **Admin Dashboard**: Manage users, products, and orders.
- **Authentication**: JWT for secure user sessions.
- **Third-Party APIs**: Enhance functionality and provide real-time updates.

---

## 🖥️ Demo

**Live Application**: [Try it here!](https://mern-store-gold.vercel.app)

**Admin Dashboard Demo**: [See it here!](https://mernstore-bucket.s3.us-east-2.amazonaws.com/admin.mp4)

---

  ## 🛠️ How to Run Locally

  ### 1️⃣ Clone the Repository
    ```bash
      git clone https://github.com/mohamedsamara/mern-ecommerce.git

  ### 2️⃣Install Dependencies
      Run the following commands to set up both the client and server:
      cd mern-ecommerce
      npm install
   ### 3️⃣Environment Variables
  Create .env files for both the frontend and backend. Use the following templates:

  Frontend .env:
      REACT_APP_API_URL=http://localhost:5000
  Backend .env:
      MONGO_URI=mongodb+srv://<your_mongo_connection_string>
      JWT_SECRET=<your_jwt_secret>
  ### 4️⃣ Seed the Database
  Run the seed command to create an admin user in the database:
      npm run seed:db [admin-email@example.com] [admin-password]
  ### 5️⃣ Start the Application
  Start the development servers:
      npm run dev
  The application should now be accessible at:

    Frontend: http://localhost:3000
    Backend: http://localhost:5000
##🐳 Docker Guide
###1️⃣ Clone the Repository
  Copy code
  git clone https://github.com/mohamedsamara/mern-ecommerce.git
###2️⃣ Configure Docker Compose
  Edit the docker-compose.yml file to update the values for MONGO_URI and JWT_SECRET.

###3️⃣ Build and Run
    ```bash
  Copy code
  docker-compose build
  docker-compose up
  ⚙️ Vercel Deployment
  To deploy on Vercel, follow these steps:

  Import the repository into Vercel.
  Configure the root directory for the frontend (/client) and backend (/server) separately.
  Use the provided vercel.json files in each folder for configuration.
  🛡️ Security
  Use JWT for authentication and secure sessions.
  Store sensitive credentials in .env files.
  Configure Docker secrets or AWS Secrets Manager for production environments.
  🚀 Technologies & Tools
  Node.js: Backend runtime environment.
  Express: Web framework for building APIs.
  MongoDB: NoSQL database for storing data.
  React.js: Frontend library for building UIs.
  Redux: State management for predictable application behavior.
  Docker: Containerization for consistent environments.
  Webpack: Module bundler for JavaScript.
  🛠️ Code Formatting
  Prettier Configuration
  Add a .vscode directory to your project root.
  Create a settings.json file inside .vscode with the following content:
  json
  Copy code
  {
    "editor.formatOnSave": true,
    "prettier.singleQuote": true,
    "prettier.arrowParens": "avoid",
    "prettier.jsxSingleQuote": true,
    "prettier.trailingComma": "none",
    "javascript.preferences.quoteStyle": "single"
  }
  Install the Prettier extension in your editor.
  📦 Database Seed Command
  The seed command creates an admin user in the database:

  ```bash
  Copy code
  npm run seed:db [admin-email@example.com] [admin-password]
  📚 Resources
  Original Repository: MERN E-Commerce by Mohamed Samara
  Live Demo: Access the Application
  Admin Dashboard: Demo Here
  🛡️ License
  This project is licensed under the MIT License.

  🎉 Thank You!
  Thank you for checking out the MERN E-Commerce Platform! Contributions, feedback, and suggestions are welcome. Happy coding! 😄

  vbnet
  Copy code

  Let me know if you'd like any more adjustments!