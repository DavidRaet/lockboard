## 📋 Product Requirements Document

**Project Name:** Personal Dashboard App

**Objective:** Build a customizable dashboard that demonstrates React fundamentals including components, props, state management, and hooks.

**Core Features:**

- Header component displaying user name (passed via props) O
- Weather widget using useState to display mock weather data 
- Task counter component tracking completed tasks (useState)
- Clock component updating every second (useEffect)
- Theme toggle (light/dark mode) using useContext
- Focus timer with useRef to manage timer reference

**Technical Requirements:**

- Minimum 5 reusable functional components
- Demonstrate props passing between parent and child components
- Use at least 3 different hooks (useState, useEffect, useContext)
- Implement proper component composition

**Success Criteria:**

- Dashboard renders without errors
- Theme switches persist across all components
- Clock updates in real-time
- Code follows component best practices



**Concepts Internalized upon Completion:** 

- Component Architecture – Understanding how to break an interface into modular, reusable functional components and compose them cleanly.

- Props Flow – Passing data top-down between parent and child components, and knowing when to lift state up.

- State Management (useState) – Managing local component state, triggering re-renders, and understanding how state updates are batched.

- Side Effects (useEffect) – Running code in response to lifecycle events (e.g. mounting, updates, cleanup) such as a live clock or data fetching.

- Context API (useContext) – Sharing global state (like theme) without prop drilling, and understanding provider/consumer relationships.

- Refs (useRef) – Managing mutable values or DOM references (e.g. timer control) without causing re-renders.

- Component Composition – Combining smaller components into larger, cohesive views while maintaining separation of concerns.

- React Rendering Behavior – Recognizing when and why components re-render, and writing code that’s declarative rather than imperative.
