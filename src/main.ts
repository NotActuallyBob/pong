import CanvasManager from './class/CanvasManager';
import Game from './class/Game';

import './style.css'

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const canvasManager = new CanvasManager();
const game = new Game(canvasManager);
const targetFps: number = 144;

while(true) {
    game.update();
    game.drawAll();
    await wait(1/targetFps);
}