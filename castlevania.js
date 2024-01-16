class Castlevania {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./castlevaniasprite.png"), 0, 0, 112, 192, 17, 0.075);

        this.x = -50;
        this.y = 610;
        this.speed = 250;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 1024) this.x = -50;
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}