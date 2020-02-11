import React from 'react'
import CodeExample from '@c/example/CodeExample'
import {state} from '@/store'

function ButtonColors() {
  const colors = [
    '',
    ...state.colors
  ]
  const stateClass = (name) => {
    if (name) return ` is-${name}`
    else {
      return ''
    }
  }
  return (
    <>
      <CodeExample key="style-1">
        <div className="buttons">
          {colors.map( i => {
            return <div
              key={`style-1-${i}`}
              className={`button is-outlined${stateClass(i)}`}>
              Outlined
            </div>
          })}
        </div>
      </CodeExample>

      <CodeExample key="style-2">
        <div className="notification is-primary">
          <div className="buttons">
            {colors.map( i => {
              return <div
                key={`style-2-${i}`}
                className={`button is-inverted${stateClass(i)}`}>
                Inverted
              </div>
            })}
          </div>
        </div>
      </CodeExample>

      <CodeExample  key="style-3">
        <div className="notification is-primary">
          <div className="buttons">
            {colors.map( i => {
              return <div
                key={`style-3-${i}`}
                className={`button is-inverted is-outline${stateClass(i)}`}>
                Invert Outlined
              </div>
            })}
          </div>
        </div>
      </CodeExample>

      <CodeExample  key="style-4">
        <div className="buttons">
          {colors.map( i => {
            return <div
              key={`style-4-${i}`}
              className={`button is-rounded${stateClass(i)}`}>
              Rounded
            </div>
          })}
        </div>
      </CodeExample>
    </>
  )
}

export default ButtonColors