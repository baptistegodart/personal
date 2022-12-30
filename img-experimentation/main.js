'use strict';

let credit = `Code by :
www.baptistegodart.ch`

let img
let imgSrc = "/asset/hunter.jpeg"
let speed = 15
let size = 50

function showCredits() {
    console.log(credit)
}

function preload() {
    img = loadImage(imgSrc); 
    
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    rectMode(CENTER)
    showCredits()
    background(0)
    // img.filter(INVERT)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {

    // background(255)
    fill(0)
    noStroke()

    const centerX = width / 2
    const centerY = height / 2

    // translate(centerX, centerY)
    const norm = map(size, 0, height, 0, 360)

    img.width = 0 + size
    img.height = 0 + size*2
    const posX = centerX - img.width/2
    const posY = centerY - img.height/2 + sin(norm)*100
    image(img, posX, posY);

    size += speed

    img.filter(GRAY)
    if(size > height+height/2){
        speed = -speed
    }else if(size<50){
        speed = -speed
    }

}
