'use strict';

let credit = `Code by :
www.baptistegodart.ch`

let nStrates = 7 // ! Include top & bottom bun
let widthRatio = 2 // Strates width = width/widthRatio

let strates = []
let strateCounter = 0

let roundCornerValue = 100

let bread = 'bread'
let garniture = 'garniture'

function showCredits() {
    console.log(credit)
}

function setup() {
    
    showCredits()
    createCanvas(windowWidth, windowHeight)

    angleMode(DEGREES)
    rectMode(CENTER)

    // initStrate()

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {

    background(255)
    noStroke()
    
    translate(width/(2*widthRatio), height/nStrates/2)
    drawGrid()

    for(let i=0; i<strateCounter; i++){
    // for(let i=0; i<nStrates; i++){

        const easingValue = strates[i].easingPosY.update(deltaTime)
        
        const strateWidth = width/widthRatio
        const strateHeight = height/nStrates
        
        const posX = width/2 - strateWidth/2
        // const posY = height - ((i + 1) * strateHeight)
        const posY = strates[i].currState == sStates.FALLING ? easingValue : height - (i+1)*strateHeight

        drawBurger(posX, posY, strateWidth, strateHeight, i)

    }

}

function drawGrid() {

    for(let i=0; i<nStrates; i++){

        const strateHeight = height/nStrates
        const posX = 0
        const posY = i*strateHeight

        push()
        stroke(0)
        noFill()
        rect(posX, posY, width*2, strateHeight)
        pop()

    }
    
}

function initStrate() {

    for(let i=0; i<nStrates; i++){

        const strateType = i == 0 || i == nStrates-1 ? bread : garniture
        const newStrate = new Strate(i, strateType)

        strates.push(newStrate)

    }
    
}

function drawBurger(x, y, w, h, index) {

    strates[index].draw(x, y, w, h)
 
}

function mouseClicked() {

    const firstStrate = strates.length > 0 ? false : true
    let lastStratDroped

    if(firstStrate) {
        lastStratDroped = true
    }else{
        lastStratDroped = strates[strateCounter-1].currState == sStates.DROPED ? true : false
    }

    
    if(strateCounter < nStrates && lastStratDroped) {
        
        const strateType = strateCounter == 0 || strateCounter == nStrates-1 ? bread : garniture
        const newStrate = new Strate(strateCounter, strateType)
    
        strates.push(newStrate)

        const strateHeight = height/nStrates

        strates[strateCounter].easingPosY.start({
            to: height - (strateCounter+1)*strateHeight,
        })

        strates[strateCounter].easingPosY.onEnd = function () {
            strates[strateCounter-1].currState = sStates.DROPED
        }
    
        strateCounter++
    }

}
