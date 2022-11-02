"use strict"

const RandomWalkCircleElement = require('./randomwalkcircleelement')
const ElementList = require('./elementlist')

//----------------------

module.exports = class Game {

    constructor() {
        this.raf                       // request animation frame handle
        this.elementList = null
    }

    //----------------------

    start() {
        this.elementList = new ElementList()
        for (let i = 0; i < 60; i++) {
            this.elementList.add(new RandomWalkCircleElement(i * 10, 150))
        }

        this.timeOfLastFrame = Date.now()
        this.raf = window.requestAnimationFrame(this.tick.bind(this))
    }

    //----------------------

    stop() {
        window.cancelAnimationFrame(this.raf)
        this.elementList = null
    }

    //----------------------

    tick() {
        let mycanvas = window.document.getElementById("mycanvas")

        let ctx = mycanvas.getContext('2d')

        //--- clear screen
        ctx.fillStyle = 'rgba(235, 250, 255, 0.05)'        // alpha < 1 löscht den Bildschrim nur teilweise -> bewegte Gegenstände erzeugen Spuren
        ctx.fillRect(0, 0, mycanvas.clientWidth, mycanvas.clientHeight)

        //--- draw elements
        this.elementList.draw(ctx)

        //--- execute element actions
        this.elementList.action()

        this.raf = window.requestAnimationFrame(this.tick.bind(this))
    }
}
