import Drawable from "./Drawable";

class Paddle {
    public drawable: Drawable;
    private maxY;
    private minY;

    constructor(minY: number, maxY: number) {
        this.maxY = maxY;
        this.minY = minY;
        this.drawable = new Drawable();
    }

    moveUp(value: number) {
        if(this.drawable.getPositionTopLeft().y <= this.minY) {
            return;
        }
        this.drawable.position.y -= value;
    }

    moveDown(value: number) {
        if(this.drawable.getPositionBottomLeft().y >= this.maxY){
            return;
        }
        
        this.drawable.position.y += value;
    }
}

export default Paddle;