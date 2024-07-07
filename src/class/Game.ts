import Draw from "../model/Draw";
import Ball from "./Ball";
import Input from "./Input";
import Paddle from "./Paddle";

class Game {
    public scoreLeft = 0;
    public scoreRight = 0;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private scoreLeftHTML: HTMLSpanElement;
    private scoreRightHTML: HTMLSpanElement;

    private input: Input;

    private ball: Ball;
    private ballSize: number = 10;

    private paddleLeft: Paddle;
    private paddleRight: Paddle;
    private paddleSpeed: number = 10;
    private paddleWidth: number = 30;
    private paddleHeight: number = 200;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.scoreLeftHTML = document.getElementById('scoreLeft') as HTMLSpanElement;
        this.scoreRightHTML = document.getElementById('scoreRight') as HTMLSpanElement;

        this.context = this.canvas.getContext("2d")!;

        this.input = new Input();

        this.ball = new Ball();
        this.paddleLeft = new Paddle();
        this.paddleRight = new Paddle();

        this.initCanvas();
        this.initBall();
        this.initPaddles();
    }

    private initCanvas() {
        this.canvas.width = 1200;
        this.canvas.height = 600;
        this.canvas.style.border = "1px solid black";
    }

    private initBall() {
        this.ball.drawable.setPosition(this.canvas.width / 2, this.canvas.height / 2);
        this.ball.drawable.setSize(this.ballSize, this.ballSize);
        this.ball.initVelocity();
    }

    private initPaddles() {
        this.paddleLeft.drawable.setPosition(0, 0);
        this.paddleLeft.drawable.setSize(this.paddleWidth, this.paddleHeight);

        this.paddleRight.drawable.setPosition(this.canvas.width - this.paddleWidth, 0);
        this.paddleRight.drawable.setSize(this.paddleWidth, this.paddleHeight);
    }

    private restart() {
        this.initBall();
    }

    private draw(draw: Draw) {
        this.context.beginPath();
        this.context.rect(draw.position.x, draw.position.y, draw.size.x, draw.size.y);
        this.context.fill();
    }

    public drawAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.draw(this.paddleLeft.drawable.getDraw());
        this.draw(this.paddleRight.drawable.getDraw());
        this.draw(this.ball.drawable.getDraw());
    }

    public update() {
        this.checkCollision();
        this.updateMovement();
    }

    private checkCollision() {
        if(this.ball.drawable.getPositionTopLeft().y < 0) {
            this.ball.inverseVelocityY();
        }

        if(this.ball.drawable.getPositionBottomLeft().y > this.canvas.height) {
            this.ball.inverseVelocityY();
        }

        if(this.paddleLeft.drawable.getPositionBottomRight().x > this.ball.drawable.getPositionBottomLeft().x &&
        this.paddleLeft.drawable.getPositionTopRight().y <= this.ball.drawable.getPositionBottomLeft().y &&
        this.paddleLeft.drawable.getPositionBottomRight().y >= this.ball.drawable.getPositionTopLeft().y) {
            this.ball.goRight();
        }

        if(this.paddleRight.drawable.getPositionBottomLeft().x <= this.ball.drawable.getPositionBottomRight().x &&
        this.paddleRight.drawable.getPositionTopRight().y <= this.ball.drawable.getPositionBottomLeft().y &&
        this.paddleRight.drawable.getPositionBottomRight().y >= this.ball.drawable.getPositionTopLeft().y) {
            this.ball.goLeft();
        }

        if(this.ball.drawable.getPositionBottomRight().x < 0) {
            this.scoreLeft++;
            this.scoreLeftHTML.textContent = this.scoreLeft.toString();
            this.restart();
        }

        if(this.ball.drawable.getPositionBottomLeft().x > this.canvas.width) {
            this.scoreRight++;
            this.scoreRightHTML.textContent = this.scoreRight.toString();
            this.restart();
        }
    }

    private updateMovement() {if(this.input.playerLeftDown()) {
            this.paddleLeft.moveDown(this.paddleSpeed);
        } else if(this.input.playerLeftUp()) {
            this.paddleLeft.moveUp(this.paddleSpeed);
        }

        if(this.input.playerRightDown()) {
            this.paddleRight.moveDown(this.paddleSpeed);
        } else if(this.input.playerRightUp()) {
            this.paddleRight.moveUp(this.paddleSpeed);
        }

        this.ball.update();   
    }
}

export default Game;