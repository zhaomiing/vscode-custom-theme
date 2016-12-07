'use strict'

const vscode = require('vscode')
const path = require('path')
const fs = require('fs')
const regex = require('./regex')

const encoding = 'utf8'
const baseDir = path.dirname(require.main.filename) + _genericPath('/vs/workbench')
const cssPath = baseDir + _genericPath('/workbench.main.css')
const jsPath = baseDir + _genericPath('/workbench.main.js')

module.exports = {
  register,
  apply,
  reset
}

function register() {
  _setIntegrityCheck(false)
}

function apply() {
  const config = vscode.workspace.getConfiguration('theme')
  _setTheme(config)
  _reload()
}

function reset() {
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
  let js = fs.readFileSync(jsPath, encoding)
  js = active
    ? js.replace(regex.integrity.off, regex.integrity.on)
    : js.replace(regex.integrity.on, regex.integrity.off)
  fs.writeFileSync(jsPath, js, encoding)
}

function _setTheme(config) {
  let css = fs.readFileSync(cssPath, encoding)
  css = _setFeedback(config, css)
  fs.writeFileSync(cssPath, css, encoding)
}

function _setFeedback(theme, config) {
  theme = config.smiley.enabled
    ? theme.replace(regex.smiley.off, regex.smiley.on)
    : theme.replace(regex.smiley.on, regex.smiley.off)
  return theme
}
