# React-JS Training

This repository contains day-wise tasks and projects completed during the React-JS training program.

---

## Day 1

### Tasks:

- **Day 1 task**:
  - Create a welcome form that takes one input for the email. On form submission:
    - Check if the user already exists.
    - If the user exists, show the login form; otherwise, show the signup form.
  - **Login Form**:
    - Take the email and password from the user and validate it.
  - **Signup Form**:
    - Collect the following details from the user:
      - First Name
      - Last Name
      - Email
      - Phone
      - Date of Birth (DOB)
      - Gender
      - City
      - Hobbies
    - Store all the data in a variable to manage multiple users.
    - Check if the user already exists; if not, create the user and store the data in the variable.
  - **Cookies Task**:
    - Implement functionality to store some user data in cookies.

### Features:
- Dynamic form switching between login and signup based on user existence.
- Validation of user credentials in the login form.
- Collection and storage of detailed user information in the signup form.
- Support for managing multiple users in a single variable.
- Use of cookies to store and retrieve user data for persistence.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Ensure you have the `index.html` file in the root of your Day 1 project folder.
3. Install the **Live Server** extension in Visual Studio Code if not already installed.
4. Right-click on the `index.html` file and select **"Open with Live Server"**.
5. The project will open in your default web browser, and you can interact with the forms.

---

### Additional Topics:

- **new folder**:
  - `closures.js`: Understanding closures in JavaScript.
  - `currying.js`: Exploring function currying.
  - `Destructure.js`: Destructuring in JavaScript.
  - `errorApiHandling.js`: Handling errors and APIs.
  - `eventLoop-callStack.js`: Event loop and call stack concepts.
  - `HigherOrderFunction.js`: Higher-order functions in JavaScript.
  - `hoisting.js`: Hoisting in JavaScript.
  - `import-export.js`: Import/export syntax in ES6.
  - `nullishOperator.js`: Nullish coalescing operator.

---

## Day 2

### Task 1: **Counter**
- Build a simple counter application.

### Features:
- Increment the counter value.
- Decrement the counter value.
- Reset the counter to its initial value.
- Provide a clean and minimal user interface for interacting with the counter.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

### Task 2: **CounterApp**
- Build an enhanced counter application with additional features.

### Features:
- Add a step value to increment or decrement the counter by a custom amount.
- Display the current counter value dynamically.
- Add styling to make the counter visually appealing.
- Provide a responsive and user-friendly interface.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

### Task 3: **Hello World**
- Set up a basic React project and render a "Hello World" message.

### Features:
- Set up a React environment from scratch.
- Render a "Hello World" message using React components.
- Understand the basics of JSX and ReactDOM.
- Provide a foundation for learning React concepts.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

## Day 3

### Topics:
- **State Management**: Managing state in React components.
- **Conditional Rendering**: Rendering components conditionally based on state.
- **Lists**: Rendering lists dynamically in React.

### Project:
- **To-Do List App**:
  - Build a To-Do List application where users can:
    - Add tasks dynamically.
    - Remove tasks from the list.
    - Mark tasks as completed.
  - Use a list to display tasks dynamically with proper styling for completed tasks.

### Features:
- Add tasks dynamically to the list.
- Remove tasks from the list with a delete option.
- Mark tasks as completed with a visual indicator (e.g., strikethrough or color change).
- Display tasks dynamically using React's list rendering.
- Maintain the state of tasks (added, removed, or completed) using React state management.
- Provide a clean and user-friendly interface for task management.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

## Day 4 & 5

### Topics:
- **Component Lifecycle and Effects**:

- **Context API**:


### Task:
- **Fetch and Theme-Switching App**:
  - Fetch data from a public API (e.g., JSONPlaceholder) and display a list of posts.
  - Show a loading message while the data is being fetched.
  - Add a search bar to filter the posts dynamically.
  - Create a multi-page app with three pages: Home, About, and Contact.
  - Use React Router for navigation between pages.
  - Add dynamic routes for a Blog section (e.g., `/blog/:id`) to display individual blog posts.
  - Extend the fetch API project to build a theme-switching app with light and dark themes.
  - Use Context API to toggle and share the theme across components.
  - Persist the theme choice in `localStorage` for a consistent user experience.

### Features:
- Fetch and display data from a public API.
- Implement a loading indicator while fetching data.
- Add a search bar to filter posts in real-time.
- Create a multi-page app with navigation using React Router.
- Add dynamic routes for individual blog posts.
- Implement a theme-switching feature with light and dark modes.
- Persist the selected theme in `localStorage` for user preference.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

## Day 6

### Topics:

- **Form Validation**: Implementing form validation in React.

### Task:
- **Form Validation**:
  - Create a form with multiple input fields (e.g., name, email, password, etc.).
  - Use **Regex** for validating the input fields:
    - Validate the email format (e.g., `example@domain.com`).
    - Ensure the password meets specific criteria (e.g., minimum length, special characters, etc.).
    - Validate other fields like phone number, name, etc., based on requirements.
  - Display error messages for invalid inputs.
  - Prevent form submission until all fields are valid.

### Features:
- Validate form fields using **Regex** for accurate input validation.
- Display real-time error messages for invalid inputs.
- Ensure all fields are valid before allowing form submission.
- Provide a user-friendly interface for form validation.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

## Day 7

### Task:
- **Shopping Cart App**:
  - Build a Shopping Cart application using Redux Toolkit.

### Features:
- Add items to the cart dynamically.
- Update item quantities in the cart.
- Remove items from the cart with a delete option.
- Calculate the total price of items in the cart.
- Persist the cart data in `localStorage` for a consistent user experience.
- Provide a clean and responsive user interface for managing the shopping cart.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

## Day 8

### Task 1: **Custom Hook**
- Created a custom hook named `useFetch` that:
  - Takes parameters: `url`, `method`, and `payload`.
  - Fetches data from the API and returns the response.

### Features:
- Reusable custom hook for API calls.
- Supports dynamic parameters like `url`, `method`, and `payload`.
- Simplifies API calls across the application.
- Provides a clean and efficient way to handle API requests.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

### Task 2: **Performance Optimization**
- Optimized rendering performance for large datasets and implemented lazy loading.

### Features:
- Create a large list (e.g., 10,000 items) and use `React.memo` to optimize re-renders when filtering the list.
- Add lazy loading for images to improve page performance.
- Use the `Intersection Observer` API for efficient lazy loading.
- Provide a seamless and efficient user experience for large datasets.

### How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---