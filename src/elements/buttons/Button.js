import React from 'react'
import CodeExample from '@c/CodeExample'
function ButtonBase() {
  return (
    <>
      <CodeExample>
        <button className="button">Button</button>
      </CodeExample>

      <CodeExample>
        <div className="field is-grouped">
          <div className="control">
            <a href="null" className="button">Anchor</a>
          </div>
          <div className="control">
            <button className="button">Button</button>
          </div>
          <div className="control">
            <input className="button" type="submit" value="Submit input"/>
          </div>
          <div className="control">
            <input className="button" type="reset" value="Reset input"/>
          </div>
        </div>
      </CodeExample>
    </>
  )
}

export default ButtonBase