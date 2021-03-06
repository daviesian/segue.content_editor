require.config({

    baseUrl: 'static/js/lib',

    urlArgs: "bust=" + (new Date()).getTime(),

    paths: {
        react: 'react/react-with-addons',
        JSXTransformer: 'react/JSXTransformer',
        app: '../app',
        jquery: '../vendor/jquery',
        mathjax: 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'
    },

    map: {
        "*": {
            "codemirrorJS": "codemirror/mode/javascript/javascript",
            "codemirrorTex": "codemirror/mode/stex/stex"
        }    
    },

    shim: {
        "codemirror/mode/stex/stex": ["codemirror/codemirror"],
        "codemirror/mode/javascript/javascript": ["codemirror/codemirror"],
        "foundation": ['jquery'],
    }
});

var app = {}

require(["app/main"]);