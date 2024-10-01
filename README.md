
# OTT Platform - ReactJS

This is a **Full-Stack OTT (Over-The-Top) Platform** built using **ReactJS**, **TypeScript**, and **Firebase**. The platform allows users to sign up, log in, browse content, and manage their subscriptions. It utilizes **Firebase Authentication** for secure login and **RESTful APIs** to fetch and manage content.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Signup/Login) with **Firebase Authentication**
- Content fetching and display using **RESTful APIs**
- Responsive and user-friendly UI
- Client-side routing with **React Router**
- API calls handled with **Axios**
- Secure user sessions with Firebase Authentication
- **Cypress** for end-to-end testing

## Technologies Used

- **ReactJS**: JavaScript library for building user interfaces
- **TypeScript**: For static typing
- **Firebase**: Authentication and real-time database
- **Axios**: HTTP client for API requests
- **React Router**: For navigation and routing
- **Cypress**: For automated testing
- **CSS**/**Bootstrap**: For styling and responsive design

## Setup and Installation

### Prerequisites

- **Node.js** (v12 or higher)
- **Firebase Account** for authentication and database

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bardeprasd/OTTPlatform-React.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd OTTPlatform-React
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up Firebase:**

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Enable **Email/Password Authentication**.
   - Create a Realtime Database or Firestore (optional, based on requirements).

5. **Configure Firebase in the project:**

   Create a `.env` file in the root directory and add your Firebase project credentials:

   ```bash
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

6. **Start the development server:**

   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000`.

## Project Structure

```bash
OTTPlatform-React/
│
├── public/              # Static files
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── services/        # API and Firebase services
│   ├── styles/          # CSS files
│   ├── tests/           # Cypress tests
│   ├── App.tsx          # Main application component
│   └── index.tsx        # Entry point of the app
├── .env                 # Environment variables for Firebase configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Usage

- **Signup/Login:** Users can sign up and log in using email and password authentication.
- **Browse Content:** After logging in, users can view and interact with content (fetched via API).
- **Responsive Design:** The platform is mobile-friendly and adapts to various screen sizes.

## Testing

To run the Cypress tests:

1. Install Cypress:

   ```bash
   npm install cypress
   ```

2. Run the tests:

   ```bash
   npm run cypress:open
   ```

This will open the Cypress Test Runner where you can run end-to-end tests.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push your changes: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
