"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

function generarInvitados() {
    let invitado1 = prompt("ingrese un nombre");
    let invitado2 = prompt("ingrese otro nombre");
    let invitado3 = prompt("ingrese un ultimo nombre");

    console.log(`los invitados son, ${invitado1}, ${invitado2} y ${invitado3}.`);
}

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada
generarInvitados();