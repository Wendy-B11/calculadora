window.onload = inicio;

function inicio()
{
var operacion = prompt("Para sumar escriba 1, para restar escriba 2, para multiplicar escriba 3, para dividir escriba 4, para sacar raíz cuadrada escriba 5, para potencia escriba 6");
var a, b;
// TODO LO QUE SE INGRESA CON EL TECLADO ES DE TIPO CADENA

 operacion = Number(operacion);

 if(operacion==1 || operacion==2 || operacion==3 || operacion==4)
{
a = prompt("Ingrese a");
b = prompt("Ingrese b");
a = Number(a);
b = Number(b);
}
 else  {
 	if(operacion==5)
 		{
 		a = prompt("Ingrese a");
 		a = Number(a);
	 }
	 if(operacion == 5)
{
alert(Math.sqrt(a));
}
else{
if(operacion == 6)
{
	 a = prompt("Ingrese el número base");
	 b= prompt("Ingrese la potencia")
 	a = Number(a);
 	b = Number(b);
    alert(Math.pow(a,b));
}

 if(operacion == 1)
{
alert(a+b);
}
else{
if(operacion == 2)
{
alert(a-b);
}
else
{
if(operacion == 3)
{
alert(a*b);
}
else
{
if(operacion == 4)
{
if(b != 0)
{
alert(a/b);
}
else
{
alert("Error: Division por cero");
}
}
else
{
alert("Error: Operacion no valida");
}
}
}
}
}
}
}
