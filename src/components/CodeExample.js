import React from 'react'
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import './CodeExample.sass'

class CodeExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '<div className="box"></div>'
    }
  }
  async componentDidMount() {
    let {data} = await axios.post('/pretty', {
      html: this.refs.source.innerHTML
    })
    this.setState({
      code: data.html
    })
  }

  render() {
    const execCopy = () => {
      const self = this
      let temp = document.createElement('div')
      temp.appendChild(document.createElement('pre')).textContent = self.state.code
      let s = temp.style
      s.position = 'fixed'
      s.left = '-100%'
      document.body.appendChild(temp)
      document.getSelection().selectAllChildren(temp)
      let result = document.execCommand('copy')
      document.body.removeChild(temp)
      if (result) {
        alert('コピーできました')
      } else {
        alert('このブラウザでは対応していません')
      }
    }

    const hljsStyle = monokaiSublime
    hljsStyle.hljs.padding = '1em'

    return (
      <div className="box c-code-example">
        <div className="columns">
          <div
            ref="source"
            className="column is-6">
            {this.props.children}
          </div>
          <div className="column is-6">
            <div className="c-code-example__code">
              <SyntaxHighlighter language="html" style={ hljsStyle }>
                {this.state.code}
              </SyntaxHighlighter>
              <div className="button is-small" onClick={execCopy}>
                COPY
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CodeExample