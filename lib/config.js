'use strict'

module.exports = {
  default: {
    dark: {
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
      }
    },
    light: {
      activitybar: {
        background: {
          color: '#2c2c2c'
        }
      },
      filetree: {
        background: {
          color: '#f3f3f3'
        }
      },
      tabs: {
        background: {
          color: '#ececec'
        },
        border: {
          color: '#ddd'
        },
        toolbox: {
          background: {
            color: '#f3f3f3'
          }
        }
      }
    },
    statusbar: {
      background: {
        color: '#007acc'
      },
      backgroundRaw: {
        color: '#68217a'
      },
      backgroundDebug: {
        color: '#c63'
      },
      text: {
        color: '#fff'
      },
      smiley: {
        enabled: true
      }
    }
  },
  path: {
    base: '/vs/workbench',
    insiders: '/electron-browser',
    css: '/workbench.main.css',
    js: '/workbench.main.js'
  },
  regex: {
    insiders: 'Insiders',
    integrity: {
      on: 'return{isPure:t,proof:e}',
      off: 'return{isPure:true,proof:e}'
    },
    activitybar: {
      backgroundDark: /(.vs-dark .monaco-workbench>.activitybar>.content{(?:.*?)background-color:)(.*?)(;|})/,
      backgroundLight: /(.vs .monaco-workbench>.activitybar>.content{(?:.*?)background-color:)(.*?)(;|})/
    },
    filetree: {
      backgroundDark: /(.vs-dark .monaco-workbench{(?:.*?)background-color:)(.*?)(;|})/,
      backgroundLight: /(.vs .monaco-workbench{(?:.*?)background-color:)(.*?)(;|})/,
      toolboxDark: /(.vs-dark .monaco-workbench>.sidebar>.title>.title-actions{(?:.*?)background-color:)(.*?)(;|})/,
      toolboxLight: /(}.monaco-workbench>.sidebar>.title>.title-actions{(?:.*?)background-color:)(.*?)(;|})/
    },
    tabs: {
      backgroundDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab:not\(.active\){(?:.*?)background-color:)(.*?)(;|})/,
      backgroundLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab:not\(.active\){(?:.*?)background-color:)(.*?)(;|})/,
      border: {
        leftDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab{(?:.*?)border-left-color:)(.*?)(;|})/,
        leftLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab{(?:.*?)border-left-color:)(.*?)(;|})/,
        rightDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab.active:last-child{(?:.*?)border-right-color:)(.*?)(;|})/,
        rightLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab.active:last-child{(?:.*?)border-right-color:)(.*?)(;|})/,
        bottomDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title.tabs:before{(?:.*?)border-top:1px solid )(.*?)(;|})/,
        bottomLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title.tabs:before{(?:.*?)border-top:1px solid )(.*?)(;|})/
      },
      toolbox: {
        backgroundDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title.tabs{(?:.*?)background:)(.*?)(;|})/,
        backgroundLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title.tabs{(?:.*?)background:)(.*?)(;|})/
      }
    },
    statusbar: {
      background: /(.monaco-workbench>.part.statusbar{(?:.*?)background:)(.*?)(;|})/,
      backgroundRaw: /(.monaco-workbench.no-workspace>.part.statusbar{(?:.*?)background:)(.*?)(;|})/,
      backgroundDebug: /(.monaco-workbench.debugging>.part.statusbar{(?:.*?)background:)(.*?)(!)/,
      color: /(.monaco-workbench>.part.statusbar{(?:.*?)color:)(.*?)(;|})/,
      smiley: {
        on: '.statusbar-item>.dropdown.send-feedback{display:inline-block}',
        off: '.statusbar-item>.dropdown.send-feedback{display:inline-block;opacity:0;}'
      }
    }
  },
  encoding: 'utf8'
}
