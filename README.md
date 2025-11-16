# Title

***Chat-Application***

1. Objective

The primary goal of this project is to build a responsive, single-page application (SPA) that mimics a basic conversational interface, like ChatGPT.

1. **Frontend Goal:** Create an interactive, two-pane web application (Sidebar + Main Chat View) using **React (JavaScript)** and Tailwind CSS, featuring light/dark theme toggling and displaying structured (tabular) data responses.
2. **Backend Goal:** Develop a simple REST API using **Node.js/Express** to serve mock, static JSON data that simulates session management, conversation history, and structured answers.
3. **Core Feature:** Implement session management where each conversation is linked to a unique ID in the URL, and past sessions are viewable in a sidebar.

## Tech Stack

-Frontend : React (with JavaScript/ES6)- Library for building the user interface.
-Styling : Tailwind CSS- Utility-first CSS framework for rapid, responsive styling.
-Backend : Node.js- JavaScript runtime environment.
-Backend : Express.js- Fast, unopinionated, minimalist web framework for Node.js.
-Tools : Git & GitHub- Version control and public repository for submission.
-Tools : VS Code - Code editor

### Prerequisites

- Node.js (LTS version) installed on your machine.
- Basic command line/terminal usage.

## Completion Instructions
This project is best tackled by separating the Frontend and Backend into two distinct directories.

### Phase 1: Backend Setup (Mock API Server)
This project is best tackled by separating the Frontend and Backend into two distinct directories.

Phase 1: Backend Setup (Mock API Server)
The backend's only job is to provide static JSON data. It does not require a database.

```
Step 1.1: Project Initialization
Create a new folder named backend.
mkdir backend
cd backend
npm init -y

```
Install necessary packages: express for the server, and cors to allow your frontend to connect.

```
npm install express cors

```
3. Create the main server file: `server.js`.

**Step 1.2: Create Mock Data**

1. Create a new file named `mockData.js`. This file will hold all your mock JSON objects.

**Step 1.3: Define API Endpoints**

1. In `server.js`, set up Express and define the four required REST endpoints.

---------------------------------------------------------------------------------------------------
| Route(Method)          | Description                                                            |
---------------------------------------------------------------------------------------------------
| /api/sessions (GET)    | Returns a list of all mock session IDs/titles for the sidebar.          |
----------------------------------------------------------------------------------------------------
| /api/new-chat (GET)    | Returns a new, unique mock session ID.                                  |
----------------------------------------------------------------------------------------------------
| /api/session/:id (GET) | Returns the full mock conversation history for a given session ID.      |
----------------------------------------------------------------------------------------------------
|/api/chat/:id (POST)    |Accepts a user question and returns a mock structured (tabular) response.|
----------------------------------------------------------------------------------------------------

### Phase 2: Frontend Setup (React and Styling)

The frontend will handle all UI logic, routing, and API calls.
Project Initialization
Navigate out of the backend directory and create the frontend project.

```
cd ..
npx create-react-app frontend --template cra-template-js
cd frontend

```
Install necessary packages: react-router-dom for routing.

```
npm install react-router-dom

```
-Tailwind CSS Integration : Follow the official documentation to integrate Tailwind CSS into your React project (typically involving npm install -D tailwindcss postcss autoprefixer and configuration files).

- Routing Setup : 
In `src/App.js`, use `BrowserRouter` and `Routes` to set up two main paths:
- `/`: The Landing Page/New Chat view.
- `/chat/:sessionId`: The main Chat Interface view.

- Build Core Components: Create the main components: Sidebar.js, ChatWindow.js, TableResponse.js, and ThemeToggle.js.
-Implement Theme Toggle : Use React's useState and useEffect hooks to manage a global theme state ('light' or 'dark').


## Project Structure

Organize your project files logically for easy navigation. Here's a typical structure for this React app:

/chat-app-project
|
├── /backend
|   ├── node_modules/
|   ├── server.js               <-- Express setup and routing
|   ├── mockData.js             <-- All static JSON data
|   ├── package.json
|
└── /frontend
    ├── node_modules/
    ├── package.json
    ├── tailwind.config.js
    └── /src
        ├── /components
        |   ├── Sidebar.js      <-- Collapsible session panel
        |   ├── ThemeToggle.js  <-- Handles Light/Dark switching
        |   ├── ChatInput.js    <-- Component for user text input
        |   ├── TableResponse.js <-- Renders structured data beautifully
        |   └── AnswerFeedback.js <-- Like/Dislike buttons
        ├── App.js              <-- Main component and routing logic
        ├── index.js            <-- Root file
        └── index.css           <-- Base Tailwind CSS imports


This structure separates concerns: Components for UI, src for logic, and root for config.

### Functionality

**Integration and Logic**

**Step 1: Session History Retrieval**

1. In `Sidebar.js`, use `fetch` to call the backend's `/api/sessions` on component mount to populate the list of mock sessions.

**Step 2: New Chat Flow**

1. When the "New Chat" button is clicked:
    - Call the backend's `/api/new-chat` to get a new `sessionId`.
    - Use `useNavigate` (from React Router) to redirect the user to `/chat/:sessionId`.

**Step 3: Chat Interaction and Structured Data**

1. In `ChatWindow.js`:
    - Listen to the URL parameter using `useParams()` to get the current `sessionId`.
    - When the user submits a message, send a `POST` request to `/api/chat/:id` with the question.
    - Receive the response, which should contain both descriptive text and the structured data array.
    - Render the structured data using the dedicated `TableResponse.js` component.


#### Must Have


#### Nice to Have

    
### Guidelines to develop a project

****Backend****
-Create a backend folder: `mkdir backend`.
-Navigate into the project folder: `cd Backtend `.
-Create package.json file with: `npm init -y`.
-Install necessary packages: express for the server, and cors to allow your frontend to connect : `npm install express cors`.

****frontend****
- Create a new React app using Create React App (CRA), which sets up a basic structure.
- Run: `npx create-react-app frontend`.
- Navigate into the project folder: `cd frontend `.
- Start the development server: `npm start`. This opens the app in your browser at `http://localhost:3000`. Verify it runs without errors.


## Resources

### Design files
NA
     
### Third-party packages
NA

## Backend API

***Render** : "https://chatapp-tusz.onrender.com/"

### Sample Questions


<details>
<summary>Pyhton Questions</summary>

<br/>

**You can use any one of the following question**

```text
what are python modules.
What is a dictionary in Python.
What is a lambda function
```
<br/>
</details>

<details>
<summary>JavaScript</summary>

<br/>

**You can use any one of the following question**

```text
what is dom.
What are events.
What are varibales
```
<br/>
</details>

<details>
<summary>React JS Questions</summary>

<br/>

**You can use any one of the following question**

```text
What is virtual dom.
What are lifecycle methods.
What is context api.
```
<br/>
</details>

