
// DESAFÍOS VARIABLES Y CONTANTES //

// Desafío Uno 

/* 
Declará las siguientes variables y asignales tus datos como valores:
- miNombre
- miApellido
- miEdad
- deDondeSoy
Luego mostralos en la terminal usando console.log()
Y si te sentís comodo/a compartilos a modo de captura en Discord ¡así nos vamos 
conociendo!
   Ej.: 
*/
var miNombre = "Micaela";
var miApellido = "L'Amour";
var miEdad = 22;
var deDondeSoy = "Cair Parave - Narnia";

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(deDondeSoy);



// Desafio Dos 

/* 
Declará las siguientes variables y constantes
- var opcionUno = 11
- var opcionDos = 56
- const opcionTres = 45
- var opcionCuatro = 3
- const opcionCinco = 21
- const opcionSeis = 7
- const opcionSiete = 200
- var opcionOcho = 2040
- var opcionNueve = 365
- const opcionDiez = 0
Dependiendo del tipo de variable, observa cuáles son las  opciones que pueden 
cambiar su valor numérico y cuáles no
Una vez identificadas, imprimilas en la terminal de la siguiente manera
   Ej.: 
*/
console.log("Las opciones que pueden cambiar su valor son: ");
console.log(opcionUno);
console.log(opcionDos);

console.log("Las opciones que no pueden cambiar su valor son: ");
console.log(opcionTres);



// Desafío Tres

/* 
¡Ayudemos a este prófugo a escapar de la justicia! Vamos a crearle una nueva 
identidad
Dato: Los buscan por amagar introducirse a la carrera de Apx, pero es buena gente.

Declará estas variables con sus respectivos valores ya establecidos y mostralas en
la terminal usando console.log()
- surname = "Vázquez"
- name = "Jose Maria"
- sex = "M"
- nationality = "Argentina"
- dateOfBirth = "11 Sep 1997"
También declará las siguientes variables, y en este caso, colocá vos los valores
que quieras.
- newSurname
- newName
- newSex
- newNationality
- newDateOfBirth
   Ej.:
*/
var newSurname = "Carvalho";
var newName = "Maria Jose";
var newSex = "F";
var newNationality = "Brasilera";
var newDateOfBirth = "11 Mar 1995";

/*
Imprimí juntas la identidad anterior y la identidad nueva en la terminal, colocando
en cada una un console.log() que represente cuál es cuál
   Ej.: 
*/
console.log("Antigua identidad del individuo: ");
console.log(surname);
console.log(name);
console.log(sex);
console.log(nationality);
console.log(dateOfBirth);

console.log("Nueva identidad del individuo: ");
console.log(newSurname);
console.log(newName);
console.log(newSex);
console.log(newNationality);
console.log(newDateOfBirth);




// DESAFÍOS TEXTOS, NÚMEROS Y ALGO MÁS //

// Desafío Uno

/*
¿En qué año nacieron estas personas?
Declará una constante añoActual y colocale como valor el año en el que estamos
También las siguientes constantes con los siguientes valores:
- edadMagui =  28
- edadJuan = 22
- edadFilomena = 36
- edadMarcelo = 75
- edadTamara = 10
- edadSerapio = 40
Ahora, una constante añoDeNacimientoMagui, añoDeNacimientoJuan, y así sucesivamente 
para cada uno de los nombres, a estas nuevas constantes colocales como valor la resta
entre añoActual y las variables con las edades (edadMagui, edadJuan, etc..) 
   Ej.: 
*/
const edadRomeo = 20;
const edadJulieta = 18;

const añoDeNacimientoRomeo = añoActual - edadRomeo;
const añoDeNacimientoJulieta = añoActual - edadJulieta;

/* 
Consejo, para que ambas constantes al mostrarlas en la terminal no queden pegadas

                   // ejemplo //
        
Colocá entre cada una, al momento de declararlas, un espacio entre cada operador

                  // ejemplo//


Imprimí los resultados usando console.log() de la siguiente manera
   Ej.:
*/
console.log("Romeo nació en el año", añoDeNacimientoRomeo);
console.log("Julieta nacio en el año", añoDeNacimientoJulieta);



// Desafío Dos 
// Yo no sé hasta que punto este desafío es serio (? 

/*
Declará las siguientes constantes con los siguientes valores
- primerNombre = "Aitor"
- primerApellido = "Tilla"

- segundoNombre = "Elvis"
- segundoApellido = "Tek"

- tercerNombre = "Inés"
- tercerApellido = "Esario"

- cuartoNombre = "Elsa"
- cuartoApellido = "Capunta"
Concatena cada nombre con su respectivo apellido, colocando la operación de 
concatenación en una nueva constante primerVinculo, segundoVinculo, etc. 
crea una para cada par
   Ej.: 
*/
const primerVinculo = primerNombre + primerApellido;

/* 
Mostrá los resultados en la terminal
   Ej.:
*/
console.log(primerVinculo);



// Desafío Tres

/*
Concatena Strings y Numbers
Declará las siguientes constantes con sus respectivos valores
- primerProducto = "Celular"
- segundoProducto = "Bicicleta"
- tercerProducto = "Notebook"
- cuartoProducto = "Guitarra"

- primerProductoPrecio = 62000
- segundoProductoPrecio = 68000
- tercerProductoPrecio = 150000
- cuartoProductoPrecio = 20000
Declará una constante resultadoPrimerProducto, resultadoSegundoProducto, así para cada
uno de los productos, y colocales como valor la suma (concatenación) entre primerProducto
y primerProductoPrecio, segundoProducto y segundoProductoPrecio, así sucesivamente..
   Ej.:
*/
const resultadoPrimerProducto = primerProducto + primerProductoPrecio;
const resultadoSegundoProducto = segundoProducto + segundoProductoPrecio;

/*
Mostrá los resultados en la terminal
   Ej.:
*/
console.log(resultadoPrimerProducto);
console.log(resultadoSegundoProducto);



// NOTA DE VITAL IMPORTANCIA ponele..//

/*
Siguiendo los consejos de Marce, capaz si estaría bueno poner como se tiene que ver
el resultado final en la terminal, por ser la primera vez tienen contancto con esto,
al menos pa los desafíos más largos
*/



