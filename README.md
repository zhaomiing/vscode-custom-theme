# Custom theme for Visual Studio Code

[![Build Status](https://travis-ci.org/bentx/vscode-custom-theme.svg?branch=master)](https://travis-ci.org/bentx/vscode-custom-theme) [![bitHound Code](https://www.bithound.io/github/bentx/vscode-custom-theme/badges/code.svg)](https://www.bithound.io/github/bentx/vscode-custom-theme) [![VS Code Marketplace](https://img.shields.io/badge/vscode-bentx.vscode--custom--theme-blue.svg)](https://marketplace.visualstudio.com/items?itemName=bentx.vscode-custom-theme)

Customize your [Visual Studio Code](https://code.visualstudio.com/) experience, use your own colors.

![vscode custom theme](./images/screen.gif)

## Installation
Type `cmd-shift-p` to launch command palette and choose `Extensions: Install Extension`. Search this package and install.

### On Windows
You will need to run Visual Studio Code as Administrator before you apply your theme, after that you can re-open it with normal privileges.

### On Linux
A permission tweak is needed, you'll need to run this in your terminal :
```sh
sudo chown -R $(whoami) /usr/share/code
```

## Usage
Type `cmd-shift-p` to launch command palette and choose one of these commands :

- `Custom theme : Apply`. It will apply the current theme as defined in your settings, check the `Extension Settings` section for more details.
- `Custom theme : Reset`. It will reset to the original Visual Studio Code theme.

Note : Visual Studio Code performs an integrity check everytime it starts, and will switch to `[Unsupported]` mode if the installation has been patched (as this extension does). If you wish to disable the integrity check you can set the `theme.integrity.enabled` setting to `false` (see below), but please be responsible with this, and re-enable it everytime you post a screenshot regarding an issue, so the Visual Studio Code team knows you're using an unsupported version.

## Extension Settings

The menu under File > Preferences (Code > Preferences on Mac) provides entries to configure user and workspace settings. 

This extension contributes the following settings:

* `theme.dark.activitybar.background.color`: The activity bar background color (dark theme).
* `theme.light.activitybar.background.color`: The activity bar background color (light theme).
* `theme.dark.filetree.background.color`: The file tree background color (dark theme).
* `theme.light.filetree.background.color`: The file tree background color (light theme).
* `theme.dark.tabs.background.color`: The tabs background color (dark theme).
* `theme.light.tabs.background.color`: The tabs background color (light theme).
* `theme.dark.tabs.border.color`: The tabs border color (dark theme).
* `theme.light.tabs.border.color`: The tabs border color (light theme).
* `theme.dark.tabs.toolbox.background.color`: The tabs toolbox background color (top right bar, dark theme).
* `theme.light.tabs.toolbox.background.color`: The tabs toolbox background color (top right bar, light theme).
* `theme.statusbar.background.color`: The status bar background color.
* `theme.statusbar.backgroundRaw.color`: The status bar background color (no project).
* `theme.statusbar.backgroundDebug.color`: The status bar background color (debug mode).
* `theme.statusbar.text.color`: The status bar text color (will be applied to icons as well).
* `theme.statusbar.smiley.enabled`: Display or hide the status bar smiley face.
* `theme.integrity.enabled`: Enable or disable the VS code integrity check ([Unsupported] mode).

## Release Notes

### 1.0.0

Initial release

### 1.0.3

Add support for [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/)

### 1.0.7

Add support for Visual Studio Code 1.8

### 1.0.8

Maintain support for Visual Studio Code 1.7 and below

### 1.0.9

Add support for statusbar icons color (match text color)

### 1.1.0

Fixed minor issues
