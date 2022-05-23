var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2154242c-ad86-47e4-b2ac-5389a248376a","9aadf502-7c10-4c2f-a132-ebee01ea1fd8","81de95cd-e436-4c89-bd82-2a675ade7979","01bcde99-d527-4fe2-89fd-f6307c0857e6","4848d856-16d3-4468-8d3b-3a9fc30285f5","27938090-e2c8-4f2f-bdd8-32df316f1ae7"],"propsByKey":{"2154242c-ad86-47e4-b2ac-5389a248376a":{"name":"nave1","sourceUrl":"assets/api/v1/animation-library/gamelab/h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi/category_vehicles/ship03.png","frameSize":{"x":400,"y":248},"frameCount":1,"looping":true,"frameDelay":2,"version":"h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":248},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi/category_vehicles/ship03.png"},"9aadf502-7c10-4c2f-a132-ebee01ea1fd8":{"name":"nave2","sourceUrl":"assets/api/v1/animation-library/gamelab/MVFn28R_CImOTTFhErwa2uI0MOm1bCSD/category_vehicles/ship16.png","frameSize":{"x":296,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"MVFn28R_CImOTTFhErwa2uI0MOm1bCSD","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":296,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MVFn28R_CImOTTFhErwa2uI0MOm1bCSD/category_vehicles/ship16.png"},"81de95cd-e436-4c89-bd82-2a675ade7979":{"name":"nave3","sourceUrl":"assets/api/v1/animation-library/gamelab/CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo/category_vehicles/ship14.png","frameSize":{"x":399,"y":378},"frameCount":1,"looping":true,"frameDelay":2,"version":"CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":378},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo/category_vehicles/ship14.png"},"01bcde99-d527-4fe2-89fd-f6307c0857e6":{"name":"nave5","sourceUrl":"assets/api/v1/animation-library/gamelab/T_hk5BFBexob16gBEUk.HrOnP8dsGLQu/category_vehicles/ship05.png","frameSize":{"x":291,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T_hk5BFBexob16gBEUk.HrOnP8dsGLQu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":291,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T_hk5BFBexob16gBEUk.HrOnP8dsGLQu/category_vehicles/ship05.png"},"4848d856-16d3-4468-8d3b-3a9fc30285f5":{"name":"nave4","sourceUrl":"assets/api/v1/animation-library/gamelab/16swvA_atz8z1bmx9elbnfkygyuHWDMs/category_vehicles/ship10.png","frameSize":{"x":398,"y":298},"frameCount":1,"looping":true,"frameDelay":2,"version":"16swvA_atz8z1bmx9elbnfkygyuHWDMs","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":298},"rootRelativePath":"assets/api/v1/animation-library/gamelab/16swvA_atz8z1bmx9elbnfkygyuHWDMs/category_vehicles/ship10.png"},"27938090-e2c8-4f2f-bdd8-32df316f1ae7":{"name":"diamante","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"}}};
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

var life = 0;
var car1, car2, car3, car4;
var  boundary1, boundary2;
var car5;
var diamante;

 boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  car5 = createSprite(20,190,13,13);
  car5.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(220,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(275,250,10,10);
  car4.shapeColor = "red";
  
  
  car1.velocityY = 2;
  car2.velocityY = 2;
  car3.velocityY = -2;
  car4.velocityY = -2;

car1.setAnimation("nave1");
car1.scale = 0.09;

car2.setAnimation("nave2");
car2.scale = 0.06;

car3.setAnimation("nave3");
car3.scale = 0.06;

car4.setAnimation("nave4");
car4.scale = 0.06;

car5.setAnimation("nave5");
car5.scale = 0.07;

 diamante = createSprite(374, 200 ,10,10);
 diamante.setAnimation("diamante");
 diamante.scale =0.09;  

function draw() {
background("white");
 text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);  
  
 
 if(keyDown("right")){
    car5.x = car5.x + 3;
  }
  if(keyDown("left")){
    car5.x = car5.x - 3;
  }
  
  if(
     car5.isTouching(car1)||
     car5.isTouching(car2)||
     car5.isTouching(car3)||
     car5.isTouching(car4))
  {
     car5.x = 20;
     car5.y = 190;
     life = life + 1;
  } 
  
 if (car5.isTouching(diamante)) {
    textSize(25);
    fill("green");
    text("VOCÊ VENCEU!", 120, 200);
     car1.x = 100;
     car1.y = 145;
     car2.x = 165;
     car2.y = 245;
     car3.x = 210;
     car3.y = 137;
     car4.x = 265;
     car4.y = 240;
     car5.x = 373;
     car5.y = 196;
  }
   
  if(life==5) {
    fill("red");
    textSize(30);
    text("Game Over!",140,200);
     car1.x = 100;
     car1.y = 145;
     car2.x = 165;
     car2.y = 245;
     car3.x = 210;
     car3.y = 137;
     car4.x = 265;
     car4.y = 240;
     car5.x = 30;
     car5.y = 192;
  }
  
  drawSprites();
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
