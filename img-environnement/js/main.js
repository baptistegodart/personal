'use strict';

let pictures = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    rectMode(CENTER)
    showCredits()
    
    for(let i = 0; i < 20; i++){
        const picture = new Picture(random(0, width), random(30, height), random(80, 500), random(80, 500), '/assets/abstract.jpeg', i)

        pictures.push(picture)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {

    background(255)
    fill(0)
    noStroke()


    for(let i = 0; i < pictures.length; i++){
        pictures[i].detectIfMouseOver()
        pictures[i].updatePosition()

        pictures[i].draw()
    }

}

function showCredits() {
    const credit = `www.baptistegodart.ch`
    console.log(credit)
}