# Patient Medical Records – Solution Overview

## Solution Architecture

This project implements a **modular, component-based React application** following best practices for maintainability, scalability, and testability. The architecture is based on the **Separation of Concerns** principle, with clear boundaries between UI components, state management, and data access. The solution is designed for rapid onboarding, easy extensibility, and robust testing.

- **Frontend Framework:** React 18 (Functional Components, Hooks)
- **Styling:** CSS (with h8k-components and h8k-design for UI consistency)
- **Testing:** Jest & React Testing Library
- **Project Structure:** Flat, feature-based, with clear separation between core app logic and UI components

---

## Project Structure

```
react-ui-app/
│
├── src/
│   ├── components/
│   │   ├── Records.js         # Displays patient details and medical records table
│   │   └── Search.js          # Patient selection dropdown and Show button
│   ├── App.js                 # Main app component, state management, and composition
│   ├── App.css                # App-wide styles (read-only)
│   ├── App.test.js            # Comprehensive unit and integration tests (read-only)
│   ├── index.js               # App entry point (read-only)
│   ├── index.css              # Global styles (read-only)
│   ├── medicalRecords.js      # Static patient and record data (read-only)
│   └── registerServiceWorker.js # Service worker (read-only)
│
├── public/
│   └── index.html             # HTML template
│
├── package.json               # Project metadata, scripts, and dependencies
└── README.md                  # Solution documentation
```

---

## Technical Stack

- **React 18**: Modern, declarative UI library for building interactive interfaces.
- **Jest**: Industry-standard JavaScript testing framework.
- **React Testing Library**: For robust, user-centric component and integration tests.
- **h8k-components & h8k-design**: UI component and design system for consistent look and feel.
- **Node.js & npm**: For dependency management and local development.

---

## Key Patterns & Practices

- **Component-Based Architecture**: Each UI feature is encapsulated in a dedicated, reusable component.
- **State Lifting**: App-level state is managed in `App.js` and passed down via props for clear data flow.
- **Immutability & Pure Functions**: All data transformations are pure and side-effect free.
- **Test-Driven Development**: All business logic and UI flows are covered by automated tests.
- **Read-Only Data Source**: All patient and record data is loaded from a static, immutable file for safety and test repeatability.

---

## Third-Party Libraries

- `react`, `react-dom`, `react-scripts`: Core React stack.
- `h8k-components`, `h8k-design`: UI library and design system.
- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`: Testing utilities.
- `jest-junit`: Test result reporting.

---

## Solution Startup & Deployment

### Prerequisites

- **Node.js** (v18, v20, v22, or >=v24 recommended for best compatibility)
- **npm** (v8+)
- **Visual Studio** (any edition with JavaScript/React support, or use VS Code)

### Step-by-Step Startup Instructions

1. **Clone the Repository**
```sh
git clone <your-repo-url>
   cd react-ui-app
```

2. **Open the Project in Visual Studio**
   - Open the `react-ui-app` folder as a project.

3. **Install Dependencies**
   - Open the integrated terminal in Visual Studio.
   - Run:
```sh
 npm install
```

4. **Start the Application**
   - In the terminal, run:
```sh
 npm start
```
   - The app will launch at [http://localhost:8000](http://localhost:8000) (or another port if 8000 is in use).

5. **Access the Application**
   - Open your browser and navigate to the provided local URL.

---

## Running Unit and Integration Tests

### Test Coverage

- **Unit Tests**: Validate all UI logic, state transitions, and user interactions.
- **Integration Tests**: Simulate real user flows (selecting patients, cycling records, error handling).
- **Test File**: All tests are located in `src/App.test.js` and are run automatically.

### How to Run Tests Locally

1. **Ensure Dependencies Are Installed**
```sh
npm install
```

2. **Run All Tests**
```sh
npm test
```
   - This will execute all unit and integration tests using Jest and React Testing Library.
   - Test results and coverage will be displayed in the terminal.

3. **Troubleshooting**
   - If you see errors about unsupported Node.js versions, switch to Node 18, 20, 22, or >=24.
   - If you are on Windows and see errors about `./node_modules/.bin/`, ensure your `package.json` test script uses `react-scripts test` (not a Unix path).

---

## References

- [React Documentation](https://react.dev/)
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [h8k-components](https://www.npmjs.com/package/h8k-components)

---

## Summary

This solution demonstrates a clean, maintainable, and testable React application for managing and viewing patient medical records. It is designed for rapid onboarding, easy extensibility, and robust automated testing, making it suitable for both technical and non-technical stakeholders to review and extend. All code follows modern best practices and is ready for production or further development.