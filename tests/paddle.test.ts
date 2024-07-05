import Paddle from "../src/Paddle";

describe('Paddle', () => {
    let paddle: Paddle;

    beforeEach(() => {
        paddle = new Paddle();
    })

    it('has a position', () => {
        
        expect(paddle.getPosition().x).toBeDefined();
        expect(paddle.getPosition().y).toBeDefined();
    });
})