class Cross {
    constructor(x, y, width) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = this.width * 2;
      this.weight = 20;
      this.opacity = 0;
    }
  
    draw() {
      push()
        fill(`rgba(255, 255, 255, ${this.opacity})`)

        // vertical arm
        rect(this.x, this.y, this.weight, this.height)

        // first horizontal arm
        rect(this.x - this.weight*3, this.y - this.height/4, this.width - this.width/2 - this.weight/2, this.weight)

        // scd horizontal arm
        // rect()
      pop()
    }

    updateOpacity() {

    }
  }