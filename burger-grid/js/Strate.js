class Strate{
    constructor(type) {
        this.x = 0
        this.y = 0
        this.width = 0
        this.height = 0

        this.types = {
            BREAD:1,
            CHEESE:2,
            SALAD:3,
            STEAK:4,
            TOMATO:5
        }

        this.type = this.selectGarnitureType(type)

        switch(this.type){
            case this.types.BREAD:
                this.color = 'rgb(254, 224, 166)'
            break;
            case this.types.CHEESE:
                this.color = 'yellow'
            break;
            case this.types.SALAD:
                this.color = 'green'       
            break;
            case this.types.STEAK:
                this.color = 'brown'
            break;
            case this.types.TOMATO:
                this.color = 'red'
            break;
        }
    }

    draw(x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h

        push()
        fill(this.color)
        rect(this.x, this.y, this.width, this.height)
        pop()
        
    }

    selectGarnitureType(type){

        let selectedType

        switch(type){

            case bread:
                selectedType = 1 // this.types.BREAD
            break;

            case garniture:
                const typesLength = Object.keys(this.types).length
                const rdnGarniture = Math.round(random(2, typesLength))

                selectedType = rdnGarniture

            break;
        }

        return selectedType
    }

}