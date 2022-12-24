const sStates = {
    FALLING:1,
    DROPED:2,
    STOP:3
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
        this.width = 0
        this.height = this.setStrateHeight(i)

        this.x = 0
        this.y = this.setPosY()

        this.xOffset = random(-30, 30)
        // this.xOffset = 0
        this.corners = {
            topLeft : 5,
            topRight : 5,
            bottomRight : 5,
            bottomLeft: 5
            // topLeft : 0,
            // topRight : 0,
            // bottomRight : 0,
            // bottomLeft: 0
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
            from: -this.height,
            to: this.y,
            easing: EASINGS.easeInQuad
        })

        this.easingWidth = new Easing({
            duration: 100,
            from: width/widthRatio,
            to: width/widthRatio + 20,
            easing: EASINGS.easeOutCubic
        })

        this.easingHeight = new Easing({
            duration: 50,
            from: this.height + 5,
            to: this.height,
            easing: EASINGS.easeOutCubic
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

    setStrateHeight(index){

            let strateHeight
    
            if(index == nStrates-1){
                const totalStrateHeights = height - strates[index-1].y
                strateHeight = height - totalStrateHeights
            }else{
                strateHeight = height/nStrates + random(-40, 25)
            }
    
            return strateHeight
            
    }

    setPosY(){

        let posY = height

            for(let i = 0; i<strates.length; i++){
                posY = posY - strates[i].height
            }
            posY = posY - this.height

        return posY
        
    }

}