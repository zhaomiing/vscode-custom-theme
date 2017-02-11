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
          color: '#252526'
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
          color: '#f3f3f3'
        },
        toolbox: {
          background: {
            color: '#f3f3f3'
          }
        }
      }
    },
    filetree: {
      font: {
        size: '13px'
      }
    },
    tabs: {
      font: {
        size: '13px'
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
      font: {
        size: '12px'
      },
      icons: {
        icon: '%23fff',
        info: '%23FFF',
        error: '%23fff',
        warning: '%23fff'
      },
      smiley: {
        enabled: true
      }
    },
    extensions: {
      ts: {
        color: 'white'
      }
    }
  },
  path: {
    base: '/vs/workbench',
    extensions: '/../extensions',
    electron: '/electron-browser',
    css: '/workbench.main.css',
    js: '/workbench.main.js',
    tsExt: '/typescript/out/utils/versionStatus.js'
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
      toolboxLight: /(}.monaco-workbench>.sidebar>.title>.title-actions{(?:.*?)background-color:)(.*?)(;|})/,
      fontSize: /(}.monaco-workbench>.part>.content{(?:.*?)font-size:)(.*?)(;|})/
    },
    tabs: {
      backgroundDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab:not\(.active\){(?:.*?)background-color:)(.*?)(;|})/,
      backgroundLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab:not\(.active\){(?:.*?)background-color:)(.*?)(;|})/,
      border: {
        leftDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab{(?:.*?)border-left-color:)(.*?)(;|})/,
        leftLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab{(?:.*?)border-left-color:)(.*?)(;|})/,
        rightDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab.active:last-child{(?:.*?)border-right-color:)(.*?)(;|})/,
        rightLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .tabs-container>.tab.active:last-child{(?:.*?)border-right-color:)(.*?)(;|})/
      },
      fontSize: /(,.monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title .title-label a{(?:.*?)font-size:)(.*?)(;|})/,
      toolbox: {
        backgroundDark: /(.vs-dark .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title.tabs.shows-tabs{(?:.*?)background:)(.*?)(;|})/,
        backgroundLight: /(.vs .monaco-workbench>.part.editor>.content>.one-editor-silo>.container>.title.tabs.shows-tabs{(?:.*?)background:)(.*?)(;|})/
      }
    },
    statusbar: {
      background: /(.monaco-workbench>.part.statusbar{(?:.*?)background:)(.*?)(;|})/,
      backgroundRaw: /(.monaco-workbench.no-workspace>.part.statusbar{(?:.*?)background:)(.*?)(;|})/,
      backgroundDebug: /(.monaco-workbench.debugging>.part.statusbar{(?:.*?)background:)(.*?)(!)/,
      color: /(.monaco-workbench>.part.statusbar{(?:.*?)color:)(.*?)(;|})/,
      fontSize: /(}.monaco-workbench>.part.statusbar{(?:.*?)font-size:)(.*?)(;|})/,
      icons: {
        icon: /(.task-statusbar-item-icon{(?:.*?)fill=\')(.*?)(\')/,
        info: /(.task-statusbar-item-label-info{(?:.*?)fill=\')(.*?)(\')/,
        error: /(.task-statusbar-item-label-error{(?:.*?)fill=\')(.*?)(\')/,
        warning: /(.task-statusbar-item-label-warning{(?:.*?)fill=\')(.*?)(\')/,
        git: /(}.monaco-workbench .quick-open-widget .quick-open-tree .quick-open-entry .quick-open-entry-icon.git{(?:.*?)})/
      },
      smiley: {
        on: '.statusbar-item>.dropdown.send-feedback{display:inline-block}',
        off: '.statusbar-item>.dropdown.send-feedback{display:inline-block;opacity:0;}'
      }
    },
    extensions: {
      ts: {
        color: /(versionBarEntry.color = ')(.*?)(';)/
      }
    }
  },
  override: {
    git: {
      reset: /(.monaco-shell .git-statusbar-group>.git-statusbar-branch-item{(?:[^}]*?)fill=(?:.*?)})/,
      apply: (color) => `.monaco-shell .git-statusbar-group>.git-statusbar-branch-item{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M27.459 14.902L17.02 4.463a1.517 1.517 0 0 0-1.089-.452c-.417 0-.793.157-1.089.452L12.594 6.71l2.549 2.549c.249-.112.522-.177.813-.177 1.106 0 2.002.896 2.002 2.002 0 .291-.064.565-.176.814l2.311 2.336c.25-.111.633-.234.923-.234 1.106 0 2 .911 2 2.016s-.894 1.969-2 1.969C19.911 17.984 19 17.234 19 16c0-.28.016-.462.119-.704l-2.373-2.374-.023.007v6.274A2.02 2.02 0 0 1 18 21.078c0 1.105-.878 2.016-1.984 2.016a2.053 2.053 0 0 1-2.031-2.031c0-.846.535-1.564 1.28-1.857l.001-6.25a1.996 1.996 0 0 1-1.147-2.659L11.564 7.74l-7.115 7.114a1.542 1.542 0 0 0 .001 2.178L14.89 27.55c.296.295.671.45 1.089.45.415 0 .796-.159 1.089-.45l10.391-10.471a1.541 1.541 0 0 0 0-2.177z' fill='${color}'/%3E%3C/svg%3E")}`
    }
  },
  encoding: 'utf8'
}
