# [Scam Clicker]

## 📖 About the Project
This project is an incremental clicker game where the player performs simple actions—like clicking a button—to earn currency and purchase upgrades to generate income automatically.

It was developed for the second term of the Front-End Programming course, instructed by Professor José Carlos Domingues Flores.

## 🎯 Learning Objectives
The main goal of this project was to apply fundamental concepts of modern front-end development in a practical application. The key objectives were:

* **State Management:** Learn to use React Hooks, especially useState and useEffect, to manage the application's state dynamically.

* **Component-Based Architecture:** Practice creating and structuring reusable components in React.

* **TypeScript Integration:** Understand how to use TypeScript in a React project to ensure type safety and improve code quality.

* **Vite Tooling:** Get familiar with the Vite build tool, understanding its fast development server and build process.

* **Event Handling:** Implement user interactions, such as clicks and button events.

## 💡 Key Learnings
During the development, several key practical skills were acquired:

* **useEffect Deep Dive:** A deeper understanding of the useEffect dependency array and the importance of cleanup functions to avoid memory leaks, especially when using setInterval.

* **State Complexity:** Experience in managing multiple state variables and understanding how they interact and trigger re-renders.

* **TypeScript Benefits:** Practical appreciation for how TypeScript helps prevent common bugs (e.g., type mismatches) and makes refactoring safer.

* **Code Organization:** Improved practices in structuring project files and components for better readability and maintenance.

This guide provides instructions for the installation and execution of this project, built with the Vite development environment and the React library.

## ✨ Technologies Used

* **Vite:** A next-generation frontend tooling that provides an extremely fast development environment.
* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** A statically typed superset of JavaScript that enhances code quality and maintainability.

## ✅ Prerequisites

Before you begin, ensure you have the following tools installed on your system:

* **Node.js:** Vite requires Node.js to run. The latest LTS (Long-Term Support) version is recommended.
    To check if Node.js is installed, open your terminal and run:
    ```bash
    node -v
    ```

* **NPM (Node Package Manager):** NPM is installed automatically with Node.js.
    To check your NPM version, run:
    ```bash
    npm -v
    ```

## 🚀 Installation and Setup

Follow these steps to get the project running on your local machine.

**1. Clone the Repository**

First, clone this repository to your local machine.
```bash
git clone https://github.com/GuinaF2/React-Typescript-Test-Site.git
```
**2. Navigate to the Project Directory**

Change your current directory to the newly cloned project folder.


```bash
cd React-Typescript-Test-Site
```
**3. Install Dependencies**

This command reads the package.json file and downloads all the necessary libraries and packages into the node_modules directory.

```bash
npm install
```
**4. Run the Development Server**

Start the Vite development server. This will compile the project and make it available on a local address with Hot Module Replacement (HMR) enabled.

```bash
npm run start
```

Once the command executes, your terminal will display a message similar to this:

  VITE v5.x.x  ready in 312 ms

* **➜  Local:**   http://localhost:5173/
* **➜  Network:** use --host to expose
  
**5. View in Browser**

Open your web browser and navigate to the local URL provided:
http://localhost:5173

The application is now running locally. Any changes saved in the source code will be instantly reflected in the browser.

## 📜 Available Scripts

The package.json file includes the following script:

* **npm run start: Starts the application in development mode with HMR.**
