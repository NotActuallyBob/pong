import Drawable from "./Drawable";

class Paddle extends Drawable {

    moveUp(value: number) {
        this.position.y -= value;
    }

    moveDown(value: number) {
        this.position.y += value;
    }
}

export default Paddle;