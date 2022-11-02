(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

module.exports = class Element {

    action() { }

    draw(ctx) { }

    checkCollision(element) { }
}
},{}],2:[function(require,module,exports){
"use strict"

module.exports = class ElementList extends Array {

    constructor() {
        super()
    }

    add(element) {
        this.push(element)
    }

    get(i) {
        return this[i]
    }

    delete(i) {
        this.splice(i, 1)
    }

    draw(ctx) {
        for (let i = 0; i < this.length; i++) {
            this[i].draw(ctx)
        }
    }

    action() {
        for (let i = 0; i < this.length; i++) {
            this[i].action()
        }
    }

    checkCollision(element) { }
}
},{}],3:[function(require,module,exports){
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

},{"./elementlist":2,"./randomwalkcircleelement":5}],4:[function(require,module,exports){
"use strict"

const Game = require("./game")
let myGame = new Game()
myGame.start()
},{"./game":3}],5:[function(require,module,exports){
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
},{"./element":1}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJnYW1lL2VsZW1lbnQuanMiLCJnYW1lL2VsZW1lbnRsaXN0LmpzIiwiZ2FtZS9nYW1lLmpzIiwiZ2FtZS9tYWluLmpzIiwiZ2FtZS9yYW5kb213YWxrY2lyY2xlZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEVsZW1lbnQge1xuXG4gICAgYWN0aW9uKCkgeyB9XG5cbiAgICBkcmF3KGN0eCkgeyB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihlbGVtZW50KSB7IH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEVsZW1lbnRMaXN0IGV4dGVuZHMgQXJyYXkge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBhZGQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnB1c2goZWxlbWVudClcbiAgICB9XG5cbiAgICBnZXQoaSkge1xuICAgICAgICByZXR1cm4gdGhpc1tpXVxuICAgIH1cblxuICAgIGRlbGV0ZShpKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGksIDEpXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW2ldLmRyYXcoY3R4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbaV0uYWN0aW9uKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKGVsZW1lbnQpIHsgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmNvbnN0IFJhbmRvbVdhbGtDaXJjbGVFbGVtZW50ID0gcmVxdWlyZSgnLi9yYW5kb213YWxrY2lyY2xlZWxlbWVudCcpXG5jb25zdCBFbGVtZW50TGlzdCA9IHJlcXVpcmUoJy4vZWxlbWVudGxpc3QnKVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJhZiAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCBhbmltYXRpb24gZnJhbWUgaGFuZGxlXG4gICAgICAgIHRoaXMuZWxlbWVudExpc3QgPSBudWxsXG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50TGlzdCA9IG5ldyBFbGVtZW50TGlzdCgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50TGlzdC5hZGQobmV3IFJhbmRvbVdhbGtDaXJjbGVFbGVtZW50KGkgKiAxMCwgMTUwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZU9mTGFzdEZyYW1lID0gRGF0ZS5ub3coKVxuICAgICAgICB0aGlzLnJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdG9wKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gICAgICAgIHRoaXMuZWxlbWVudExpc3QgPSBudWxsXG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICB0aWNrKCkge1xuICAgICAgICBsZXQgbXljYW52YXMgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKVxuXG4gICAgICAgIGxldCBjdHggPSBteWNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgICAgLy8tLS0gY2xlYXIgc2NyZWVuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMzUsIDI1MCwgMjU1LCAwLjA1KScgICAgICAgIC8vIGFscGhhIDwgMSBsw7ZzY2h0IGRlbiBCaWxkc2NocmltIG51ciB0ZWlsd2Vpc2UgLT4gYmV3ZWd0ZSBHZWdlbnN0w6RuZGUgZXJ6ZXVnZW4gU3B1cmVuXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBteWNhbnZhcy5jbGllbnRXaWR0aCwgbXljYW52YXMuY2xpZW50SGVpZ2h0KVxuXG4gICAgICAgIC8vLS0tIGRyYXcgZWxlbWVudHNcbiAgICAgICAgdGhpcy5lbGVtZW50TGlzdC5kcmF3KGN0eClcblxuICAgICAgICAvLy0tLSBleGVjdXRlIGVsZW1lbnQgYWN0aW9uc1xuICAgICAgICB0aGlzLmVsZW1lbnRMaXN0LmFjdGlvbigpXG5cbiAgICAgICAgdGhpcy5yYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljay5iaW5kKHRoaXMpKVxuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5jb25zdCBHYW1lID0gcmVxdWlyZShcIi4vZ2FtZVwiKVxyXG5sZXQgbXlHYW1lID0gbmV3IEdhbWUoKVxyXG5teUdhbWUuc3RhcnQoKSIsIlwidXNlIHN0cmljdFwiXG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFJhbmRvbVdhbGtDaXJjbGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgIH1cblxuICAgIGFjdGlvbigpIHtcbiAgICAgICAgdGhpcy54ICs9IE1hdGgucmFuZG9tKCkgKiAyIC0gMVxuICAgICAgICB0aGlzLnkgKz0gTWF0aC5yYW5kb20oKSAqIDIgLSAxXG4gICAgfVxufSJdfQ==
