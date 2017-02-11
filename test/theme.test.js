'use strict'

const assert = require('chai').assert
const rewire = require('rewire')
const theme = rewire('../lib/theme')
const fixtures = rewire('./fixtures')
const config = theme.__get__('config')
const fs = require('fs')
const js = fs.readFileSync(theme.__get__('jsPath'), config.encoding)
const css = fs.readFileSync(theme.__get__('cssPath'), config.encoding)
const ts = fs.readFileSync(theme.__get__('tsPath'), config.encoding)

suite('Extension Tests', function () {
    test('Integrity check can be patched', function () {
        assert.include([
            js.includes(config.regex.integrity.on),
            js.includes(config.regex.integrity.off)
        ], true, 'Workbench js contains integrity check')
    })
    test('Activity bar can be themed', function () {
        assert.equal(before(css, 'color'), 0, 'Workbench css does not contains the patched color')
        assert.equal(after(css, '_setActivitybar', 'color'), 2, 'Workbench css contains 2 elements with the patched color')
    })
    test('Filetree can be themed', function () {
        assert.equal(before(css, 'color'), 0, 'Workbench css does not contains the patched color')
        assert.equal(after(css, '_setFiletree', 'color'), 4, 'Workbench css contains 4 elements with the patched color')
        assert.equal(before(css, 'fontSize'), 0, 'Workbench css does not contains the patched font size')
        assert.equal(after(css, '_setFiletree', 'fontSize'), 1, 'Workbench css contains 1 element with the patched font size')
    })
    test('Tabs can be themed', function () {
        assert.equal(before(css, 'color'), 0, 'Workbench css does not contains the patched color')
        assert.equal(after(css, '_setTabs', 'color'), 8, 'Workbench css contains 8 elements with the patched color')
        assert.equal(before(css, 'fontSize'), 0, 'Workbench css does not contains the patched font size')
        assert.equal(after(css, '_setTabs', 'fontSize'), 1, 'Workbench css contains 1 element with the patched font size')
    })
    test('Status bar can be themed', function () {
        assert.equal(before(css, 'color'), 0, 'Workbench css does not contains the patched color')
        assert.equal(after(css, '_setStatusbar', 'color'), 9, 'Workbench css contains 9 elements with the patched color')
        assert.equal(before(css, 'fontSize'), 0, 'Workbench css does not contains the patched font size')
        assert.equal(after(css, '_setStatusbar', 'fontSize'), 1, 'Workbench css contains 1 element with the patched font size')
    })
    test('Feedback smiley can be patched', function () {
        assert.include([
            css.includes(config.regex.statusbar.smiley.on),
            css.includes(config.regex.statusbar.smiley.off)
        ], true, 'Workbench css contains feedback smiley')
    })
    test('TypeScript extension can be themed', function () {
        assert.equal(before(ts, 'color'), 0, 'TypeScript extension does not contains the patched color')
        assert.equal(after(ts, '_setTs', 'color'), 1, 'TypeScript extension contains 1 element with the patched color')
    })
})

function before(target, patch) {
    return (target.match(new RegExp(fixtures[patch], 'g')) || []).length
}

function after(target, method, patch) {
    const themed = theme.__get__(method)(fixtures.settings, target)
    return (themed.match(new RegExp(fixtures[patch], 'g')) || []).length
}
