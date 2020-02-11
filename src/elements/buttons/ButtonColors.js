import React from 'react'
import CodeExample from '@c/example/CodeExample'
import {state} from '@/store'

function ButtonColors() {
  return (
    <>
      <CodeExample>
        <div className="buttons">
          {state.grays.map( i => {
            return <div className={`button is-${i}`}>
              {i.toUpperCase()}
            </div>
          })}
          <div className="button is-text">TEXT</div>
        </div>
      </CodeExample>

      <CodeExample>
        <div className="buttons">
          {state.colors.map( i => {
            return <div className={`button is-${i}`}>
              {i.toUpperCase()}
            </div>
          })}
        </div>
      </CodeExample>

      <CodeExample>
        <div className="buttons">
          {state.colors.map( i => {
            return <div className={`button is-light is-${i}`}>
              {i.toUpperCase()}
            </div>
          })}
        </div>
      </CodeExample>
    </>
  )
}

export default ButtonColors