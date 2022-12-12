'use strict';

let credit = `Code by :
www.baptistegodart.ch`

function showCredits() {
    console.log(credit)
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    showCredits()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {

    background(255)
    fill(0)
    noStroke()

    const centerX = width / 2
    const centerY = height / 2

}
