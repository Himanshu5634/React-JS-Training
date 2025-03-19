# Day 8 - Performance Optimization

## Overview:
Day 8 focuses on optimizing the performance of React applications. The task involves creating a large list (e.g., 10,000 items) and implementing techniques like lazy loading for images using a custom hook named `useIntersectionObserver`. This improves page performance and provides a seamless user experience.

---

## Project: Performance Optimization

### Description:
This project demonstrates how to optimize React applications for better performance. It includes a custom hook, `useIntersectionObserver`, to handle lazy loading for images efficiently. These optimizations are particularly useful for applications handling large datasets.

---

## Features:
1. **Large List Rendering**:
   - Render a large list (e.g., 10,000 items) efficiently.

2. **Lazy Loading for Images**:
   - Implement lazy loading for images to improve performance and reduce bandwidth usage.

3. **Custom Hook - `useIntersectionObserver`**:
   - Use a custom hook to detect when images come into the viewport and load them dynamically.

4. **Optimized User Experience**:
   - Provide a seamless and efficient user experience, even with large datasets.

5. **Code Formatting**:
   - Use **Prettier** to format the code for better readability and consistency.

---

## Key Dependencies:
- **React**: For building the user interface.
- **Custom Hook (`useIntersectionObserver`)**: For implementing lazy loading.
- **SCSS**: For styling the list and images (if applicable).
- **Prettier**: For formatting the code and ensuring consistency.

---

## How to Run the Code:
1. Open the project folder in your code editor (e.g., Visual Studio Code).
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local development URL in your browser to interact with the app.

---

## Additional Notes:
- Ensure that the dataset used for the large list is properly structured and accessible.
- Customize the `LazyImage` component to include placeholders or loading indicators for a better user experience.
- Use the `useIntersectionObserver` hook to manage lazy loading efficiently.
- Use **Prettier** to format the code by running `npx prettier --write .` in the terminal.

---

