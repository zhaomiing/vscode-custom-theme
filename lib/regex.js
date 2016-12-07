'use strict'

module.exports = {
  integrity: {
    on: 'return{isPure:t,proof:e}',
    off: 'return{isPure:true,proof:e}'
  },
  smiley: {
    on: '.statusbar-item>.dropdown.send-feedback{display:inline-block}',
    off: '.statusbar-item>.dropdown.send-feedback{display:inline-block;opacity:0;}'
  }
}
