var BarrelScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BarrelScene()
    {
        Phaser.Scene.call(this, { key: 'BarrelScene' });

    },

    preload: function()
    {

    },

    create: function()
    {
        this.physics.add.sprite(100, 100, 'Doonkay').setScale(0.01);


        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 580, 'platforms').setScale(1).refreshBody();
        //this.platforms.create(200, 700, 'platforms').setScale(2).refreshBody();
    }


});
