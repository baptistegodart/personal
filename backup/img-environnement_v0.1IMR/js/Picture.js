class Picture {
    constructor(x, y, width, height, src, i) {
      this.x = random(0, innerWidth - width/2)
      this.y = random(0, innerHeight)
      this.width = width
      this.height = height
      this.opacity = map(i, 0, 20, 0, 255) // 0 - 255
      this.speed = map(this.opacity, 0, 255, 0.1, 2)
      this.src = src

      this.preload()
    }

    preload() {
      this.img = loadImage(this.src);

      this.initImg()
    }

    initImg() {
      this.img.loadPixels();
    }
  
    draw() {
      tint(255, this.opacity);
      // image(this.img, this.x, this.y, this.width, this.height)

      image(this.img, this.x, this.y, this.width, this.height, 0, 0, this.img.width, this.img.height, CONTAIN);
    }

    updateOpacity() {

    }

    updatePosition() {
      if(this.y < -this.height){
        this.y = height + this.width/2;
      }else{
        this.y -= this.speed
      }
    }


  }