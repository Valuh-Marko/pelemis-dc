import React from 'react'
import { createContext } from "react";

const RoutesContext = createContext();

function Provider({ children }) {
  const base = "/pelemis-dc";

  const routes = {
    base,
    loading: `${base}/loading`,
    home: `${base}/home`,
    gallery: `${base}/gallery`,
    location: `${base}/location`,
    contact: `${base}/contact`,
  }

  return <RoutesContext.Provider value={routes}>
    {children}
  </RoutesContext.Provider>
}

export { Provider }
export default RoutesContext