const sStates = {
    FALLING:1,
    DROPED:2
}

const sTypes = {
    TOP_BREAD:1,
    BOTTOM_BREAD: 2,
    CHEESE:3,
    SALAD:4,
    STEAK:5,
    TOMATO:6
}

class Strate {
    constructor(i, type) {
        this.x = 0
        this.y = 0
        this.width = 0
        this.height = 0

        this.xOffset = random(-30, 30)
        this.corners = {
            topLeft : 5,
            topRight : 5,
            bottomRight : 5,
            bottomLeft: 5
        }

        this.currState = sStates.FALLING;
        this.type = this.selectStrateType(type, i)

        switch(this.type){
            case sTypes.TOP_BREAD:

                this.color = 'rgb(232, 198, 139)'

                this.xOffset = 0
                this.corners.topLeft = roundCornerValue
                this.corners.topRight = roundCornerValue

            break;

            case sTypes.BOTTOM_BREAD:

                this.color = 'rgb(232, 198, 139)'

                this.xOffset = 0
                this.corners.bottomLeft = roundCornerValue
                this.corners.bottomRight = roundCornerValue

            break;

            case sTypes.CHEESE:
                this.color = 'rgb(255, 231, 113)'
            break;

            case sTypes.SALAD:
                this.color = 'rgb(135, 223, 117)'       
            break;

            case sTypes.STEAK:
                this.color = 'rgb(134, 68, 45)'
            break;

            case sTypes.TOMATO:
                this.color = 'rgb(233, 47, 59)'
            break;
        }

        this.easingPosY = new Easing({
            duration: 500,
            from: -height/nStrates,
            easing: EASINGS.easeInCubic
        })

    }

    draw(x, y, w, h) {

        this.x = x + this.xOffset
        this.y = y
        this.width = w
        this.height = h

        push()
        stroke(0)
        fill(this.color)
        rect(this.x, this.y, this.width, this.height, this.corners.topLeft, this.corners.topRight, this.corners.bottomRight, this.corners.bottomLeft)
        pop()
        
    }

    selectStrateType(type, index) {

        let selectedType

        switch(type){

            case bread:
                const selectedBread = index == nStrates-1 ? sTypes.TOP_BREAD : sTypes.BOTTOM_BREAD
                selectedType = selectedBread // this.types.BREAD
            break;

            case garniture:
                const typesLength = Object.keys(sTypes).length
                const rdnGarniture = Math.round(random(3, typesLength))

                selectedType = rdnGarniture

            break;
        }

        return selectedType
    }

    

}