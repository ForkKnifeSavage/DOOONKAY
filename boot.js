var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function BootScene()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },

    preload: function()
    {
        this.load.image('Doonkay', 'assets/KingKRool.png');
        this.load.image('Shrek', 'assets/smelly shrek.jpg');


    },

    create: function()
    {

    }


});