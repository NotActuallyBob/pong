/**
 * @jest-environment jsdom
 */

import Paddle from "../src/class/Paddle";

describe('Paddle', () => {
    let paddle: Paddle;

    beforeEach(() => {
        paddle = new Paddle();
    })

    it('has a position', () => {
        expect(paddle.getPosition().x).toBeDefined();
        expect(paddle.getPosition().y).toBeDefined();
    });

    it('position can be set', () => {
        paddle.setPosition(0, 0)
        expect(paddle.getPosition().x).toBe(0);
        expect(paddle.getPosition().y).toBe(0);

        paddle.setPosition(100, 20)
        expect(paddle.getPosition().x).toBe(100);
        expect(paddle.getPosition().y).toBe(20);

        paddle.setPosition(-25, 1)
        expect(paddle.getPosition().x).toBe(-25);
        expect(paddle.getPosition().y).toBe(1);
    })

    it('can be moved vertically', () => {
        paddle.setPosition(0, 0);
        paddle.moveUp(5);

        expect(paddle.getPosition().x).toBe(0);
        expect(paddle.getPosition().y).toBe(-5);
        
        paddle.moveDown(20);
        expect(paddle.getPosition().x).toBe(0);
        expect(paddle.getPosition().y).toBe(15);
    })
})