'use strict';

let credit = `Code by :
www.baptistegodart.ch`

let nStrates = 8 // ! Include top & bottom bun
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
    // rectMode(CENTER)

    initStrate()
    // translate(width/(2*widthRatio), height/nStrates/2)
    // drawGrid()

    let strateHeights = []

    // for(let i=0; i<strateCounter; i++){
    for(let i=0; i<nStrates; i++){

        let offsetY = 0
        let strateHeight

        let posY = 0

        for(let i = 0; i<strateHeights.length; i ++){
            offsetY = offsetY + strateHeights[i]
        }

        if(i+1 == nStrates){
            strateHeight = height - offsetY
        }else{
            strateHeight = height/nStrates + random(-25, 25)
        }

        strateHeights.push(strateHeight)

        // console.log(offsetY - strateHeights[strateHeights.length -1], "+");
        // console.log(strateHeights[i], "=", offsetY, height);



        posY = offsetY

        // const easingValue = strates[i].easingPosY.update(deltaTime)
        // const easingWidth = strates[i].easingWidth.update(deltaTime)
        // const easingHeight = strates[i].easingHeight.update(deltaTime)
        
        const strateWidth = width/widthRatio
        // const strateHeight = height/nStrates
        
        const posX = width/2 - strateWidth/2
        // const posY = height - ((i + 1) * strateHeight)
        // const posY = strates[i].currState == sStates.FALLING ? easingValue - easingHeight/4 : height - (i+1)*strateHeight

        drawBurger(posX, posY, strateWidth, strateHeight, i)

    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {

    // background(255)
    noStroke()
    
    // translate(width/(2*widthRatio), height/nStrates/2)
    
    

}

function drawGrid() {
    let strateHeights = []
    
    for(let i=0; i<nStrates; i++){
        
        let offsetY = 0
        let strateHeight

        let posY = 0

        for(let i = 0; i<strateHeights.length; i ++){
            offsetY = offsetY + strateHeights[i]
        }

        if(i+1 == nStrates){
            strateHeight = height - offsetY
        }else{
            strateHeight = height/nStrates + random(-10, 10)
        }

        strateHeights.push(strateHeight)

        const posX = 0

        // console.log(offsetY - strateHeights[strateHeights.length -1], "+");
        // console.log(strateHeights[i], "=", offsetY, height);



        posY = offsetY

        // console.log(posY);


        push()
        stroke(0)
        fill(255/(i+2))
        rect(posX, posY, width*2, strateHeight)
        pop()

    }
    console.log(strateHeights);
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
            strates[strateCounter-1].easingWidth.start({
                to: width/widthRatio + 20,
            })
            strates[strateCounter-1].easingHeight.start({
                to: height/nStrates,
            })
        }
    
        strateCounter++
    }

}
