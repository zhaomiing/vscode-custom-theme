'use strict'

module.exports = {
  default: {
    activitybar: {
      background: {
        color: '#333'
      }
    },
    filetree: {
      background: {
        color: '#252526'
      }
    },
    tabs: {
      toolbox: {
        background: {
          color: '#252526'
        }
      }
    },
    statusbar: {
      background: {
        color: '#007acc'
      },
      text: {
        color: '#fff'
      }
    },
    smiley: {
      enabled: true
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
    activitybar: {
      background: /(.vs-dark .monaco-workbench>.activitybar>.content{(?:.*?)background-color:)(.*?)(;|})/
    },
    filetree: {
      background: /(.vs-dark .monaco-workbench{(?:.*?)background-color:)(.*?)(;|})/,
      toolbox: /(.vs-dark .monaco-workbench>.sidebar>.title>.title-actions{(?:.*?)background-color:)(.*?)(;|})/
    },
    tabs: {
      toolbox: {
        background: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title.tabs{(?:.*?)background:)(.*?)(;|})/
      }
    },
    statusbar: {
      background: /(.monaco-workbench>.part.statusbar{(?:.*?)background:)(.*?)(;|})/,
      color: /(.monaco-workbench>.part.statusbar{(?:.*?)color:)(.*?)(;|})/
    },
    smiley: {
      on: '.statusbar-item>.dropdown.send-feedback{display:inline-block}',
      off: '.statusbar-item>.dropdown.send-feedback{display:inline-block;opacity:0;}'
    }
  },
  encoding: 'utf8'
}