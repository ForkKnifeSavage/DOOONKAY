var BarrelScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BarrelScene()
    {
        Phaser.Scene.call(this, { key: 'BarrelScene' });

    },
    update: function()
    {
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
        }
    },

    preload: function()
    {

    },

    create: function()
    {
        this.physics.add.sprite(100, 87, 'Doonkay').setScale(0.2);
        barrel = this.physics.add.sprite(50, 111, 'barrel').setScale(0.2);
        this.physics.add.sprite(50, 500, 'Shrek').setScale(0.6);



        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 580, 'platforms').setScale(2).refreshBody();
        this.platforms.create(600, 150, 'platforms').setScale(1).refreshBody();

        this.platforms.create(0, 150, 'platforms').setScale(1).refreshBody();
        this.platforms.create(0, 270, 'platforms').setScale(3.5, 1).refreshBody();
        this.platforms.create(600, 400, 'platforms').setScale(2.5, 1).refreshBody();
    }


});
