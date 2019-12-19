const juego=document.getElementById("game");
const reset=document.getElementById("resize")
reset.addEventListener('click', reconfi);
const colorfull=document.getElementById('colorido');
colorfull.addEventListener('click', colorf);
const clasico=document.getElementById('clasico');
clasico.addEventListener('click', clasic);
const erase=document.getElementById('erase');
erase.addEventListener('click', eras)



//crea el elemnto con un valor por default de 16
function crearC(tamaño=16){
    let anchoColumnas=540/tamaño;
    let totalCeldad=tamaño**2;
    for(let i=0;i<totalCeldad;i++){
        let celdas=document.createElement('div');
        celdas.className='cuadrado';
        celdas.style.width=`${anchoColumnas}px`;
        celdas.style.height=`${anchoColumnas}px`;
        juego.appendChild(celdas);



    };  
};
//pintar celda y borra
function pintarCelda(){
    juego.addEventListener('click',function(){

        let celda=document.querySelectorAll('.cuadrado');
        
    celda.forEach(function(caja){
        caja.addEventListener('mouseover', function(x){
           
            
            x.target.style.backgroundColor='#000000';
        })
    })
    })
      
}
function obtenerColor(){
    let array='0123456789ABCDEF';
    let colors='#';
    for (let i = 0; i < 6; i++) {
        colors += array[Math.floor(Math.random() * 16)];
    }
    return colors;
    
}

function colorf(){
    let celda=document.querySelectorAll('.cuadrado');
    celda.forEach(function(caja){
        caja.addEventListener('mouseover', function(x){
       
        
        x.target.style.backgroundColor = obtenerColor();
    })
    
})
}
function clasic(){
    let celda=document.querySelectorAll('.cuadrado');
    celda.forEach(function(caja){
        caja.addEventListener('mouseover', function(x){
       
        
        x.target.style.backgroundColor = '#000000';
    })
    
     
})

}
function eras(){
    let celda=document.querySelectorAll('.cuadrado');
    celda.forEach(function(caja){
        caja.addEventListener('mouseover', function(x){
            x.target.style.backgroundColor='#696969';
                
        })
    })   
}


    
//establece el numero de columnas
function reconfi(){
    let tamaño=prompt('escriba un numero entre 1 y 150');
    if(tamaño>0&& tamaño<151){
        juego.innerHTML='';
        crearC(tamaño);
        pintarCelda();



    }
    
};


 crearC();
 pintarCelda();


  
 
    
   



