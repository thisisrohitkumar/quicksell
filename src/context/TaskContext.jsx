import React, { createContext } from "react";
import useFetchApiData from '../hooks/useFetchApiData';

export const TaskContext = createContext(null);

export const TaskProvider = (props) => {
    
  const { data, loading, error } = useFetchApiData(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const tickets = data.tickets || [];
  const users = data.users || [];
  return <TaskContext.Provider value={{tickets, users}}>{props.children}</TaskContext.Provider>;
};
