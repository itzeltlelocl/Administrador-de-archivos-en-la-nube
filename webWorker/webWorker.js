var i = 0;

function contador(){
    i = i + 1;
    postMessage(i);
    //se repetirá cada seg
    setTimeout("contador()", 700);
}//end contador

contador(); //llamar a la función

