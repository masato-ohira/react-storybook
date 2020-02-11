import React from 'react'

const style = {
  padding: "1.5rem",
}

function Decorator(props) {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default Decorator