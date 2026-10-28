# 🚀 DevStack — React & TypeScript Learning Project

<p align="center">
  <a href="https://devstack-pi-one.vercel.app/">
    <strong>🌐 View Live Project</strong>
  </a>
</p>

<p align="center">
  A hands-on learning project built to practice React fundamentals, TypeScript, component-based development, and interactive UI functionality.
</p>

<p align="center">
  <img src="assets/screenshot.png" alt="DevStack Application Screenshot" width="100%">
</p>

---

## 📖 About the Project

**DevStack** is a personal learning project developed to strengthen my practical knowledge of **React and TypeScript** by building an interactive web application.

The main goal of this project was to understand how React components work together, how data flows through props, how state updates the UI, and how TypeScript improves code reliability through type definitions.

While building this project, I also explored DaisyUI, Tailwind CSS, Vite, and React Toastify to gain hands-on experience with additional frontend development tools.

This is a learning project focused on improving my frontend development skills rather than a production-ready application.

## 🎯 Key Learning Outcomes & Features

- **React Component Architecture:** Practiced building reusable components, passing data through props, handling events, and managing component state.
- **TypeScript Integration:** Used interfaces, type annotations, and typed data structures to make the application more predictable and maintainable.
- **Interactive UI & JSON Data:** Practiced working with JSON data, rendering dynamic lists, handling user selections, and displaying toast notifications.

## 🛠️ Technologies Used

### Primary Technologies

These are the main technologies I focused on learning and practicing throughout this project.

| Technology | What I Practiced |
|---|---|
| React | Functional components, JSX, props, state, event handling, and hooks |
| TypeScript | Interfaces, type annotations, typed props, and type-safe data handling |

### Supporting Tools & Libraries

I also explored these technologies to support the development and styling of the application.

| Technology | Purpose |
|---|---|
| Vite | Development server and production build tooling |
| Tailwind CSS | Utility-first styling and responsive layouts |
| DaisyUI | Ready-made UI components built on Tailwind CSS |
| React Toastify | Displaying toast notifications for user feedback |

## ⚛️ React & TypeScript Concepts Practiced

Through this project, I gained practical experience with:

- Creating reusable React functional components.
- Passing data from parent components to child components using props.
- Managing local component state with the `useState` hook.
- Using the `useEffect` hook for side effects, including loading JSON data where needed.
- Rendering dynamic UI elements using JavaScript's `.map()` method.
- Using unique `key` props when rendering lists.
- Implementing conditional rendering based on application state.
- Defining TypeScript interfaces and types for structured data and component props.
- Handling user interactions and providing feedback through toast notifications.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Navigate to the project folder**

```bash
cd devstack
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL shown in your terminal to view the application.

### Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes describing and organizing React user interfaces easier.

### 2. What is the difference between props and state?

Props pass data from a parent component to a child component. State stores data that can change inside a component and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets a component store and update data. In this project, I used state management for interactive UI behavior, such as tracking user selections and updating the selected tech stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook handles side effects, such as loading data when a component mounts. It can be used to load the project's JSON data so the available technologies can be displayed in the UI.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each list item when data changes. This allows React to update lists correctly and efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing UI elements based on a condition. In this project, an empty-stack message can be displayed when the user has not selected any technologies.

For example:

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty. Start adding technologies!</p>
) : (
  <TechnologyStack technologies={selectedTechnologies} />
)}
```

This is an illustrative example; the variable and component names should match the actual project code.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. To send information back, the parent passes a callback function as a prop, and the child calls that function when an event occurs.

For example, a child component can call an `onSelect` function when a user selects a technology. The parent can then update its state using that information.

---

## 📚 What I Learned

Building DevStack helped me move beyond learning individual React and TypeScript concepts and start applying them in a working application.

It also gave me an opportunity to explore additional frontend tools, understand how they fit into a React project, and gain confidence in building interactive user interfaces.

I plan to continue improving my React and TypeScript skills by building more projects and exploring more advanced concepts.

## 👨‍💻 Author

**Frontend Development Learner**

Currently focused on improving my skills in React, TypeScript, and modern frontend development.

## 🌐 Live Demo

**[Explore DevStack](https://devstack-pi-one.vercel.app/)**

---

<p align="center">
  Built with React and TypeScript as part of my frontend development learning journey.
</p>
