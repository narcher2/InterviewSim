var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 512, 48);
    game.load.image('background','assets/background.png');

}

var button;
var background;
//var step;

function create() {
    
    //step = 0;

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    button = game.add.button(44, 400, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    
    var text = "Take a seat Mr. Player.\nLet's get started.";
    var style = { font: "40px Arial", fill: "#ff0044", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);
    
    var buttonText1 = "Take a seat";
    var buttonStyle = {font: "20px Arial", fill: "#000000", align: "left" };
    
    var bt1 = game.add.text(60, 400, buttonText1, buttonStyle)

}

function up() {
    console.log('button up', arguments);
    
    //step++;
    
    /*if (step == 1)
    {
      text.setText("If you were a fruit or vegetable, what would you be, and why?");   
    }
    if (step == 2)
    {
      text.setText("Why do you have interest in this company?");   
    }
    if (step == 3)
    {
     text.setText("What on your resume would you say makes you most qualified for this job?");   
    }
    if (step == 4)
    {
      text.setText("What is your biggest weakness?");   
    }
    if (step == 5)
    {
      text.setText("Where do you see yourself in 5 years?");   
    }
    if (step == 6)
    {
      text.setText("Kirk or Picard?");   
    }
    */
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

-function update() {
-
-    game.input.onDown.addOnce(updateText, this);
-
-}
