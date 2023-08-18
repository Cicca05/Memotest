let turn=0;
let ficha1=null;
let ficha2=null;
let primeradadavuelta=null;
let segundadadavuelta=null;
let aciertos = 0;
let moves = 0;

let mostraraciertos = document.getElementById('aciertos');
console.log(aciertos);
let num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
num=num.sort(()=>{return Math.random()-0.5})
console.log(num);

function destapar(id){
  turn++;
      console.log(turn);
    if(turn==1){
      ficha1 = document.getElementById(id);
      primeradadavuelta =num[id]
      ficha1.innerHTML = primeradadavuelta;  
      ficha1.disabled = true;
    }else if(turn==2){
        ficha2 = document.getElementById(id);
        segundadadavuelta=num[id]
        ficha2.innerHTML =segundadadavuelta;
        ficha2.disabled=true;
        moves++;
      }
      if(primeradadavuelta==segundadadavuelta){
        turn=0;
        aciertos++;
        mostraraciertos.innerHTML=`aciertos: ${aciertos}`;
        console.log(aciertos);
      }
      if(aciertos==8){
      mostraraciertos.innerHTML=`aciertos: ${aciertos}Felicitaciones has ganado`;
      }
      else{
        setTimeout(()=>{
          ficha1.innerHTML=' ';
          ficha2.innerHTML=' ';
          ficha1.disabled= false;
          ficha2.disabled= false;
          turn=0;
        },2000);
  }
}
