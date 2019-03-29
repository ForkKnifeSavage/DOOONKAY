var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 600,
    height: 800,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [
        BootScene,
        BarrelScene
    ]
};

var game = new Phaser.Game(config);