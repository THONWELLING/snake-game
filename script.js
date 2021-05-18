let canvas = document.getElementById("snake");/*chama o canvas do html para o script*/
let context = canvas.getContext("2d");/* o contexto renderiza o jogo colocando ("2d") rendeziza como 2d.*/
let box = 32;                          /*tamanho de cada quadradinho da cobrinha*/
let snake = [];
snake[0] = {
    x:8 * box,      /*setado um tamanho p/ o array*/ 
    y:8 * box
}
let direction = "right"


function criarBG() {
    context.fillStyle = "lightblue"/* o  fillStyle trabalha con o estilo do nosso contexto*/ 
    context.fillRect(0, 0, 16 * box, 16 * box);/* o fillRect vai desenhar o retangulo onde acontece o jogo 
tem 4 parâmetros posição de x e y altura e largura no nosso caso x=0 y=0 alt=16box e larg=16box.cada box tem
32px como determinamos em let box*/
}

function criarCobra(){
    for(i=0; i< snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box,box);
    }

}

function iniciarJogo(){

   criarBG();
   criarCobra();
   
   let snakex = snake[0].x; /* variavel referente a posicão x da cobra*/
   let snakey = snake[0].y; /*variavel referente a posicão y da cobra*/ 

   if(direction == "right") snakex += box;
   if(direction == "left") snakex -= box;
   if(direction == "up") snakey -= box;
   if(direction == "down") snakey += box;

   snake.pop();

   let newHead = {
       x: snakex,
       y: snakey
   }
   snake.unshift(newHead);
   
}
let jogo = setInterval(iniciarJogo, 100);/*setado o intervalo de atualização do jogo em milisegundos*/ 