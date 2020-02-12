import React from 'react'

import CodeExample from './CodeExample'
import ReactExample from '@c/example/ReactExample'

export const codeExample = () => {
  return (
    <ReactExample path="src/components/example/CodeExample.js">
      <CodeExample>
        <button className="button">Button</button>
      </CodeExample>
    </ReactExample>
  )
}

export default { title: 'Components/Example' }