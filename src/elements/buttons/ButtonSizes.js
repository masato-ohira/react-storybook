import React from 'react'
import CodeExample from '@c/CodeExample'
import {state} from '@/store'

function Buttons() {
  return (
    <>
      <CodeExample>
        <div className="buttons">
          {state.sizes.map( i => {
            return <div
              key={`size-${i}`}
              className={`button is-${i}`}>
              {i.toUpperCase()}
            </div>
          })}
        </div>
      </CodeExample>

      <CodeExample>
        <div className="buttons are-medium">
          <div className="button">All</div>
          <div className="button">Medium</div>
          <div className="button">Size</div>
        </div>
      </CodeExample>

      <CodeExample>
        <div className="buttons are-small">
          <div className="button">Small</div>
          <div className="button">Small</div>
          <div className="button">Small</div>
          <div className="button is-normal">Normal</div>
          <div className="button">Small</div>
        </div>
      </CodeExample>

    </>
  )
}

export default Buttons