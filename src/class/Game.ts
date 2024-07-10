import Ball from "./Ball";
import CanvasManager from "./CanvasManager";
import Input from "./Input";
import Paddle from "./Paddle";

class Game {
    public scoreLeft = 0;
    public scoreRight = 0;
    private canvasManager: CanvasManager;

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

    constructor(canvasManager: CanvasManager) {
        this.canvasManager = canvasManager;
        this.scoreLeftHTML = document.getElementById('scoreLeft') as HTMLSpanElement;
        this.scoreRightHTML = document.getElementById('scoreRight') as HTMLSpanElement;

        this.input = new Input();

        this.ball = new Ball();
        this.paddleLeft = new Paddle(0, this.canvasManager.getCanvasSize().y);
        this.paddleRight = new Paddle(0, this.canvasManager.getCanvasSize().y);

        this.initBall();
        this.initPaddles();
    }

    private initBall() {
        this.ball.drawable.setPosition(this.canvasManager.getCanvasSize().x / 2, this.canvasManager.getCanvasSize().y / 2);
        this.ball.drawable.setSize(this.ballSize, this.ballSize);
        this.ball.initVelocity();
    }

    private initPaddles() {
        this.paddleLeft.drawable.setPosition(0, 0);
        this.paddleLeft.drawable.setSize(this.paddleWidth, this.paddleHeight);

        this.paddleRight.drawable.setPosition(this.canvasManager.getCanvasSize().x - this.paddleWidth, 0);
        this.paddleRight.drawable.setSize(this.paddleWidth, this.paddleHeight);
    }

    private restart() {
        this.initBall();
    }

    public drawAll() {
        this.canvasManager.clear();

        this.canvasManager.drawRect(this.paddleLeft.drawable.getDraw());
        this.canvasManager.drawRect(this.paddleRight.drawable.getDraw());
        this.canvasManager.drawRect(this.ball.drawable.getDraw());
    }

    public update() {
        this.checkCollision();
        this.updateMovement();
    }

    private checkCollision() {
        if(this.ball.drawable.getPositionTopLeft().y < 0) {
            this.ball.inverseVelocityY();
        }

        if(this.ball.drawable.getPositionBottomLeft().y > this.canvasManager.getCanvasSize().y) {
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

        if(this.ball.drawable.getPositionBottomLeft().x > this.canvasManager.getCanvasSize().x) {
            this.scoreRight++;
            this.scoreRightHTML.textContent = this.scoreRight.toString();
            this.restart();
        }
    }

    private updateMovement() {if(this.input.playerLeftDown()) {
        console.log('Move Down');
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