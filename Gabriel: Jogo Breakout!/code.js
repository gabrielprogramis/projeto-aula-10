var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["84b79f90-83bc-4574-8c3c-95e36e7b77a2"],"propsByKey":{"84b79f90-83bc-4574-8c3c-95e36e7b77a2":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii/category_sports/bowlingball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii/category_sports/bowlingball.png"}}};
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

//variavel do placar do jogo
var placar = 0;

//estados do jogo
var estado = "inicial";

//criando grupo de blocos
var blocos = createGroup();

//função de criar blocos
function criarBlocos(x,y,cor1, cor2){
    for (var i=x;i<400;i+=100){
      var bloco=createSprite(i,75,50,50);
      var bloco2=createSprite(i,125,50,50);
      bloco.shapeColor = cor1;
      bloco2.shapeColor = cor2;
      blocos.add(bloco);
      blocos.add(bloco2);
  }
}



//chamando a função que cria linhas de blocos
criarBlocos(25,75,"red","blue");
criarBlocos(75,125,"blue","red");

//criando a bola e a raquete
var bola = createSprite(200, 300, 15, 15);
var raquete = createSprite(200, 360, 45, 12);

//creando barreiras
  createEdgeSprites();

//inicio da função draw
function draw() {
  background("white");
  
//mostrar o placar
textSize(20);
text("placar:"+placar, 15, 25);

//estado inicial do jogo
if (estado === "inicial") {
 fill("blue");
text("aperte ENTER para começar" ,55 ,230); 
}

//animação da bola
bola.setAnimation("bola");
bola.scale = 0.08;

//mover a raquete com o mouse
  raquete.x =World.mouseX;

//mover a bola apertando a tecla ENTER
  if (keyDown("ENTER")) {
    moverBola();
    estado = "jogando";
  }
  //funçoes de colisao
  bola.bounceOff(raquete,som);
  bola.bounceOff(topEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(blocos,destruir);
 
 //fim de jogo 
if (placar === 160) {
   venceu();
 }
  
if (bola.y > 400) {
  perdeu();
}


  
  //desenha os sprites na tela
  drawSprites();
}

//função de mover a bola 
function moverBola() {
  bola.velocityX =-8;
  bola.velocityY =8
  ;
}

//fuçao de som
function som() {
  playSound("assets/category_pop/cute_water_bubble.mp3", false);
}
//funçao de destruir blocos
function destruir(ball,bloco1) {
 bloco1.destroy();
 playSound("assets/category_explosion/8bit_explosion.mp3");
 placar += 10;
}

function venceu() {
 textSize(30);
 text("você ganhou !", 110, 260);
  bola.velocityX =-0;
  bola.velocityY =0; 
}


function perdeu() {
textSize(30);
 text("você perdeu :[ ", 110, 260);
  bola.velocityX =-0;
  bola.velocityY =0;  
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
