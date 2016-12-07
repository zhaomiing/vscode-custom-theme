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
  css = _setStatusbar(settings, css)
  css = _setFeedback(settings, css)
  fs.writeFileSync(cssPath, css, config.encoding)
}

function _setActivitybar(settings, theme) {
  theme = theme.replace(config.regex.activitybar.background, `$1${settings.activitybar.background.color}$3`)
  return theme
}

function _setStatusbar(settings, theme) {
  theme = theme.replace(config.regex.statusbar.background, `$1${settings.statusbar.background.color}$3`)
  theme = theme.replace(config.regex.statusbar.color, `$1${settings.statusbar.text.color}$3`)
  return theme
}

function _setFeedback(settings, theme) {
  theme = settings.smiley.enabled
    ? theme.replace(config.regex.smiley.off, config.regex.smiley.on)
    : theme.replace(config.regex.smiley.on, config.regex.smiley.off)
  return theme
}
