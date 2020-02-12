import React, { useState, createContext } from 'react'

const AppContext = createContext({})

function Decorator(props) {
  // style
  const styles = {
    padding: "1.5rem",
  }

  // state
  const [data, setData] = useState({
    colors: [
      'primary', 'link', 'info',
      'success', 'warning', 'danger',
    ],
    grays: [
      'black', 'dark',
      'light', 'white',
    ],
    sizes: [
      'small', 'normal',
      'medium', 'large',
    ],
  })

  return (
    <AppContext.Provider value={data}>
      <div style={styles}>
        {props.children}
      </div>
    </AppContext.Provider>
  )
}

export default Decorator