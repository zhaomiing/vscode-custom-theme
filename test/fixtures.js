'use strict'

const color = 'rainbow'
const fontSize = '99px'

module.exports = {
  color,
  fontSize,
  settings: {
    dark: {
      activitybar: {
        background: {
          color
        }
      },
      filetree: {
        background: {
          color
        }
      },
      tabs: {
        background: {
          color
        },
        border: {
          color
        },
        toolbox: {
          background: {
            color
          }
        }
      }
    },
    light: {
      activitybar: {
        background: {
          color
        }
      },
      filetree: {
        background: {
          color
        }
      },
      tabs: {
        background: {
          color
        },
        border: {
          color
        },
        toolbox: {
          background: {
            color
          }
        }
      }
    },
    filetree: {
      font: {
        size: fontSize
      }
    },
    tabs: {
      font: {
        size: fontSize
      }
    },
    statusbar: {
      background: {
        color
      },
      backgroundRaw: {
        color
      },
      backgroundDebug: {
        color
      },
      text: {
        color
      },
      font: {
        size: fontSize
      },
      smiley: {
        enabled: true
      }
    }
  }
}