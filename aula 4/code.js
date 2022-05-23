var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3f946d50-4703-4ad3-ab81-585dbba41681","f853d7dc-36b3-4a04-9b5b-9c68d0a56885","a3eb873c-46bc-4c22-a82c-0b85abd6c44e"],"propsByKey":{"3f946d50-4703-4ad3-ab81-585dbba41681":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/_voB8z1tybHuDAKJb3XrVhG9nCoFKaj./category_sports/soccer_yellow.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"_voB8z1tybHuDAKJb3XrVhG9nCoFKaj.","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_voB8z1tybHuDAKJb3XrVhG9nCoFKaj./category_sports/soccer_yellow.png"},"f853d7dc-36b3-4a04-9b5b-9c68d0a56885":{"name":"robo","sourceUrl":"assets/api/v1/animation-library/gamelab/sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k/category_robots/little_robot.png","frameSize":{"x":161,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k/category_robots/little_robot.png"},"a3eb873c-46bc-4c22-a82c-0b85abd6c44e":{"name":"jogador","sourceUrl":"assets/api/v1/animation-library/gamelab/wpSdFe2hmIzMXy67OwlaFj7TTt698xiT/category_people/blue_shirt_hand_up3.png","frameSize":{"x":176,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"wpSdFe2hmIzMXy67OwlaFj7TTt698xiT","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wpSdFe2hmIzMXy67OwlaFj7TTt698xiT/category_people/blue_shirt_hand_up3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";

ball.setAnimation("bola");
ball.scale = 0.05;

computerPaddle.setAnimation("robo");
computerPaddle.scale = 0.30;

playerPaddle.setAnimation("jogador");
playerPaddle.scale = 0.20;

function draw() {
  background(220);
if (ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle)) {
   playSound("assets/category_objects/kickball.mp3");  
  }
    
 
  
  
  if (keyDown("up")) {
    playerPaddle.y-=10;
  }
  
  if (keyDown("down")) {
    playerPaddle.y+=10;
  }
 
 if (keyDown("space")) {
    ball.velocityX=4;
    ball.velocityY=4;
   
 }
 
   computerPaddle.y= ball.y;
crearREDE();

  
 if (computerPaddle.y <50) {
    computerPaddle.y = 50; 
  }
   

 if (computerPaddle.y >350) {
    computerPaddle.y = 350; 
  }
  
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
playerPaddle.bounceOff(edges);  
  drawSprites();
  
}
function crearREDE() {
  for (var i = 0; i < 400; i+=20) {
  line(200, i, 200, i+10);
}
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
