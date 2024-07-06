import Point from "../model/Point";
import Drawable from "./Drawable";

class Ball extends Drawable {
    private velocity: Point;

    constructor () {
        super();

        this.velocity = {
            x: 5,
            y: 2
        }

        this.initVelocity();
    }

    public initVelocity() {
        if(Math.random() > 0.5) {
            this.inverseVelocityX()
        }

        if(Math.random() > 0.5) {
            this.inverseVelocityY();
        }
    }

    public inverseVelocityX() {
        this.velocity.x = -this.velocity.x;
    }

    public inverseVelocityY() {
        this.velocity.y = -this.velocity.y;
    }

    public update () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

export default Ball;