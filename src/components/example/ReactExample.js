import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter'

import execCopy from './execCopy'

// styles
import './CodeExample.sass'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const ReactExample = (props) => {
  // state
  const [code, setCode] = useState('')

  // styles
  const hljsStyle = vs2015
  hljsStyle.hljs.padding = '1em'

  // methods
  const getCode = async () => {
    let {data} = await axios.post('/code', {
      path: props.path
    })
    setCode(data.code)
  }

  // mounted
  useEffect(() => {
    getCode()
  })

  // template
  return (
    <div className="box c-code-example">
      <div className="columns">
        <div
          className="column is-6">
          {props.children}
        </div>
        <div className="column is-6">
          <div className="c-code-example__code">
            <SyntaxHighlighter
              language="javascript" style={ hljsStyle }>
              {code}
            </SyntaxHighlighter>
            <div
              className="button is-small"
              onClick={() => execCopy(code)}>
              COPY
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactExample