# Day 4 & 5 - Lifecycle and Effects

## Overview:
Day 4 and 5 focus on understanding React's component lifecycle and implementing side effects using hooks like `useEffect`. The tasks include fetching data from a public API, creating a multi-page application with `React Router`, and implementing a `theme-switching` feature using the Context API.

---

## Project: Fetch and Theme-Switching App

### Description:
This project demonstrates the use of React's lifecycle methods and hooks to fetch data, manage state, and create a dynamic, multi-page application. It also includes a theme-switching feature that allows users to toggle between light and dark themes.

---

## Features:
1. **Fetch Data**:
   - Fetch data from a public API (e.g., JSONPlaceholder) and display a list of posts.
   - Show a loading message while the data is being fetched.

2. **Search Functionality**:
   - Add a search bar to filter the posts dynamically.

3. **Multi-Page Application**:
   - Create a multi-page app with three pages: Home, About, and Contact.
   - Use React Router for navigation between pages.

4. **Dynamic Blog Routes**:
   - Add dynamic routes for a Blog section (e.g., `/blog/:id`) to display individual blog posts.

5. **Theme-Switching Feature**:
   - Implement a theme-switching feature with light and dark themes.
   - Use the Context API to toggle and share the theme across components.
   - Persist the theme choice in `localStorage` for a consistent user experience.

---

## How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

## Key Dependencies:
- **React**: For building the user interface.
- **React Router**: For implementing navigation and dynamic routes.
- **Context API**: For managing global state (theme switching).
- **Fetch**: For making API requests (optional, if used).

---

## Additional Notes:
- Ensure that the API endpoint (e.g., JSONPlaceholder) is accessible while running the project.
- The theme-switching feature persists the user's choice in `localStorage`, so the selected theme will remain consistent across sessions.

---