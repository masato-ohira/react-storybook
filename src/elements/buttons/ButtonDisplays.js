import React from 'react'
import CodeExample from '@c/example/CodeExample'
import {state} from '@/store'

function Buttons() {
  const stateClass = (name) => {
    if (name) return `is-${name}`
  }
  return (
    <>
      <CodeExample>
        <div className="buttons">
          {state.sizes.map( i => {
            return <div
              key={`display-${i}`}
              className={`button is-fullwidth ${stateClass(i)}`}>
              {i.toUpperCase()}
            </div>
          })}
        </div>
      </CodeExample>
    </>
  )
}

export default Buttons