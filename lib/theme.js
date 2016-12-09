'use strict'

const vscode = require('vscode')
const path = require('path')
const fs = require('fs')
const config = require('./config')

const baseDir = path.dirname(require.main.filename) + _genericPath(config.path.base)
const cssPath = baseDir + _genericPath(config.path.css)
const jsPath = baseDir + _genericPath(config.path.js)

module.exports = {
  apply,
  reset
}

function apply() {
  _setIntegrityCheck(false)
  _setTheme(vscode.workspace.getConfiguration('theme'))
  _reload()
}

function reset() {
  _setTheme(config.default)
  _setIntegrityCheck(true)
  _reload()
}

function _reload() {
  vscode.commands.executeCommand('workbench.action.reloadWindow')
}

function _genericPath(path) {
  return /^win/.test(process.platform) ? path.replace(/\//g, '\\\\') : path
}

function _setIntegrityCheck(active) {
  let js = fs.readFileSync(jsPath, config.encoding)
  js = active
    ? js.replace(config.regex.integrity.off, config.regex.integrity.on)
    : js.replace(config.regex.integrity.on, config.regex.integrity.off)
  fs.writeFileSync(jsPath, js, config.encoding)
}

function _setTheme(settings) {
  let css = fs.readFileSync(cssPath, config.encoding)
  css = _setActivitybar(settings, css)
  css = _setFiletree(settings, css)
  css = _setTabs(settings, css)
  css = _setStatusbar(settings, css)
  css = _setFeedback(settings, css)
  fs.writeFileSync(cssPath, css, config.encoding)
}

function _setActivitybar(settings, theme) {
  theme = theme.replace(config.regex.activitybar.backgroundDark, `$1${settings.dark.activitybar.background.color}$3`)
  theme = theme.replace(config.regex.activitybar.backgroundLight, `$1${settings.light.activitybar.background.color}$3`)
  return theme
}

function _setFiletree(settings, theme) {
  theme = theme.replace(config.regex.filetree.backgroundDark, `$1${settings.dark.filetree.background.color}$3`)
  theme = theme.replace(config.regex.filetree.backgroundLight, `$1${settings.light.filetree.background.color}$3`)
  theme = theme.replace(config.regex.filetree.toolboxDark, `$1${settings.dark.filetree.background.color}$3`)
  theme = theme.replace(config.regex.filetree.toolboxLight, `$1${settings.light.filetree.background.color}$3`)
  return theme
}

function _setTabs(settings, theme) {
  theme = theme.replace(config.regex.tabs.backgroundDark, `$1${settings.dark.tabs.background.color}$3`)
  theme = theme.replace(config.regex.tabs.backgroundLight, `$1${settings.light.tabs.background.color}$3`)
  theme = theme.replace(config.regex.tabs.border.leftDark, `$1${settings.dark.tabs.border.color}$3`)
  theme = theme.replace(config.regex.tabs.border.leftLight, `$1${settings.light.tabs.border.color}$3`)
  theme = theme.replace(config.regex.tabs.border.rightDark, `$1${settings.dark.tabs.border.color}$3`)
  theme = theme.replace(config.regex.tabs.border.rightLight, `$1${settings.light.tabs.border.color}$3`)
  theme = theme.replace(config.regex.tabs.border.bottomDark, `$1${settings.dark.tabs.border.color}$3`)
  theme = theme.replace(config.regex.tabs.border.bottomLight, `$1${settings.light.tabs.border.color}$3`)
  theme = theme.replace(config.regex.tabs.toolbox.backgroundDark, `$1${settings.dark.tabs.toolbox.background.color}$3`)
  theme = theme.replace(config.regex.tabs.toolbox.backgroundLight, `$1${settings.light.tabs.toolbox.background.color}$3`)
  return theme
}

function _setStatusbar(settings, theme) {
  theme = theme.replace(config.regex.statusbar.background, `$1${settings.statusbar.background.color}$3`)
  theme = theme.replace(config.regex.statusbar.color, `$1${settings.statusbar.text.color}$3`)
  return theme
}

function _setFeedback(settings, theme) {
  theme = settings.statusbar.smiley.enabled
    ? theme.replace(config.regex.statusbar.smiley.off, config.regex.statusbar.smiley.on)
    : theme.replace(config.regex.statusbar.smiley.on, config.regex.statusbar.smiley.off)
  return theme
}
