import Draw from "../model/Draw";
import Point from "../model/Point";

class Drawable {
    position: Point;
    size: Point;

    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
        this.size = {
            x: 50,
            y: 200
        }
    }

    public getPosition() {
        return this.position;
    }

    public setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }

    public setSize(x: number, y: number) {
        this.size.x = x;
        this.size.y = y;
    }

    public getDraw(): Draw {
        const draw: Draw = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            size: {
                x: this.size.x,
                y: this.size.y
            }
        }
        return draw;
    }

    public getPositionTopLeft(): Point {
        return this.position;
    }

    public getPositionTopRight(): Point {
        const point = {
            x: this.position.x + this.size.x,
            y: this.position.y
        }
        return point;
    }

    public getPositionBottomLeft(): Point {
        const point = {
            x: this.position.x,
            y: this.position.y + this.size.y
        }
        return point;
    }

    public getPositionBottomRight(): Point {
        const point = {
            x: this.position.x + this.size.x,
            y: this.position.y + this.size.y
        }
        return point;
    }
}

export default Drawable;