import React from 'react'
import { createContext } from "react";

const RoutesContext = createContext();

function Provider({ children }) {
  const base = "";

  const routes = {
    base,
    loading: `${base}/loading`,
    home: `${base}/home`,
    gallery: `${base}/gallery`,
    contact: `${base}/contact`,
    team: `${base}/team`,
  }

  return <RoutesContext.Provider value={routes}>
    {children}
  </RoutesContext.Provider>
}

export { Provider }
export default RoutesContext