

let canvas = document.getElementById("snake");/*chama o canvas do html para o script*/
let context = canvas.getContext("2d");/* o contexto renderiza o jogo colocando ("2d") rendeziza como 2d.*/
let box = 32;                          /*tamanho de cada quadradinho da cobrinha*/
let snake = [];
snake[0] = {
    x:8 * box,      /*setado um tamanho p/ o array*/ 
    y:8 * box
}
let direction = "right"
let food ={
    x: Math.floor(Math.random()* 15 + 1) * box,
    y: Math.floor(Math.random()* 15 + 1) * box
    
}


function criarBG() {
    context.fillStyle = "white"/* o  fillStyle trabalha con o estilo do nosso contexto*/ 
    context.fillRect(0, 0, 16 * box, 16 * box);/* o fillRect vai desenhar o retangulo onde acontece o jogo 
tem 4 parâmetros posição de x e y altura e largura no nosso caso x=0 y=0 alt=16box e larg=16box.cada box tem
32px como determinamos em let box*/
}

function criarCobra(){
    for(i=0; i< snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box,box);
    }

}

function drawFood() {             /*desenha a comida da cobra*/ 
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";//esta função não permite que apertando o botão do sentido contrario ao sentido que a cobra vai ela retorne e choque com o próprio corpo
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}


function iniciarJogo(){

    if(snake[0].x > 15 * box && direction == "right")snake[0].x = 0; /*se a snake[0]cabeça for p/direita na posição maior que 15*box ela sai do limite do canvas essa função faz com que quando isso ocorra ela aparece do lado oposto na posição [0]*/ 
    if(snake[0].x < 0 * box && direction == "left")snake[0].x = 16 * box; /*se a snake[0]cabeça for p/esquerda na posição menor que 0 ela sai do limite do canvas essa função faz com que quando isso ocorra ela aparece do lado oposto na posição [16]*/ 
    if(snake[0].y > 15 * box && direction == "down")snake[0].y = 0; /*se a snake[0]cabeça for p/baixo na posição maior que 15*box ela sai do limite do canvas essa função faz com que quando isso ocorra ela aparece do lado oposto na posição [0]*/ 
    if(snake[0].y < 0 * box && direction == "up")snake[0].y = 16 * box; /*se a snake[0]cabeça for p/direita na posição menor que 0 ela sai do limite do canvas essa função faz com que quando isso ocorra ela aparece do lado oposto na posição [16]*/ 

    for(i = 1; i<snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){ //se a posição da cabeça snaske[0] e a posiçãodo corpo snake[i] forem a mesma essa fuçao vai  parar o jogo e mostrar o alert
            clearInterval(jogo);
            alert("GAME OVER Try Again!!! :(");
        }
    }
   criarBG();
   criarCobra();
   drawFood();
   
   
   let snakex = snake[0].x; // variavel referente a posicão x da cobra
   let snakey = snake[0].y; //variavel referente a posicão y da cobra
   
   if(direction == "right") snakex += box;
   if(direction == "left") snakex -= box;
   if(direction == "up") snakey -= box;
   if(direction == "down") snakey += box;
   
   
   if(snakex != food.x || snakey != food.y){//se a posição da cobra em XeY for a mesma da comida essa função add 1 elemento (quadradinho) e gera ooutro elemento em uma posição aleatória
    snake.pop();
   }
   else{
    food.x = Math.floor(Math.random()* 15 + 1) * box;
    food.y = Math.floor(Math.random()* 15 + 1) * box;
    
   }

   let newHead = {
       x: snakex,
       y: snakey
   }
   snake.unshift(newHead);
   
}
let jogo = setInterval(iniciarJogo, 100);/*setado o intervalo de atualização do jogo em milisegundos*/ 