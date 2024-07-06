import Drawable from "./Drawable";

class Paddle {
    public drawable: Drawable;

    constructor() {
        this.drawable = new Drawable();
    }

    moveUp(value: number) {
        this.drawable.position.y -= value;
    }

    moveDown(value: number) {
        this.drawable.position.y += value;
    }
}

export default Paddle;