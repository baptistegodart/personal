'use strict';

// let credit = `Code by :
// www.baptistegodart.ch`

let pictures = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    rectMode(CENTER)
    // showCredits()
    
    for(let i = 0; i < 40; i++){
        const picture = new Picture(random(0, width), random(30, height), random(80, 500), random(80, 500), '/assets/imr.png', i)

        pictures.push(picture)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {

    background(0)
    fill(0)
    noStroke()

    for(let i = 0; i < pictures.length; i++){
        pictures[i].updatePosition()
        pictures[i].draw()
    }


}

// function showCredits() {
//     console.log(credit)
// }