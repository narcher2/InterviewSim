var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 512, 48);
    game.load.image('background','assets/background.png');
    game.load.audio('chopin', 'assets/Prelude15.mp3');
    game.load.spritesheet('boss', 'assets/sprites/bossface.png', 96, 96);


}

var button;
var background;
var step;
var music;

function create() {
    
    music = game.add.audio('chopin');

    music.play();
    
    step = 1;
    anger = 0;
    happiness = 0;
    sadness = 0;

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');
    
    boss = game.add.sprite(400, 160, 'boss');
    boss.anchor.set(0.5);
    boss.animations.add('neutral', [0], 20, false);
    boss.animations.add('happy', [1], 20, false);
    boss.animations.add('veryhappy', [2], 20, false);
    boss.animations.add('eyesclosed', [3], 20, false);
    boss.animations.add('angry', [4], 20, false);
    boss.animations.add('sad', [5], 20, false);
    boss.animations.add('verysad', [6], 20, false);
    boss.animations.add('veryangry', [7], 20, false);
    boss.play('neutral');
    

    button = game.add.button(32, 400, 'button', actionOnClick1, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    
    button2 = game.add.button(32, 448, 'button', actionOnClick2, this, 2, 1, 0);

    button2.onInputOver.add(over, this);
    button2.onInputOut.add(out, this);
    button2.onInputUp.add(up, this);
    
    button3 = game.add.button(32, 496, 'button', actionOnClick3, this, 2, 1, 0);

    button3.onInputOver.add(over, this);
    button3.onInputOut.add(out, this);
    button3.onInputUp.add(up, this);
    
    button4 = game.add.button(32, 540, 'button', actionOnClick4, this, 2, 1, 0);

    button4.onInputOver.add(over, this);
    button4.onInputOut.add(out, this);
    button4.onInputUp.add(up, this);
    
        text = game.add.text(game.world.centerX, game.world.centerY,"Take a seat Mr. Player.\nLet's get started.", {
        font: "40px Arial",
        fill: "#ff0044",
        align: "center"
    });

    text.anchor.setTo(0.5, 0.5);
    
    /*var text = "Take a seat Mr. Player.\nLet's get started.";
    var style = { font: "40px Arial", fill: "#ff0044", align: "center" };
    var t = game.add.text(game.world.centerX-300, 0, text, style);
    */
    
    buttonText1 = game.add.text(60, 400,"Take a seat", {
        font: "15px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText2 = game.add.text(60, 448,"Take a seat", {
        font: "15px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText3 = game.add.text(60, 496,"Take a seat", {
        font: "15px Arial",
        fill: "#000000",
        align: "left"
    });
    
    buttonText4 = game.add.text(60, 544,"Take a seat", {
        font: "15px Arial",
        fill: "#000000",
        align: "left"
    });
    
    //var buttonText1 = "Take a seat";
    //var buttonStyle = {font: "20px Arial", fill: "#000000", align: "left" };
    
    //var bt1 = game.add.text(60, 400, buttonText1, buttonStyle)
    


}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function update() {

    game.input.onDown.addOnce(updateText, this);

}

function updateText() {

    step++;
    text.setText("- You have clicked -\n" + step + " times !");

}

function actionOnClick1 () {

    if (step === 1)
    {
      text.setText("If you were a fruit or vegetable,\nwhat would you be, and why?");   
      buttonText1.setText("A pineapple.");
      buttonText2.setText("A cactus, because I'm tough on the outside,\nbut resourceful on the inside");
      buttonText3.setText("Celery, because I burn more energy than I create.");
      buttonText4.setText("A cat, meow.");
    }
    if (step === 2)
    {
      boss.play('neutral');
      text.setText("Why do you have interest in this company?");   
      buttonText1.setText("Ever since I was a little boy I've dreamed of working at this company.");
      buttonText2.setText("My mom told me to apply because she wants me out of the house.");
      buttonText3.setText("I heard you don't drug test.");
      buttonText4.setText("This is the one company I can work for and\n honestly feel like I'm making the world better.");
    }
    if (step === 3)
    {
    boss.play('eyesclosed');
      happiness++;
      text.setText("What on your resume would you say makes\nyou most qualified for this job?");  
      buttonText1.setText("My IQ of 160 makes me very intelligent and overqualified for this job.");
      buttonText2.setText("My leadership skills in college can \neasily transition towards synergy in the workplace.");
      buttonText3.setText("My synergetic attitude makes me right for this job.");
      buttonText4.setText("My entire resume is just the word 'synergy' repeated over and over again.");
    }
    if (step === 4)
    {
    boss.play('angry');
      anger++;
      text.setText("What is your biggest weakness?");   
        buttonText1.setText("My inability to work with others.");
      buttonText2.setText("I work too hard for my own good.");
      buttonText3.setText("My height.");
      buttonText4.setText("I'm really lazy and often don't get\n things turned in on time.")
    }
    if (step === 5)
    {
    boss.play('veryangry');
      anger++;
      anger++;
      text.setText("Where do you see yourself in 5 years?");
    buttonText1.setText("Sitting in your chair, asking\nsome young go-getter the same question.");
      buttonText2.setText("At the head of this company.");
      buttonText3.setText("I'll probably move on to bigger and better things,\n at a different company.");
      buttonText4.setText("I'll probably have a kid and\nbecome a stay at home dad.");
    }
    if (step === 6)
    {
    boss.play('eyesclosed');
      happiness++;
      text.setText("Kirk or Picard?");   
    buttonText1.setText("Kirk.");
      buttonText2.setText("Picard.");
      buttonText3.setText("Reynolds.");
      buttonText4.setText("What?");
    }
    if (step === 7)
    {
    boss.play('veryhappy');
      happiness++;
      text.setText("Do you plan on havng kids any time soon?");   
    buttonText1.setText("I do, but the job will take priority over them.");
      buttonText2.setText("I didn't major in elextrical engineering to have kids.");
      buttonText3.setText("I'm infertile. <shed tear>");
      buttonText4.setText("I don't feel comfortable answering that questions");
    }
        if (step === 8)
    {
    boss.play('happy');
      happiness++;
      text.setText("Could you describe an experience\nyou've had with adversity?");   
    buttonText1.setText("Hmm, I honestly can't think of one.\nThings always tend to work out well when I'm involved.");
      buttonText2.setText("I got in a fight with my former manager,\nso I ended up stealing his mailbox.");
      buttonText3.setText("One time I got really bad grade on a test back in college,\nin response I dropped the course.");
      buttonText4.setText("I once accidentally ate my roommate's birthday cake.\nThey were really upset. We ended up talking it out and now we're dating");
    }
        if (step === 9)
    {
        boss.play('angry');
      anger++;
      text.setText("Favorite color?");   
    buttonText1.setText("I'm colorblind <shed tear>");
      buttonText2.setText("Orange.");
      buttonText3.setText("Pink.");
      buttonText4.setText("Lavender");
    }
    if (step === 10)
    {
    boss.play('verysad');
      sadness++;
      sadness++;
      anger--;
      happiness++;
      text.setText("If you had a time machine that you could\nonly use twice, what would you do?");   
    buttonText1.setText("Go back in time and kill Hitler.");
      buttonText2.setText("Destroy it, nothing good comes from time travel.");
      buttonText3.setText("Witness the beginning of the universe.");
      buttonText4.setText("Travel back in time to the founding of this company,\nand invest all my money in its stock.");
    }
    if (step === 11)
    {
    boss.play('neutral');
      anger--;
      text.setText("I see you eying the picture of my family.\nWhat do you think about my wife?");   
      buttonText1.setText("She's beautiful.");
      buttonText2.setText("I don't know, I haven't met her.\nI wouldn't judge her on appearance alone.");
      buttonText3.setText("You're lucky to have her.");
      buttonText4.setText("She's hot.");
    }
    if (step === 12)
    {
        boss.play('veryhappy');
      happiness++;
      happiness++;
      sadness--;
      text.setText("What did you on your 21st birthday?");   
      buttonText1.setText("I'm not 21 yet.");
      buttonText2.setText("I don't... remember.");
      buttonText3.setText("Sat down and had a nice bottle of wine with my girlfriend and her parents.");
      buttonText4.setText("Began investing in stock- we went up 10% that day.\nI can remember it like it was yesterday.");
    }
    if (step === 13)
    {
        boss.play('angry');
      sadness++;
      anger++;
      text.setText("How do you organize your LEGO's?");   
      buttonText1.setText("By color.");
      buttonText2.setText("By shape and size.");
      buttonText3.setText("By the set that they belong to");
      buttonText4.setText("In a big pile on the floor.");
    }
    if (step === 14)
    {
    boss.play('neutral');
      text.setText("If I tried to kill you, would you fight back?");   
      buttonText1.setText("I feel my death would benefit the company,\nif you felt it just to attack me.");
      buttonText2.setText("I've had my right hand on the trigger this whole time..");
      buttonText3.setText("Only if we fight like men- with our bare hands..");
      buttonText4.setText("I'd run away. The way to get the best of a fight is to avoid it.");
    }
    if (step === 15)
    {
    boss.play('veryhappy');
      happiness++;
      happiness++;
      text.setText("What's something special about you\nthat the other candidates may not have?");   
      buttonText1.setText("I studied Russian at Oxford.");
      buttonText2.setText("I once killed a man using only a ballpoint pen.");
      buttonText3.setText("I once outran a swarm of killer bees by navigating a hedge maze of my own design.");
      buttonText4.setText("I was given the chance to live forever,\nbut turned it down to give Jazz a few extra years.");
    }
    if (step === 16)
    {
    boss.play('happy');
      happiness++;
      text.setText("Interesting, tell me more.");   
      buttonText1.setText("It was by far the most invigorating time of my life.");
      buttonText2.setText("The only thing I regret is that it\ntook up a significant amount of my precious time.");
      buttonText3.setText("It was necessary, not just for me as a person,\nbut for the future of this company.");
      buttonText4.setText("If I could go back in time, I'd doit again in a heartbeat.");
    }
    if (step === 17)
    {
    boss.play('neutral');
      text.setText("You must fight a duo of either: a black bear\n, a hyena, a honey badger,\nor a horse.\nYou get one as your ally.");   
      buttonText1.setText("Mount the bear, fight the horse mounted hyena- aim low.");
      buttonText2.setText("Tag team the honey badger, let him do all the work against the horse bear.");
      buttonText3.setText("Do I get a sword? If so, mount me on a horse and I can take all 3.");
      buttonText4.setText("Hyena as my ally, vs. a black bear and a horse.");
    }
    if (step === 18)
    {
        boss.play('veryhappy');
      happiness++;
      text.setText("What was the name of the man you talked\nto in the elevator on the way up here?");   
      buttonText1.setText("Mr. Miyamoto?");
      buttonText2.setText("It was a she- her name was Summer. We're having lunch after this.");
      buttonText3.setText("Arthur Slugworth. I told him nothing.");
      buttonText4.setText("Oh my God, it was you.");
    }
    if (step === 19)
    {
        boss.play('neutral');
      text.setText("You are sentenced to execution,\nand must choose either a lava pit\nor quicksand to jump into.");   
      buttonText1.setText("Quicksand, legs first. So I'll have time to make my peace.");
      buttonText2.setText("Lava, head first. Quick and painless.");
      buttonText3.setText("Quicksand, head first, get it over with.");
      buttonText4.setText("Lava, feet first.");
    }
    if (step === 20)
    {
        boss.play('sad');
      sadness++;
      text.setText("Favorite non-soda beverage?");   
      buttonText1.setText("Coffee.");
      buttonText2.setText("Milk.");
      buttonText3.setText("Water.");
      buttonText4.setText("Tea.");
    }
    if (step === 21)
    {
        boss.play('happy');
      happiness++;
      text.setText("Alrighty, I think I've heard enough.\n We'll call you." + step);   
    buttonText1.setText("Thank you, I hope you reached your expectations.");
      buttonText2.setText("I'll be anxiously awating your call.");
      buttonText3.setText("You know, even if I didn't get the job\n you can still call me and let me know, like it's no big deal.");
      buttonText4.setText("*Shake hand firmly* Thank you sir, I look forward to working with you.");
    }
    
    step++;
}

function actionOnClick2 () {

    if (step === 1)
    {
      text.setText("If you were a fruit or vegetable,\nwhat would you be, and why?");   
      buttonText1.setText("A pineapple.");
      buttonText2.setText("A cactus, because I'm tough on the outside,\nbut resourceful on the inside");
      buttonText3.setText("Celery, because I burn more energy than I create.");
      buttonText4.setText("A cat, meow.");
    }
    if (step === 2)
    {
      boss.play('happy');
      happiness++;
      text.setText("Why do you have interest in this company?");   
    buttonText1.setText("Ever since I was a little boy I've dreamed of working at this company.");
      buttonText2.setText("My mom told me to apply because she wants me out of the house.");
      buttonText3.setText("I heard you don't drug test.");
      buttonText4.setText("This is the one company I can work for and\n honestly feel like I'm making the world better.");
    }
    if (step === 3)
    {
    boss.play('eyesclosed');
      happiness++;
      text.setText("What on your resume would you say makes\nyou most qualified for this job?");  
      buttonText1.setText("My IQ of 160 makes me very intelligent and overqualified for this job.");
      buttonText2.setText("My leadership skills in college can \neasily transition towards synergy in the workplace.");
      buttonText3.setText("My synergetic attitude makes me right for this job.");
      buttonText4.setText("My entire resume is just the word 'synergy' repeated over and over again.");
    }
    if (step === 4)
    {
      boss.play('happy');
      happiness++;
      text.setText("What is your biggest weakness?");   
        buttonText1.setText("My inability to work with others.");
      buttonText2.setText("I work too hard for my own good.");
      buttonText3.setText("My height.");
      buttonText4.setText("I'm really lazy and often don't get\n things turned in on time.")
    }
    if (step === 5)
    {
      boss.play('happy');
      happiness++;
      text.setText("Where do you see yourself in 5 years?");
    buttonText1.setText("Sitting in your chair, asking\nsome young go-getter the same question.");
      buttonText2.setText("At the head of this company.");
      buttonText3.setText("I'll probably move on to bigger and better things,\n at a different company.");
      buttonText4.setText("I'll probably have a kid and\nbecome a stay at home dad.");
    }
    if (step === 6)
    {
      boss.play('veryhappy');
      happiness++;
      happiness++;
      text.setText("Kirk or Picard?");   
    buttonText1.setText("Kirk.");
      buttonText2.setText("Picard.");
      buttonText3.setText("Reynolds.");
      buttonText4.setText("What?");
    }
    if (step === 7)
    {
    boss.play('angry');
      anger++;
      text.setText("Do you plan on havng kids any time soon?");   
    buttonText1.setText("I do, but the job will take priority over them.");
      buttonText2.setText("I didn't major in electrical engineering to have kids.");
      buttonText3.setText("I'm infertile. <shed tear>");
      buttonText4.setText("I don't feel comfortable answering that questions");
    }
        if (step === 8)
    {
      boss.play('eyesclosed');
      happiness++;
      text.setText("Could you describe an experience\nyou've had with adversity?");   
    buttonText1.setText("Hmm, I honestly can't think of one.\nThings always tend to work out well when I'm involved.");
      buttonText2.setText("I got in a fight with my former manager,\nso I ended up stealing his mailbox.");
      buttonText3.setText("One time I got really bad grade on a test back in college,\nin response I dropped the course.");
      buttonText4.setText("I once accidentally ate my roommate's birthday cake.\nThey were really upset. We ended up talking it out and now we're dating");
    }
        if (step === 9)
    {
         boss.play('veryangry');
      anger++;
      anger++;
      sadness++;
      text.setText("Favorite color?");   
    buttonText1.setText("I'm colorblind <shed tear>");
      buttonText2.setText("Orange.");
      buttonText3.setText("Pink.");
      buttonText4.setText("Lavender");
    }
    if (step === 10)
    {
      boss.play('neutral');
      happiness++;
      text.setText("If you had a time machine that you could\nonly use twice, what would you do?");   
      buttonText1.setText("Go back in time and kill Hitler.");
      buttonText2.setText("Destroy it, nothing good comes from time travel.");
      buttonText3.setText("Witness the beginning of the universe.");
      buttonText4.setText("Travel back in time to the founding of this company,\nand invest all my money in its stock.");
    }
    if (step === 11)
    {
      boss.play('sad');
      sadness++;
      text.setText("I see you eying the picture of my family.\nWhat do you think about my wife?");   
      buttonText1.setText("She's beautiful.");
      buttonText2.setText("I don't know, I haven't met her.\nI wouldn't judge her on appearance alone.");
      buttonText3.setText("You're lucky to have her.");
      buttonText4.setText("She's hot.");
    }
    if (step === 12)
    {
      boss.play('veryhappy');
      happiness++;
      anger--;
      text.setText("What did you on your 21st birthday?");   
      buttonText1.setText("I'm not 21 yet.");
      buttonText2.setText("I don't... remember.");
      buttonText3.setText("Sat down and had a nice bottle of wine with my girlfriend and her parents.");
      buttonText4.setText("Began investing in stock- we went up 10% that day.\nI can remember it like it was yesterday.");
    }
    if (step === 13)
    {
    boss.play('veryangry');
      anger++;
        anger++;
        happiness--;
      text.setText("How do you organize your LEGO's?");   
      buttonText1.setText("By color.");
      buttonText2.setText("By shape and size.");
      buttonText3.setText("By the set that they belong to");
      buttonText4.setText("In a big pile on the floor.");
    }
    if (step === 14)
    {
    boss.play('neutral');
      text.setText("If I tried to kill you, would you fight back?");   
      buttonText1.setText("I feel my death would benefit the company,\nif you felt it just to attack me.");
      buttonText2.setText("I've had my right hand on the trigger this whole time..");
      buttonText3.setText("Only if we fight like men- with our bare hands..");
      buttonText4.setText("I'd run away. The way to get the best of a fight is to avoid it.");
    }
    if (step === 15)
    {
      boss.play('verysad');
      happiness++;
      sadness++;
      text.setText("What's something special about you\nthat the other candidates may not have?");   
      buttonText1.setText("I studied Russian at Oxford.");
      buttonText2.setText("I once killed a man using only a ballpoint pen.");
      buttonText3.setText("I once outran a swarm of killer bees by navigating a hedge maze of my own design.");
      buttonText4.setText("I was given the chance to live forever,\nbut turned it down to give Jazz a few extra years.");
    }
    if (step === 16)
    {
      boss.play('angry');
      happiness++;
      anger++;
      text.setText("Interesting, tell me more.");   
      buttonText1.setText("It was by far the most invigorating time of my life.");
      buttonText2.setText("The only thing I regret is that it\ntook up a significant amount of my precious time.");
      buttonText3.setText("It was necessary, not just for me as a person,\nbut for the future of this company.");
      buttonText4.setText("If I could go back in time, I'd doit again in a heartbeat.");
    }
    if (step === 17)
    {
    boss.play('sad');
      sadness++;
      text.setText("You must fight a duo of either: a black bear\n, a hyena, a honey badger,\nor a horse.\nYou get one as your ally.");
      buttonText1.setText("Mount the bear, fight the horse mounted hyena- aim low.");
      buttonText2.setText("Tag team the honey badger, let him do all the work against the horse bear.");
      buttonText3.setText("Do I get a sword? If so, mount me on a horse and I can take all 3.");
      buttonText4.setText("Hyena as my ally, vs. a black bear and a horse.");
    }
    if (step === 18)
    {
      boss.play('eyesclosed');
      happiness++;
      text.setText("What was the name of the man you talked\nto in the elevator on the way up here?");   
      buttonText1.setText("Mr. Miyamoto?");
      buttonText2.setText("It was a she- her name was Summer. We're having lunch after this.");
      buttonText3.setText("Arthur Slugworth. I told him nothing.");
      buttonText4.setText("Oh my God, it was you.");
    }
    if (step === 19)
    {
      boss.play('happy');
      happiness++;
      text.setText("You are sentenced to execution, and must\n choose either a lava pit\nor quicksand to jump into.");   
      buttonText1.setText("Quicksand, legs first. So I'll have time to make my peace.");
      buttonText2.setText("Lava, head first. Quick and painless.");
      buttonText3.setText("Quicksand, head first, get it over with.");
      buttonText4.setText("Lava, feet first.");
    }
    if (step === 20)
    {
      boss.play('neutral');
      sadness++;
      text.setText("Favorite non-soda beverage?");   
      buttonText1.setText("Coffee.");
      buttonText2.setText("Milk.");
      buttonText3.setText("Water.");
      buttonText4.setText("Tea.");
    }
    if (step === 21)
    {
      boss.play('happy');
      text.setText("Alrighty, I think I've heard enough.\n We'll call you." + step);   
    buttonText1.setText("Thank you, I hope you reached your expectations.");
      buttonText2.setText("I'll be anxiously awating your call.");
      buttonText3.setText("You know, even if I didn't get the job\n you can still call me and let me know, like it's no big deal.");
      buttonText4.setText("*Shake hand firmly* Thank you sir, I look forward to working with you.");
    }
    
    step++;
}

function actionOnClick3 () {

    if (step === 1)
    {
      text.setText("If you were a fruit or vegetable,\nwhat would you be, and why?");   
      buttonText1.setText("A pineapple.");
      buttonText2.setText("A cactus, because I'm tough on the outside,\nbut resourceful on the inside");
      buttonText3.setText("Celery, because I burn more energy than I create.");
      buttonText4.setText("A cat, meow.");
    }
    if (step === 2)
    {
      boss.play('sad');
      sadness++;
      text.setText("Why do you have interest in this company?");   
    buttonText1.setText("Ever since I was a little boy I've dreamed of working at this company.");
      buttonText2.setText("My mom told me to apply because she wants me out of the house.");
      buttonText3.setText("I heard you don't drug test.");
      buttonText4.setText("This is the one company I can work for and\n honestly feel like I'm making the world better.");
    }
    if (step === 3)
    {
      text.setText("What on your resume would you say makes\nyou most qualified for this job?");  
      buttonText1.setText("My IQ of 160 makes me very intelligent and overqualified for this job.");
      buttonText2.setText("My leadership skills in college can \neasily transition towards synergy in the workplace.");
      buttonText3.setText("My synergetic attitude makes me right for this job.");
      buttonText4.setText("My entire resume is just the word 'synergy' repeated over and over again.");
    }
    if (step === 4)
    {
      text.setText("What is your biggest weakness?");   
        buttonText1.setText("My inability to work with others.");
      buttonText2.setText("I work too hard for my own good.");
      buttonText3.setText("My height.");
      buttonText4.setText("I'm really lazy and often don't get\n things turned in on time.")
    }
    if (step === 5)
    {
      text.setText("Where do you see yourself in 5 years?");
    buttonText1.setText("Sitting in your chair, asking\nsome young go-getter the same question.");
      buttonText2.setText("At the head of this company.");
      buttonText3.setText("I'll probably move on to bigger and better things,\n at a different company.");
      buttonText4.setText("I'll probably have a kid and\nbecome a stay at home dad.");
    }
    if (step === 6)
    {
      text.setText("Kirk or Picard?");   
    buttonText1.setText("Kirk.");
      buttonText2.setText("Picard.");
      buttonText3.setText("Reynolds.");
      buttonText4.setText("What?");
    }
    if (step === 7)
    {
      text.setText("Do you plan on havng kids any time soon?");   
    buttonText1.setText("I do, but the job will take priority over them.");
      buttonText2.setText("I didn't major in elextrical engineering to have kids.");
      buttonText3.setText("I'm infertile. <shed tear>");
      buttonText4.setText("I don't feel comfortable answering that questions");
    }
        if (step === 8)
    {
      text.setText("Could you describe an experience\nyou've had with adversity?");   
    buttonText1.setText("Hmm, I honestly can't think of one.\nThings always tend to work out well when I'm involved.");
      buttonText2.setText("I got in a fight with my former manager,\nso I ended up stealing his mailbox.");
      buttonText3.setText("One time I got really bad grade on a test back in college,\nin response I dropped the course.");
      buttonText4.setText("I once accidentally ate my roommate's birthday cake.\nThey were really upset. We ended up talking it out and now we're dating");
    }
        if (step === 9)
    {
      text.setText("Favorite color?");   
    buttonText1.setText("I'm colorblind <shed tear>");
      buttonText2.setText("Orange.");
      buttonText3.setText("Pink.");
      buttonText4.setText("Lavender");
    }
    if (step === 10)
    {
      text.setText("If you had a time machine that you could\nonly use twice, what would you do?");   
    buttonText1.setText("Go back in time and kill Hitler.");
      buttonText2.setText("Destroy it, nothing good comes from time travel.");
      buttonText3.setText("Witness the beginning of the universe.");
      buttonText4.setText("Travel back in time to the founding of this company,\nand invest all my money in its stock.");
    }
    if (step === 11)
    {
      text.setText("I see you eying the picture of my family.\nWhat do you think about my wife?");   
      buttonText1.setText("She's beautiful.");
      buttonText2.setText("I don't know, I haven't met her.\nI wouldn't judge her on appearance alone.");
      buttonText3.setText("You're lucky to have her.");
      buttonText4.setText("She's hot.");
    }
    if (step === 12)
    {
      text.setText("What did you on your 21st birthday?");   
      buttonText1.setText("I'm not 21 yet.");
      buttonText2.setText("I don't... remember.");
      buttonText3.setText("Sat down and had a nice bottle of wine with my girlfriend and her parents.");
      buttonText4.setText("Began investing in stock- we went up 10% that day.\nI can remember it like it was yesterday.");
    }
    if (step === 13)
    {
      text.setText("How do you organize your LEGO's?");   
      buttonText1.setText("By color.");
      buttonText2.setText("By shape and size.");
      buttonText3.setText("By the set that they belong to");
      buttonText4.setText("In a big pile on the floor.");
    }
    if (step === 14)
    {
      text.setText("If I tried to kill you, would you fight back?");   
      buttonText1.setText("I feel my death would benefit the company,\nif you felt it just to attack me.");
      buttonText2.setText("I've had my right hand on the trigger this whole time..");
      buttonText3.setText("Only if we fight like men- with our bare hands..");
      buttonText4.setText("I'd run away. The way to get the best of a fight is to avoid it.");
    }
    if (step === 15)
    {
      text.setText("What's something special about you\nthat the other candidates may not have?");   
      buttonText1.setText("I studied Russian at Oxford.");
      buttonText2.setText("I once killed a man using only a ballpoint pen.");
      buttonText3.setText("I once outran a swarm of killer bees by navigating a hedge maze of my own design.");
      buttonText4.setText("I was given the chance to live forever,\nbut turned it down to give Jazz a few extra years.");
    }
    if (step === 16)
    {
      text.setText("Interesting, tell me more.");   
      buttonText1.setText("It was by far the most invigorating time of my life.");
      buttonText2.setText("The only thing I regret is that it\ntook up a significant amount of my precious time.");
      buttonText3.setText("It was necessary, not just for me as a person,\nbut for the future of this company.");
      buttonText4.setText("If I could go back in time, I'd doit again in a heartbeat.");
    }
    if (step === 17)
    {
text.setText("You must fight a duo of either: a black bear\n, a hyena, a honey badger,\nor a horse.\nYou get one as your ally.");  
      buttonText1.setText("Mount the bear, fight the horse mounted hyena- aim low.");
      buttonText2.setText("Tag team the honey badger, let him do all the work against the horse bear.");
      buttonText3.setText("Do I get a sword? If so, mount me on a horse and I can take all 3.");
      buttonText4.setText("Hyena as my ally, vs. a black bear and a horse.");
    }
    if (step === 18)
    {
      text.setText("What was the name of the man you talked\nto in the elevator on the way up here?");   
      buttonText1.setText("Mr. Miyamoto?");
      buttonText2.setText("It was a she- her name was Summer. We're having lunch after this.");
      buttonText3.setText("Arthur Slugworth. I told him nothing.");
      buttonText4.setText("Oh my God, it was you.");
    }
    if (step === 19)
    {
      text.setText("You are sentenced to execution, and must\nchoose either a lava pit or\nquicksand to jump into.");   
      buttonText1.setText("Quicksand, legs first. So I'll have time to make my peace.");
      buttonText2.setText("Lava, head first. Quick and painless.");
      buttonText3.setText("Quicksand, head first, get it over with.");
      buttonText4.setText("Lava, feet first.");
    }
    if (step === 20)
    {
      text.setText("Favorite non-soda beverage?");   
      buttonText1.setText("Coffee.");
      buttonText2.setText("Milk.");
      buttonText3.setText("Water.");
      buttonText4.setText("Tea.");
    }
    if (step === 21)
    {
      text.setText("Alrighty, I think I've heard enough.\n We'll call you." + step);   
    buttonText1.setText("Thank you, I hope you reached your expectations.");
      buttonText2.setText("I'll be anxiously awating your call.");
      buttonText3.setText("You know, even if I didn't get the job\n you can still call me and let me know, like it's no big deal.");
      buttonText4.setText("*Shake hand firmly* Thank you sir, I look forward to working with you.");
    }
    
    step++;
}

function actionOnClick4 () {

    if (step === 1)
    {
      text.setText("If you were a fruit or vegetable,\nwhat would you be, and why?");   
      buttonText1.setText("A pineapple.");
      buttonText2.setText("A cactus, because I'm tough on the outside,\nbut resourceful on the inside");
      buttonText3.setText("Celery, because I burn more energy than I create.");
      buttonText4.setText("A cat, meow.");
    }
    if (step === 2)
    {
        boss.play('angry');
        anger++;
      text.setText("Why do you have interest in this company?");   
    buttonText1.setText("Ever since I was a little boy I've dreamed of working at this company.");
      buttonText2.setText("My mom told me to apply because she wants me out of the house.");
      buttonText3.setText("I heard you don't drug test.");
      buttonText4.setText("This is the one company I can work for and\n honestly feel like I'm making the world better.");
    }
    if (step === 3)
    {
      text.setText("What on your resume would you say makes\nyou most qualified for this job?");  
      buttonText1.setText("My IQ of 160 makes me very intelligent and overqualified for this job.");
      buttonText2.setText("My leadership skills in college can \neasily transition towards synergy in the workplace.");
      buttonText3.setText("My synergetic attitude makes me right for this job.");
      buttonText4.setText("My entire resume is just the word 'synergy' repeated over and over again.");
    }
    if (step === 4)
    {
      text.setText("What is your biggest weakness?");   
        buttonText1.setText("My inability to work with others.");
      buttonText2.setText("I work too hard for my own good.");
      buttonText3.setText("My height.");
      buttonText4.setText("I'm really lazy and often don't get\n things turned in on time.")
    }
    if (step === 5)
    {
      text.setText("Where do you see yourself in 5 years?");
    buttonText1.setText("Sitting in your chair, asking\nsome young go-getter the same question.");
      buttonText2.setText("At the head of this company.");
      buttonText3.setText("I'll probably move on to bigger and better things,\n at a different company.");
      buttonText4.setText("I'll probably have a kid and\nbecome a stay at home dad.");
    }
    if (step === 6)
    {
      text.setText("Kirk or Picard?");   
    buttonText1.setText("Kirk.");
      buttonText2.setText("Picard.");
      buttonText3.setText("Reynolds.");
      buttonText4.setText("What?");
    }
    if (step === 7)
    {
      text.setText("Do you plan on havng kids any time soon?");   
    buttonText1.setText("I do, but the job will take priority over them.");
      buttonText2.setText("I didn't major in elextrical engineering to have kids.");
      buttonText3.setText("I'm infertile. <shed tear>");
      buttonText4.setText("I don't feel comfortable answering that questions");
    }
        if (step === 8)
    {
      text.setText("Could you describe an experience\nyou've had with adversity?");   
    buttonText1.setText("Hmm, I honestly can't think of one.\nThings always tend to work out well when I'm involved.");
      buttonText2.setText("I got in a fight with my former manager,\nso I ended up stealing his mailbox.");
      buttonText3.setText("One time I got really bad grade on a test back in college,\nin response I dropped the course.");
      buttonText4.setText("I once accidentally ate my roommate's birthday cake.\nThey were really upset. We ended up talking it out and now we're dating");
    }
        if (step === 9)
    {
      text.setText("Favorite color?");   
    buttonText1.setText("I'm colorblind <shed tear>");
      buttonText2.setText("Orange.");
      buttonText3.setText("Pink.");
      buttonText4.setText("Lavender");
    }
    if (step === 10)
    {
      text.setText("If you had a time machine that you could\nonly use twice, what would you do?");   
    buttonText1.setText("Go back in time and kill Hitler.");
      buttonText2.setText("Destroy it, nothing good comes from time travel.");
      buttonText3.setText("Witness the beginning of the universe.");
      buttonText4.setText("Travel back in time to the founding of this company,\nand invest all my money in its stock.");
    }
    if (step === 11)
    {
      text.setText("I see you eying the picture of my family.\nWhat do you think about my wife?");   
      buttonText1.setText("She's beautiful.");
      buttonText2.setText("I don't know, I haven't met her.\nI wouldn't judge her on appearance alone.");
      buttonText3.setText("You're lucky to have her.");
      buttonText4.setText("She's hot.");
    }
    if (step === 12)
    {
      text.setText("What did you on your 21st birthday?");   
      buttonText1.setText("I'm not 21 yet.");
      buttonText2.setText("I don't... remember.");
      buttonText3.setText("Sat down and had a nice bottle of wine with my girlfriend and her parents.");
      buttonText4.setText("Began investing in stock- we went up 10% that day.\nI can remember it like it was yesterday.");
    }
    if (step === 13)
    {
      text.setText("How do you organize your LEGO's?");   
      buttonText1.setText("By color.");
      buttonText2.setText("By shape and size.");
      buttonText3.setText("By the set that they belong to");
      buttonText4.setText("In a big pile on the floor.");
    }
    if (step === 14)
    {
      text.setText("If I tried to kill you, would you fight back?");   
      buttonText1.setText("I feel my death would benefit the company,\nif you felt it just to attack me.");
      buttonText2.setText("I've had my right hand on the trigger this whole time..");
      buttonText3.setText("Only if we fight like men- with our bare hands..");
      buttonText4.setText("I'd run away. The way to get the best of a fight is to avoid it.");
    }
    if (step === 15)
    {
      text.setText("What's something special about you\nthat the other candidates may not have?");   
      buttonText1.setText("I studied Russian at Oxford.");
      buttonText2.setText("I once killed a man using only a ballpoint pen.");
      buttonText3.setText("I once outran a swarm of killer bees by navigating a hedge maze of my own design.");
      buttonText4.setText("I was given the chance to live forever,\nbut turned it down to give Jazz a few extra years.");
    }
    if (step === 16)
    {
      text.setText("Interesting, tell me more.");   
      buttonText1.setText("It was by far the most invigorating time of my life.");
      buttonText2.setText("The only thing I regret is that it\ntook up a significant amount of my precious time.");
      buttonText3.setText("It was necessary, not just for me as a person,\nbut for the future of this company.");
      buttonText4.setText("If I could go back in time, I'd doit again in a heartbeat.");
    }
    if (step === 17)
    {
      text.setText("You must fight a duo of either: a black bear\n, a hyena, a honey badger,\nor a horse.\nYou get one as your ally.");
      buttonText1.setText("Mount the bear, fight the horse mounted hyena- aim low.");
      buttonText2.setText("Tag team the honey badger, let him do all the work against the horse bear.");
      buttonText3.setText("Do I get a sword? If so, mount me on a horse and I can take all 3.");
      buttonText4.setText("Hyena as my ally, vs. a black bear and a horse.");
    }
    if (step === 18)
    {
      text.setText("What was the name of the man you talked\nto in the elevator on the way up here?");   
      buttonText1.setText("Mr. Miyamoto?");
      buttonText2.setText("It was a she- her name was Summer. We're having lunch after this.");
      buttonText3.setText("Arthur Slugworth. I told him nothing.");
      buttonText4.setText("Oh my God, it was you.");
    }
    if (step === 19)
    {
      text.setText("You are sentenced to execution,\nand must choose either a lava pit\nor quicksand to jump into.");   
      buttonText1.setText("Quicksand, legs first. So I'll have time to make my peace.");
      buttonText2.setText("Lava, head first. Quick and painless.");
      buttonText3.setText("Quicksand, head first, get it over with.");
      buttonText4.setText("Lava, feet first.");
    }
    if (step === 20)
    {
      text.setText("Favorite non-soda beverage?");   
      buttonText1.setText("Coffee.");
      buttonText2.setText("Milk.");
      buttonText3.setText("Water.");
      buttonText4.setText("Tea.");
    }
    if (step === 21)
    {
      text.setText("Alrighty, I think I've heard enough.\n We'll call you." + step);   
    buttonText1.setText("Thank you, I hope you reached your expectations.");
      buttonText2.setText("I'll be anxiously awating your call.");
      buttonText3.setText("You know, even if I didn't get the job\n you can still call me and let me know, like it's no big deal.");
      buttonText4.setText("*Shake hand firmly* Thank you sir, I look forward to working with you.");
    }
    
    step++;
}
