'use strict'

let credit = `Code by :
www.baptistegodart.ch`

let nStrates = 7 // ! Include top & bottom bun
let widthRatio = 2 // Strates width = width/widthRatio

let strates = []
let strateHeights = []
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

    // initStrate() // Static burger

    // drawGrid()

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {

    background(255)
    noStroke()
    
    // Interactive burger -> comment initStrate() at setup
    for(let i=0; i<strateCounter; i++){

        const easingValue = strates[i].easingPosY.update(deltaTime)
        const easingWidth = strates[i].easingWidth.update(deltaTime)
        const easingHeight = strates[i].easingHeight.update(deltaTime)

        const strateWidth = easingWidth
        const strateHeight = easingHeight
        const posY = easingValue
        
        const posX = width/2 - strateWidth/2

        drawBurger(posX, posY, strateWidth, strateHeight, i)

    }

    // // Static burger -> active initStrate() at setup
    // for(let i=0; i<nStrates; i++){
        
    //     const strateWidth = width/widthRatio
    //     const strateHeight = strates[i].height
    //     const posY = strates[i].y
        
    //     const posX = width/2 - strateWidth/2

    //     drawBurger(posX, posY, strateWidth, strateHeight, i)

    // }
    

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
    let previousStrateDroped

    if(firstStrate) {
        previousStrateDroped = true
    }else{
        previousStrateDroped = strates[strateCounter-1].currState == sStates.DROPED ? true : false
    }
    
    if(strateCounter < nStrates && previousStrateDroped) {
        
        const strateType = strateCounter == 0 || strateCounter == nStrates-1 ? bread : garniture
        const newStrate = new Strate(strateCounter, strateType)
    
        strates.push(newStrate)

        strates[strateCounter].easingPosY.start()

        strates[strateCounter].easingPosY.onEnd = function () {
            strates[strateCounter-1].currState = sStates.DROPED
            strates[strateCounter-1].easingWidth.start()
            strates[strateCounter-1].easingHeight.start()
        }
    
        strateCounter++
    }

}
