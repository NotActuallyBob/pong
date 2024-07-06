class Input {
    private keyStates: { [key: string]: boolean } = {};

    private playerLeftDownKey: string = 's';
    private playerLeftUpKey: string = 'w';

    private playerRightDownKey: string = 'ArrowDown';
    private playerRightUpKey: string = 'ArrowUp';

    constructor() {
        this.init();
    }

    private init() {
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    private onKeyDown(event: KeyboardEvent) {
        this.keyStates[event.key] = true;
    }

    private onKeyUp(event: KeyboardEvent) {
        this.keyStates[event.key] = false;
    }

    private isKeyDown(key: string): boolean {
        return this.keyStates[key] || false;
    }

    public playerLeftDown(): boolean {
        return this.isKeyDown(this.playerLeftDownKey);
    }

    public playerLeftUp(): boolean {
        return this.isKeyDown(this.playerLeftUpKey);
    }

    public playerRightDown(): boolean {
        return this.isKeyDown(this.playerRightDownKey);
    }

    public playerRightUp(): boolean {
        return this.isKeyDown(this.playerRightUpKey);
    }

    public pausedPressed(): boolean {
        return this.isKeyDown('p');
    }
}

export default Input;