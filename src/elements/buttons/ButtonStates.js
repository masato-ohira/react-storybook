import React from 'react'
import CodeExample from '@c/CodeExample'
import {state} from '@/store'

function Buttons() {
  const colors = [
    '', ...state.colors
  ]
  const states = [
    'hovered', 'focused', 'active', 'loading'
  ]
  return (
    <>
      {states.map( s => (
        <CodeExample key={`box-${s}`}>
          <div className="buttons">
            {colors.map( c => {
              return <div
                key={`button-${c}`}
                className={`button is-${s} is-${c}`}>
                {s.toUpperCase()}
              </div>
            })}
          </div>
        </CodeExample>
      ))}
    </>
  )
}

export default Buttons