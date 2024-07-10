import DrawRect from "../model/draw/DrawRect";
import DrawText from "../model/draw/DrawText";
import Point from "../model/Point";

class CanvasManager {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private canvasSize: Point = {
        x: 1200,
        y: 800
    };

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d")!;
        this.init();
    }

    private init() {
        this.canvas.width = this.canvasSize.x;
        this.canvas.height = this.canvasSize.y;
        this.canvas.style.border = "1px solid black";
    }

    public clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public drawRect(drawRect: DrawRect) {
        this.ctx.beginPath();
        this.ctx.rect(drawRect.position.x, drawRect.position.y, drawRect.size.x, drawRect.size.y);
        this.ctx.fill();
    }

    public drawText(drawText: DrawText) {
        this.ctx.font = "100px Arial";
        this.ctx.fillText(drawText.text, drawText.position.x, drawText.position.y);
    }

    public getCanvasSize() {
        return this.canvasSize;
    }
}

export default CanvasManager;