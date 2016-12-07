'use strict'

const vscode = require('vscode')
const theme = require('./lib/theme')

function activate(context) {
    const apply = vscode.commands.registerCommand('theme.apply', function () {
        theme.register()
        theme.apply()
    })
    context.subscriptions.push(apply)
    const reset = vscode.commands.registerCommand('theme.reset', function () {
        theme.reset()
    })
    context.subscriptions.push(reset)
}

exports.activate = activate

function deactivate() {
}

exports.deactivate = deactivate
