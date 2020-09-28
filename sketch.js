var gameState=0;
 var playerCount,database,form,player,game
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game=new Game();
    game.getState();
    game.start();
    {

database.ref('/').update({

gameState:state

});
}
    

}

function draw(){

}


