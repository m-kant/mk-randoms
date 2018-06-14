/** To use markdown with extended options in PUG templates have to make separate pug-filter */

const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js')

const md = new MarkdownIt({
    highlight:   function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) { return str }
        } else {
            return str;
        }
    }
});

// pug filter to transform markdown to html with highlighted code
module.exports = function(text, options){
    return md.render(text);
}