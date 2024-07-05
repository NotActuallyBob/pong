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
}

export default Paddle;