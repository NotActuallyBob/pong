import Point from "../model/Point";
import Drawable from "./Drawable";

class Ball {
    public drawable: Drawable;

    private velocity: Point;

    private xVel = 5;
    private yVel = 2;

    constructor () {
        this.drawable = new Drawable();

        this.velocity = {
            x: this.xVel,
            y: this.yVel
        }

        this.initVelocity();
    }

    public initVelocity() {
        if(Math.random() > 0.5) {
            this.goLeft();
        } else {
            this.goRight();
        }

        if(Math.random() > 0.5) {
            this.inverseVelocityY();
        }
    }

    public goLeft() {
        this.velocity.x = -this.xVel;
    }

    public goRight() {
        this.velocity.x = this.xVel;
    }

    public inverseVelocityY() {
        this.velocity.y = -this.velocity.y;
    }

    public update () {
        this.drawable.position.x += this.velocity.x;
        this.drawable.position.y += this.velocity.y;
    }
}

export default Ball;