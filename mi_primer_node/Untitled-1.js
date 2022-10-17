//Listas
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lista2 = ["hola", true, 12, undefined];

//se define con new y parentesis
const lista3 = new Array("1", 1, 3);
const espacios = new Array(3);

console.log(lista);
console.log(lista3);
console.log(espacios);

//se puede tener lista de listas

//-----------------------------------------------------
//OBJEdoS
const mobil = {

    altura:10,
    anchura:5,
    marca:"xiaomy",
    iswhite:true,
    contacdos:["luis","juan","pedro"],
    //objedo dentro del objedo
    tarjeta:{
        marca:"sandisk",
        almacenamiendo:32

    }
}
mobil.anio=2019;
mobil.marca="sansumg"

console.log(mobil.marca);
console.log(recorrido())


function recorrido(){
    for (let i = 0; i< mobil.length; i++) {    
         console.log(mobil[i]);
   
    }
}