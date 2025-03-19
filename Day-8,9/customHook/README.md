# Day 8 - Custom Hook

## Overview:
Day 8 focuses on creating reusable logic in React using **Custom Hooks**. The task involves building a custom hook named `useFetch` to simplify API calls. This hook takes dynamic parameters like `url`, `method`, and `payload` and returns the API response, making it reusable across the application.

---

## Project: Custom Hook - `useFetch`

### Description:
This project demonstrates how to create and use a custom hook in React. The `useFetch` hook is designed to handle API requests efficiently by abstracting the logic for fetching data. It supports dynamic parameters and provides a clean and reusable solution for managing API calls.

---

## Features:
1. **Reusable Hook**:
   - The `useFetch` hook can be reused across multiple components for API calls.

2. **Dynamic Parameters**:
   - Accepts `url`, `method`, and `payload` as parameters to handle different API requests.

3. **Simplified API Calls**:
   - Abstracts the logic for making API requests, reducing code duplication.

4. **Error Handling**:
   - Handles errors gracefully and provides feedback to the user.

5. **Loading State**:
   - Includes a loading state to indicate when the API call is in progress.

---

## Key Dependencies:
- **React**: For building the user interface.
- **Axios** (optional): For making API requests (if used in the hook).
- **SCSS**: For styling the components (if applicable).

---

## How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

## Additional Notes:
- Customize the `useFetch` hook to include additional functionality like caching or request cancellation if needed.
- Ensure that the API endpoint used in the `ExampleComponent.js` is accessible while running the project.

---
