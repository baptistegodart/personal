'use strict';

let credit = `Code by :
www.baptistegodart.ch`

let nStrates = 10 // ! Include top & bottom bun

let strates = []
let bread = 'bread'
let garniture = 'garniture'

function showCredits() {
    console.log(credit)
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    showCredits()

    initStrate()
    console.log(strates);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {

    background(255)
    noStroke()

    for(let i=0; i<nStrates; i++){

        const strateWidth = width/1.2
        const strateHeight = height/nStrates

        const posX = width/2 - strateWidth/2
        const posY = i*strateHeight

        drawBurger(posX, posY, strateWidth, strateHeight, i)
        drawGrid(posX, posY, strateWidth, strateHeight)

    }

}

function drawGrid(x, y, w, h) {

    for(let i=0; i<nStrates; i++){

        push()

        stroke(0)
        noFill()
        rect(x, y, w, h);

        pop()

    }
    
}

function initStrate() {

    for(let i=0; i<nStrates; i++){

        const strateType = i == 0 || i == nStrates-1 ? bread : garniture
        const newStrate = new Strate(strateType)

        strates.push(newStrate)

    }
}

function drawBurger(x, y, w, h, index) {

    strates[index].draw(x, y, w, h)

}
