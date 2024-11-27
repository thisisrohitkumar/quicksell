import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { TaskProvider } from "./context/TaskContext";
const App = () => {
  return (
    <>
      <TaskProvider>
        <Dashboard />
      </TaskProvider>
    </>
  );
};

export default App;
