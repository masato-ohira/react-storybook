const bodyParser = require('body-parser')
const beautify   = require('js-beautify').html
const fs         = require('fs-extra')

const router = app => {
  app.use(bodyParser.json())

  // Sourceの内容を表示
  app.post('/code', (req, res) => {
    let path = req.body.path
    let code = fs.readFileSync(path, 'utf-8')
    res.json({ code })
    res.end()
  })

  // htmlの整形
  app.post('/prettify', (req, res) => {
    let html = req.body.html
    html = beautify(html, {
      "brace_style": "collapse",
      "eol": "\n",
      "end_with_newline": true,
      "indent_char": " ",
      "indent_handlebars": true,
      "indent_inner_html": false,
      "indent_scripts": "keep",
      "indent_size": 2,
      "max_preserve_newlines": 0,
      "preserve_newlines": true,
      "unformatted": ["b", "em"],
      "keep_collapsed_whitespace": false,
      "wrap_line_length": 0
    })
    res.json({ html })
    res.end()

  })
}

module.exports = router
