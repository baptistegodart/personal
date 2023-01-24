class Picture {
    constructor(x, y, width, height, src, i) {
      this.x = random(0, innerWidth - width/2)
      this.y = random(0, innerHeight)
      this.width = map(i, 0, 20, 500, 80)
      this.height = height
      this.ogOpacity = map(i, 0, 20, 10, 255) // 0 - 255
      this.opacity =  this.ogOpacity
      this.speed = map(this.opacity, 0, 255, 0.1, 2)
      this.src = src

      this.preload()
    }

    preload() {
      this.img = loadImage(this.src)

      this.initImg()
    }

    initImg() {
      this.img.loadPixels()
    }
  
    draw() {
      tint(255, this.opacity)
      // image(this.img, this.x, this.y, this.width, this.height)

      image(this.img, this.x, this.y, this.width, this.height, 0, 0, this.img.width, this.img.height, CONTAIN)
    }

    detectIfMouseOver() {
      if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
        if(this.opacity < 255)
          this.opacity += 10
      }else{
        if(this.opacity > this.ogOpacity){
          this.opacity -= 10
        }
      }
    }

    updatePosition() {
      if(this.y < -this.height){
        this.y = height + this.width/2
      }else{
        this.y -= this.speed
      }

      // if(this.x < -this.width){
      //   this.x = width + this.width/2
      // }else{
      //   this.x -= this.speed/2
      // }
    }


  }