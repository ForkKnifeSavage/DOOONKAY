var BarrelScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BarrelScene()
    {
        Phaser.Scene.call(this, { key: 'BarrelScene' });

    },
    update: function()
    {
        if(this.cursors.left.isDown)
        {
            this.Shrek.setVelocityX(-160);
        }
        else if (this.cursors.right.isDown)
        {
            this.Shrek.setVelocityX(160);
        }
        else {
            this.Shrek.setVelocityX(0);
            //player.anims.play('turn');
        }
        if (this.cursors.up.isDown && this.Shrek.body.touching.down)
        {
            this.Shrek.setVelocityY(-490);
        }


    },

    preload: function()
    {

    },

    create: function()
    {


        this.doonkay = this.physics.add.sprite(600, 83, 'Doonkay').setScale(0.2);
        this.barrel = this.physics.add.sprite(650, 111, 'barrel').setScale(0.2);
        this.Shrek = this.physics.add.sprite(50, 300, 'Shrek').setScale(0.3);

        this.tweens.add({
            targets: this.doonkay,
            x: 350,
            duration: 4000,
            ease: 'Expo.easeInOut',
            repeat: -1,
            yoyo:true
        });
        this.cursors = this.input.keyboard.createCursorKeys();
        this.platforms = this.physics.add.staticGroup();

        this.physics.add.collider(this.Shrek, this.platforms);

        this.physics.add.collider(this.doonkay, this.platforms);

        this.physics.add.collider(this.barrel, this.platforms);

        this.platforms.create(400, 580, 'platforms').setScale(2).refreshBody();
        this.platforms.create(600, 150, 'platforms').setScale(1).refreshBody();

        this.platforms.create(0, 150, 'platforms').setScale(1).refreshBody();
        this.platforms.create(0, 270, 'platforms').setScale(3.5, 1).refreshBody();
        this.platforms.create(600, 400, 'platforms').setScale(2.5, 1).refreshBody();
        function hitDoonkay (Shrek, Doonkay )
        {
            this.physics.pause();
            Doonkay.setTint(0xff0000);
            //Shrek.anims.play('turn');

            gameOver = true;
        }
        this.physics.add.collider(this.Shrek, this.doonkay, hitDoonkay, null, this);
    }



});
