/*
For 5 bis; Carnelos Duarte Joaquin Alejo */
/*Enunciado:
Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 7 alumnos, informar por alert:
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar()
{

	let i;
	let sexo;
	let nota;
	let notaMenor=0;
	let sexoMenor;
	let acumulador=0
	let notaAcumulada=0;
	let promedio=0;
	let varonesAprobados=0;
	let bandera=0

	for(i=0;i<=6;i++){
		sexo=prompt("Ingrese sexo: f/m");{
			nota=parseInt(prompt("Ingre nota del alumno: 0-10"));
			while(isNaN(nota)||nota<0||nota>10){
				nota=parseInt(prompt("Por favor, ingrese nota del alumno: 0-10"));
			}
		}
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("Por favor,Ingrese sexo: f/m");
		}
		if(nota>5){
			if(sexo=="m"){
				varonesAprobados++;
			}
		}
		if (!(nota>=notaMenor)||bandera==0) {
			notaMenor=nota;
			sexoMenor=sexo;
			bandera=1;
		}
		notaAcumulada=notaAcumulada+nota;
	}
	promedio=Math.round(notaAcumulada/7);
	document.write("El promedio de las notas totales es " + promedio+" .<br>");
	document.write("La nota mas baja es " + notaMenor+" y el sexo de esa persona es "+sexoMenor+".<br>");
	document.write("La cantidad de varones aprobados fue de "+varonesAprobados+".<br>");
}