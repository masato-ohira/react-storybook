import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter'
import execCopy from './execCopy'

import './CodeExample.sass'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeExample = (props) => {
  // state
  const sourceRef = useRef('')
  const [code, setCode] = useState('')

  // styles
  const hljsStyle = monokaiSublime
  hljsStyle.hljs.padding = '1em'

  // methods
  const getCode = async () => {
    let {data} = await axios.post('/prettify', {
      html: sourceRef.current.innerHTML
    })
    setCode(data.html)
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
          ref={sourceRef}
          className="column is-6 js-code">
          {props.children}
        </div>
        <div className="column is-6">
          <div className="c-code-example__code">
            <SyntaxHighlighter language="html" style={ hljsStyle }>
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

export default CodeExample