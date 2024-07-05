import Point from "./model/Point";

class Paddle {
    private position: Point;

    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
    }

    getPosition() {
        return this.position;
    }

    setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }

    moveUp(value: number) {
        this.position.y -= value;
    }

    moveDown(value: number) {
        this.position.y += value;
    }
}

export default Paddle;