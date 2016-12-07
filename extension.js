'use strict'

const vscode = require('vscode')
const theme = require('./lib/theme')

function activate(context) {
    theme.register()
    const apply = vscode.commands.registerCommand('theme.apply', function () {
        theme.apply()
    })
    context.subscriptions.push(apply)
}

exports.activate = activate

function deactivate() {
    theme.reset()
}

exports.deactivate = deactivate
