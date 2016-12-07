'use strict'

module.exports = {
  default: {
    smiley: {
      enabled: true
    },
    statusbar: {
      background: {
        color: '#007acc'
      },
      text: {
        color: '#fff'
      }
    }
  },
  path: {
    base: '/vs/workbench',
    css: '/workbench.main.css',
    js: '/workbench.main.js'
  },
  regex: {
    integrity: {
      on: 'return{isPure:t,proof:e}',
      off: 'return{isPure:true,proof:e}'
    },
    smiley: {
      on: '.statusbar-item>.dropdown.send-feedback{display:inline-block}',
      off: '.statusbar-item>.dropdown.send-feedback{display:inline-block;opacity:0;}'
    },
    statusbar: {
      background: /(.monaco-workbench>.part.statusbar{(?:.*?)background:)(.*?);/,
      color: /(.monaco-workbench>.part.statusbar{(?:.*?)color:)(.*?);/
    }
  },
  encoding: 'utf8'
}
