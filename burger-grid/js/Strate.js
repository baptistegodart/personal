class Strate{
    constructor(i, type) {
        this.x = 0
        this.y = 0
        this.width = 0
        this.height = 0

        this.corners = {
            topLeft : 5,
            topRight : 5,
            bottomRight : 5,
            bottomLeft: 5
        }

        this.types = {
            TOP_BREAD:1,
            BOTTOM_BREAD: 2,
            CHEESE:3,
            SALAD:4,
            STEAK:5,
            TOMATO:6
        }

        this.type = this.selectStrateType(type, i)

        switch(this.type){
            case this.types.TOP_BREAD:
                this.color = 'rgb(232, 198, 139)'
                this.corners.topLeft = roundCornerValue
                this.corners.topRight = roundCornerValue
            break;
            case this.types.BOTTOM_BREAD:
                this.color = 'rgb(232, 198, 139)'
                this.corners.bottomLeft = roundCornerValue
                this.corners.bottomRight = roundCornerValue
            break;
            case this.types.CHEESE:
                this.color = 'rgb(255, 231, 113)'
            break;
            case this.types.SALAD:
                this.color = 'rgb(135, 223, 117)'       
            break;
            case this.types.STEAK:
                this.color = 'rgb(134, 68, 45)'
            break;
            case this.types.TOMATO:
                this.color = 'rgb(233, 47, 59)'
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
        rect(this.x, this.y, this.width, this.height, this.corners.topLeft, this.corners.topRight, this.corners.bottomRight, this.corners.bottomLeft)
        pop()
        
    }

    selectStrateType(type, index){

        let selectedType

        switch(type){

            case bread:
                const selectedBread = index == 0 ? this.types.TOP_BREAD : this.types.BOTTOM_BREAD
                selectedType = selectedBread // this.types.BREAD
            break;

            case garniture:
                const typesLength = Object.keys(this.types).length
                const rdnGarniture = Math.round(random(3, typesLength))

                selectedType = rdnGarniture

            break;
        }

        return selectedType
    }

}