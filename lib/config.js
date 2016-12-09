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
      background: {
        color: '#2d2d2d'
      },
      border: {
        color: '#403f3f'
      },
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
      background: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab:not(.active){(?:.*?)background-color:)(.*?)(;|})/,
      border: {
        left: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab{(?:.*?)border-left-color:)(.*?)(;|})/,
        right: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab.active:last-child{(?:.*?)border-right-color:)(.*?)(;|})/,
        bottom: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title.tabs:before{(?:.*?)border-top:1px solid )(.*?)(;|})/
      },
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
