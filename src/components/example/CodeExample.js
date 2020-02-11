import React from 'react'
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter'

import execCopy from './execCopy'

// styles
import './CodeExample.sass'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const hljsStyle = monokaiSublime
// hljsStyle.hljs.padding = '1em'

// class
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

  execCopy() {
    return execCopy(this)
  }

  render() {
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
              <div
                className="button is-small"
                onClick={(e) => this.execCopy(e)}>
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