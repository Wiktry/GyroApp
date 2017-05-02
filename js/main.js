/**
 * Created by Wiktor on 2017-05-02.
 */

var mainState = {
    preload: function () {
        this.load.image('sprite', 'particle.png');
    },

    create: function () {
        this.sprite = this.add.sprite(20, 40, 'sprite');
        this.sprite.body.collideWorldBounds = true;
        gyro.frequency = 60;
        gyro.startTracking(function (o) {
            this.sprite.body.velocity.x += o.gamma/20;
            this.sprite.body.velocity.y += o.beta/20;
        })
    },
    update: function () {

    },
}

var game = new Phaser.Game(320,480,Phaser.CANVAS);

game.state.add('mainState', mainState);
game.state.start('mainState');