const bodyParser = require('body-parser')
const beautify   = require('js-beautify').html
// const prettify   = require('google-code-prettify/src/prettify')

const router = app => {
  app.use(bodyParser.json())
  app.post('/pretty', (req, res) => {
    let html = req.body.html
    const afterHtml = beautify(html, {
      "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg", "dust"],
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

    res.json({
      html: afterHtml,
    })
    res.end()

  })
}

module.exports = router
