"use strict"

const Element = require('./element')

module.exports = class RandomWalkCircleElement extends Element {

    constructor(x, y) {
        super()
        this.x = x
        this.y = y
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fillStyle = "red"
        ctx.fill()
    }

    action() {
        this.x += Math.random() * 2 - 1
        this.y += Math.random() * 2 - 1
    }
}