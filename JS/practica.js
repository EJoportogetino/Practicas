// function viajar(destino) {
//     if (destino === 'Brasil') {
//         console.log ('gire a la izq');
//     } else if (destino === 'Argentina') {
//         console.log ('gire a la derec');
//     }
//      else {
//         console.log ('comete la vereda');
//      }    
// }

// viajar('fgvhbghbgv');

// function puedemanejar (edad){
//     if (edad >= 18) {
//         console.log ('sipi');
//     } else if (edad < 18) {
//         console.log ('nopo');
//     } 
// }

// puedemanejar(54);

   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

function nueve(num)
{
  if (num>=0 && num<=9)
    {
        if (num===9)
          {return(true)}
        else
          {return(false)}
    }
  else
    {
      num = num / 10;
      //console.log(Math.floor(num));
      return(nueve(num));
    }
}

//console.log(nueve(1234));
console.log(nueve(9234));
//console.log(nueve(9));
//console.log(nueve(4));